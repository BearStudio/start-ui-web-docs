/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    `https://${process.env.VERCEL_URL}` ||
    "https://docs.web.start-ui.com",
  generateRobotsTxt: true,
};
