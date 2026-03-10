export const dynamic = 'force-static';

export function GET() {
    const baseUrl = 'https://pytron-kit.github.io';

    // Define the routes based on the directory structure
    const routes = [
        '/',
        '/docs',
        '/docs/architecture',
        '/docs/binary-evolution',
        '/docs/cli',
        '/docs/comparison',
        '/docs/dependency-management',
        '/docs/ecosystem',
        '/docs/features',
        '/docs/menus',
        '/docs/security',
        '/docs/vap',
        '/examples',
        '/bite',
        '/requests-studio',
        '/agentic',
        '/pydash',
        '/terminate-code',
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${route === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
