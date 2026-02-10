'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const t = useTranslations('form')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  )

  const contactSchema = z.object({
    name: z.string().min(2, t('validation.nameMin')),
    email: z.string().email(t('validation.emailInvalid')),
    phone: z.string().optional(),
    message: z.string().min(10, t('validation.messageMin')),
  })

  type ContactFormData = z.infer<typeof contactSchema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="p-8 bg-forest/10 border border-forest/20 text-center">
        <p className="font-display text-h3 text-forest mb-2">{t('successTitle')}</p>
        <p className="text-stone">{t('successMessage')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-small font-medium text-charcoal mb-2"
        >
          {t('name')} {t('required')}
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={cn(
            'w-full px-4 py-3 bg-cream border text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all',
            errors.name ? 'border-red-500' : 'border-border'
          )}
          placeholder={t('namePlaceholder')}
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
          {t('email')} {t('required')}
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={cn(
            'w-full px-4 py-3 bg-cream border text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all',
            errors.email ? 'border-red-500' : 'border-border'
          )}
          placeholder={t('emailPlaceholder')}
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
          {t('phone')}
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="w-full px-4 py-3 bg-cream border border-border text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all"
          placeholder={t('phonePlaceholder')}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-small font-medium text-charcoal mb-2"
        >
          {t('message')} {t('required')}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={cn(
            'w-full px-4 py-3 bg-cream border text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all resize-none',
            errors.message ? 'border-red-500' : 'border-border'
          )}
          placeholder={t('messagePlaceholder')}
        />
        {errors.message && (
          <p className="mt-1 text-small text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-small">
          {t('errorMessage')}
        </div>
      )}

      {/* Submit */}
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>
    </form>
  )
}
