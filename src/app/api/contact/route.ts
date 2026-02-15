import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// =============================================================================
// Validation Schema
// =============================================================================

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

// =============================================================================
// Resend Client
// =============================================================================

const resend = new Resend(process.env.RESEND_API_KEY);

// =============================================================================
// Email Template
// =============================================================================

interface EmailFields {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

function buildContactEmailHtml(fields: EmailFields): string {
  const preheader = `Mesaj nou de la ${fields.name}`;

  const row = (label: string, content: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #e5e5e5;">
        <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#737373;margin-bottom:4px;">${label}</span>
        ${content}
      </td>
    </tr>`;

  const textValue = (v: string) =>
    `<span style="font-size:15px;color:#171717;">${v}</span>`;

  const linkValue = (href: string, v: string) =>
    `<a href="${href}" style="font-size:15px;color:#15803d;text-decoration:none;">${v}</a>`;

  const contactRows = [
    row("Nume", textValue(fields.name)),
    row("Email", linkValue(`mailto:${fields.email}`, fields.email)),
    fields.phone ? row("Telefon", linkValue(`tel:${fields.phone}`, fields.phone)) : "",
  ].join("");

  return `<!DOCTYPE html>
<html lang="ro" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;">${preheader}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;">
    <tr><td style="padding:32px 16px;" align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background-color:#15803d;padding:24px 32px;">
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">Cerere nouă de contact</h1>
          </td>
        </tr>
        <!-- Contact details -->
        <tr>
          <td style="padding:24px 32px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              ${contactRows}
            </table>
          </td>
        </tr>
        <!-- Message body -->
        <tr>
          <td style="padding:24px 32px;">
            <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#737373;margin-bottom:8px;">Mesaj</span>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="background-color:#f5f5f5;border-radius:6px;padding:16px;font-size:15px;line-height:1.6;color:#171717;">
                  ${fields.message.replace(/\n/g, "<br />")}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Reply CTA -->
        <tr>
          <td style="padding:0 32px 32px;" align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="background-color:#15803d;border-radius:6px;text-align:center;">
                  <a href="mailto:${fields.email}" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;">Răspunde</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background-color:#f5f5f5;padding:16px 32px;text-align:center;">
            <span style="font-size:12px;color:#737373;">Trimis prin formularul de contact &mdash; Trend Wood Consult</span>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// =============================================================================
// POST Handler
// =============================================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const to = process.env.CONTACT_EMAIL_TO || "info@trendwood.ro";
    const from = process.env.CONTACT_EMAIL_FROM || "noreply@launchinto.space";

    const { data: sendResult, error: sendError } = await resend.emails.send({
      from: `Trend Wood Consult <${from}>`,
      to,
      replyTo: data.email,
      subject: `Mesaj nou de la ${data.name}`,
      html: buildContactEmailHtml({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    });

    if (sendError || !sendResult?.id) {
      console.error("Resend error:", sendError ?? "No email ID returned");
      return NextResponse.json(
        { success: false, message: "A apărut o eroare la trimiterea mesajului." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mesajul a fost trimis cu succes." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "A apărut o eroare. Vă rugăm să încercați din nou." },
      { status: 500 }
    );
  }
}
