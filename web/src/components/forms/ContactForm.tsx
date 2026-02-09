"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
  email: z.string().email("Adresă de email invalidă"),
  phone: z.string().optional(),
  message: z.string().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="p-8 bg-forest/10 border border-forest/20 text-center">
        <p className="font-display text-h3 text-forest mb-2">Mulțumim!</p>
        <p className="text-stone">Revenim în curând.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-small font-medium text-charcoal mb-2"
        >
          Numele dumneavoastră *
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className={cn(
            "w-full px-4 py-3 bg-cream border text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all",
            errors.name ? "border-red-500" : "border-border"
          )}
          placeholder="Ion Popescu"
        />
        {errors.name && (
          <p className="mt-1 text-small text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-small font-medium text-charcoal mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={cn(
            "w-full px-4 py-3 bg-cream border text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all",
            errors.email ? "border-red-500" : "border-border"
          )}
          placeholder="email@exemplu.ro"
        />
        {errors.email && (
          <p className="mt-1 text-small text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-small font-medium text-charcoal mb-2"
        >
          Telefon (opțional)
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          className="w-full px-4 py-3 bg-cream border border-border text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all"
          placeholder="07XX XXX XXX"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-small font-medium text-charcoal mb-2"
        >
          Spuneți-ne despre proiect *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={cn(
            "w-full px-4 py-3 bg-cream border text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all resize-none",
            errors.message ? "border-red-500" : "border-border"
          )}
          placeholder="Descrieți pe scurt proiectul dumneavoastră..."
        />
        {errors.message && (
          <p className="mt-1 text-small text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-small">
          Ceva n-a mers. Încercați din nou?
        </div>
      )}

      {/* Submit */}
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Un moment..." : "Trimite mesajul"}
      </Button>
    </form>
  );
}
