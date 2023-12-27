'use client'
import React from 'react'
import Script from "next/script"

const GoogleAnalitics = () => {
    return (
        <>
            <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-9TY68G6ZZD" />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-9TY68G6ZZD', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalitics