import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import CanonicalURL from '@/components/canonical'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JSON Stringify, JSON Formatter and JSON Prettier',
  description: 'Efficiently format JSON with our tool where structure meets simplicity. Elevate code readability and efficiency using our intuitive JSON formatter and prettifier.',
  keywords: "JSON Stringify, JSON Stringify online, JSON formatter, JSON formatter online, JSONformatter, JSONease, JSON ease, JSON beautifier, online JSON formatter, format JSON, JSON prettifier, pretty print JSON, JSON indentation, JSON syntax highlighter, JSON structure enhancer, JSON code readability, JSON editor, JSON validation, JSON minifier, JSON formatting tool, code beautification, developer tool",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSF4R9P3');
          `}
        </Script>
        <CanonicalURL />
      </head>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSF4R9P3" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
