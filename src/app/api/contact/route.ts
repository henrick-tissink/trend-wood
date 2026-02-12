import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = contactSchema.parse(body);

    // For now, the submission is validated but not persisted
    // In production, this would send an email or store in a database

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // await sendEmail({
    //   to: "info@trendwood.ro",
    //   subject: `Mesaj nou de la ${data.name}`,
    //   body: `
    //     Nume: ${data.name}
    //     Email: ${data.email}
    //     Telefon: ${data.phone || "Nu a fost furnizat"}
    //
    //     Mesaj:
    //     ${data.message}
    //   `,
    // });

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
      { success: false, message: "A apărut o eroare. Încercați din nou." },
      { status: 500 }
    );
  }
}
