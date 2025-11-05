/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.asanteartsy.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [
    '/admin/*',
    '/api/*',
    '/private/*',
    '/_next/*'
  ],
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      '/': {
        priority: 1.0,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      '/about': {
        priority: 0.9,
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
      },
      '/services': {
        priority: 0.9,
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
      },
      '/projects': {
        priority: 0.8,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      '/contact': {
        priority: 0.8,
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
      }
    }

    const customPath = customConfig[path]
    
    if (customPath) {
      return {
        loc: path,
        priority: customPath.priority,
        changefreq: customPath.changefreq,
        lastmod: customPath.lastmod,
        alternateRefs: [
          {
            href: `https://www.asanteartsy.com${path}`,
            hreflang: 'en',
          },
          {
            href: `https://www.asanteartsy.com${path}`,
            hreflang: 'fr',
          },
        ],
      }
    }

    return {
      loc: path,
      priority: config.priority,
      changefreq: config.changefreq,
      lastmod: new Date().toISOString(),
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/admin/', '/api/', '/_next/', '/private/'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.asanteartsy.com/sitemap.xml',
    ],
  },
}
