export async function GET() {
    const baseUrl = 'https://wearesquares.com';
    const lastModified = new Date().toISOString();

    const staticPages = [
        '/',
        '/about',
        '/contact',
        '/store',
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
        .map((url) => {
            return `
                <url>
                    <loc>${baseUrl}${url}</loc>
                    <lastmod>${lastModified}</lastmod>
                </url>
            `;
        })
        .join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
