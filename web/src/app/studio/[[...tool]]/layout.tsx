export const metadata = {
  title: 'Trend Wood CMS',
  description: 'Content management for Trend Wood website',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
