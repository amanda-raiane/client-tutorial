import { themes as prismThemes, themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";
import "dotenv/config";

const config: Config = {
  title: "G Client",
  tagline:
    "Organize, encante e retenha seus clientes contábeis com uma gestão eficiente e inteligente.",
  plugins: [tailwindPlugin],

  url: "https://ajuda.gclient.com.br/",
  baseUrl: "/",

  organizationName: "amanda-raiane",
  projectName: "client-tutorial",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia']

  themeConfig: {
    themes: ["@docusaurus/theme-search-algolia"],
    image: "img/g-client-social-card.jpg",
    navbar: {
      logo: {
        alt: "G Client logo",
        src: "img/logo-azul.png",
        href: "/docs/comece-aqui",
      },
      items: [
        {
          href: "https://app.gclient.com.br/",
          label: "Entrar",
          position: "right",
          className: "navbar-login-button",
        },
      ],
    },
    /*  footer: {
      style: "light",
      links: [
        {
          title: "Sobre",
          items: [
            {
              label: "Central de ajuda",
              to: "/docs/intro",
            },
            {
              label: "Solicitação de recursos",
              href: "https://g-client.canny.io/",
            },
            {
              label: "Tutorial em vídeo",
              to: "/docs/category/tutoriais-em-vídeo",
            },
            {
              label: "Novidades",
              href: "https://versions.gclient.com.br/",
            },
          ],
        },
        {
          title: "Contato",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/gclient_",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/@sistemagclient",
            },
            {
              label: "Whatsapp",
              href: "https://api.whatsapp.com/send?phone=5544997046559&text=Ol%C3%A1%20estava%20no%20site%20do%20G%20Client%20e%20quero%20agendar%20uma%20apresenta%C3%A7%C3%A3o%20gratuita",
            },
          ],
        },
        {
          title: "G Client",
          items: [
            {
              label: "Recursos",
              href: "https://gclient.com.br/#recursos",
            },
            {
              label: "Benefícios",
              href: "https://gclient.com.br/#beneficios",
            },
            {
              label: "Planos",
              href: "https://gclient.com.br/#planos",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Documentação G Client`,
    }, */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: process.env.APP_ID,
      apiKey: process.env.API_KEY,
      indexName: process.env.INDEX_NAME,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
