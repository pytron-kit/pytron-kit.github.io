"use client";
import { usePathname } from 'next/navigation';
import React from 'react';

const SEO = ({ title, description, keywords, image }) => {
    const { pathname } = { pathname: usePathname() };
    const domain = 'https://pytron-kit.github.io';
    // Ensure trailing slash for directory-like structure consistency
    const cleanPath = pathname === '/' ? '' : pathname?.endsWith('/') ? pathname : `${pathname}/`;
    const canonical = `${domain}${cleanPath}`;
    const defaultTitle = 'Pytron-kit : Modern Python Desktop Apps';
    const defaultDescription = 'Build cross-platform desktop applications with Python and web technologies. Pytron-kit is lightweight, fast, and frontend framework agnostic.';
    const defaultKeywords = 'python, desktop app, electron alternative, gui, webview, react, pytron-kit';
    const defaultImage = `${domain}/pytron-banner.png`;

    return (
        <>
            <title>{title ? `${title} | Pytron-kit` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={canonical} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={title || defaultTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </>
    );
};

export default SEO;
