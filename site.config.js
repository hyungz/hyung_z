const CONFIG = {
  // profile setting (required)
  profile: {
    name: "hyung_z",
    image: "avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "woo!ah!'s #1 simp",
    bio: "I collect K-Pop Music Videos",
    email: "dxsbdxsb@gmail.com",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `Discord: nana_kwon`,
      href: "https://discordapp.com/users/%EA%B6%8C%EB%82%98%EC%97%B0#2449",
      name2: `Instagram: @05_betterlee`,
      href2: "https://www.instagram.com/05_betterlee",
    },
  ],
  // blog setting (required)
  blog: {
    title: "hyung_z",
    description: "Welcome to my collection!",
    theme: "dark", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log-git-main-hyungz.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "hyungz/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
