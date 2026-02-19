import { ImageResponse } from 'next/og'
import { getProjectBySlug } from '@/lib/sanity/queries'
import type { Locale } from '@/lib/i18n/config'

export const runtime = 'edge'
export const alt = 'Trend Wood Project'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export default async function Image({ params }: Props) {
  const { locale, slug } = await params
  const project = await getProjectBySlug(slug, locale as Locale)

  const title = project?.title || project?.titleFallback || slug
  const category = project?.category || project?.categoryFallback || ''

  return new ImageResponse(
    (
      <div
        style={{
          background: '#2D4739',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        {/* Category label */}
        {category && (
          <div
            style={{
              fontSize: 20,
              color: '#FDFBF7',
              opacity: 0.7,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {category}
          </div>
        )}

        {/* Project title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#FDFBF7',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: '#FDFBF7',
              opacity: 0.9,
            }}
          >
            TREND WOOD
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
