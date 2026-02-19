import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Trend Wood Consult',
    short_name: 'Trend Wood',
    description: 'Mobilier din lemn masiv realizat la comandă',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFBF7',
    theme_color: '#2D4739',
    icons: [
      {
        src: '/icon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/icon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
