import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JSON Formatter',
  description: '"Effortlessly format and beautify JSON data with our online JSON formatter. Improve readability and structure of your JSON objects with ease. Indent, highlight, and organize your JSON code for better clarity. Try our JSON formatter now and enhance your development workflow',
  keywords: "JSON formatter, JSON beautifier, online JSON formatter, format JSON, JSON prettifier, pretty print JSON, JSON indentation, JSON syntax highlighter, JSON structure enhancer, JSON code readability, JSON editor, JSON validation, JSON minifier, JSON formatting tool, code beautification, developer tool"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
