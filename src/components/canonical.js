"use client"
import { usePathname } from 'next/navigation';

export default function CanonicalURL() {
    const siteUrl = typeof window !== "undefined" && window?.location?.origin;
    const pathname = usePathname();
    const canonicalUrl = `${siteUrl ? siteUrl : ""}${pathname}`

    return (
        <link rel="canonical" href={canonicalUrl} />
    );
};