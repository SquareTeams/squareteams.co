export async function GET() {
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://wearesquares.com/sitemap-app.xml</loc>
    </sitemap>
    <sitemap>
        <loc>https://wearesquares.com/blog/sitemap_index.xml</loc>
    </sitemap>
</sitemapindex>`;

    return new Response(sitemapIndex, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
