export const dynamic = 'force-static';

export default function sitemap() {
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

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '/' ? 1.0 : route.startsWith('/docs') ? 0.8 : 0.7,
    }));
}
