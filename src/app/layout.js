import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalitics from '@/Components/googleAnalitics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JSONease: Your Ultimate JSON Formatter for Elegant Data Presentation',
  description: 'Welcome to JSONease – your one-stop solution for effortless JSON formatting. Our intuitive JSON formatter simplifies the process of transforming raw data into elegant structures, enhancing both functionality and visual appeal. Experience the ease of organizing and beautifying your JSON code with our user-friendly tools. JSONease: where formatting meets simplicity for an elevated coding experience.',
  keywords: "JSON formatter, JSONformatter, JSONease, JSON ease, JSON beautifier, online JSON formatter, format JSON, JSON prettifier, pretty print JSON, JSON indentation, JSON syntax highlighter, JSON structure enhancer, JSON code readability, JSON editor, JSON validation, JSON minifier, JSON formatting tool, code beautification, developer tool"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalitics />
        {children}
      </body>
    </html>
  )
}
