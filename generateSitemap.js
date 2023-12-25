const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const generateSitemap = async () => {
    const sitemapStream = new SitemapStream({ hostname: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000' });

    // Add your dynamic URLs
    sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1 });
    sitemapStream.write({ url: '/aboutus', changefreq: 'daily', priority: 0.8 });
    sitemapStream.write({ url: '/privacy-policy', changefreq: 'daily', priority: 0.9 });
    // Add more URLs as needed

    sitemapStream.end();

    const sitemap = await streamToPromise(sitemapStream).then((data) => data.toString());

    fs.writeFileSync('./public/sitemap.xml', sitemap);
};

generateSitemap();
