/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    `https://${process.env.VERCEL_URL}` ||
    process.env.SITE_URL ||
    "https://docs.web.start-ui.com",
  generateRobotsTxt: true,
};
