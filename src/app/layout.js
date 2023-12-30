import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalitics from '@/Components/googleAnalitics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Ultimate JSON Formatter for Elegant Data Presentation',
  description: 'Efficiently format JSON with our tool where structure meets simplicity. Elevate code readability and efficiency using our intuitive JSON formatter and prettifier.',
  keywords: "JSON formatter, JSONformatter, JSONease, JSON ease, JSON beautifier, online JSON formatter, format JSON, JSON prettifier, pretty print JSON, JSON indentation, JSON syntax highlighter, JSON structure enhancer, JSON code readability, JSON editor, JSON validation, JSON minifier, JSON formatting tool, code beautification, developer tool",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6719240334551822" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6719240334551822"
          crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <GoogleAnalitics />
        {children}
      </body>
    </html>
  )
}
