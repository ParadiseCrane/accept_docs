// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from "@tailwindcss/vite";
import starlightImageZoomPlugin from "starlight-image-zoom";
import starlightScrollToTop from "starlight-scroll-to-top";
import starlightAutoSidebar from "starlight-auto-sidebar";
import starlightAutoDrafts from "starlight-auto-drafts";

const site = "https://docs.accept-school.ru";
const ogUrl = new URL("ogimage.jpg", site).href;
const ogImageAlt = "Учись программировать";

// https://astro.build/config
export default defineConfig({
  // sitemap generation
  site: site,

  integrations: [
    starlight({
      title: "Accept",
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 3,
      },
      logo: {
        src: "./src/assets/logo.svg",
      },
      head: [
        { tag: "meta", attrs: { name: "og:image", content: ogUrl } },
        { tag: "meta", attrs: { name: "og:image:alt", content: ogImageAlt } },
      ],
      lastUpdated: true,
      defaultLocale: "root",
      locales: {
        root: { label: "Русский", lang: "ru-RU" },
      },
      social: [
        {
          icon: "telegram",
          label: "Telegram",
          href: "https://t.me/dsomni",
        },
        {
          icon: "email",
          label: "Почта",
          href: "mailto:paradise.crane.accept@gmail.com",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ParadiseCrane",
        },
      ],
      sidebar: [
        {
          label: "Начало работы",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Рецепты",
          autogenerate: { directory: "recipes" },
        },
        {
          label: "База знаний",
          autogenerate: { directory: "references" },
          collapsed: true,
        },
      ],
      customCss: ["./src/styles/global.css"], // For tailwind
      plugins: [
        starlightAutoDrafts(),
        starlightAutoSidebar(),
        // starlightLinksValidatorPlugin(),
        starlightImageZoomPlugin(),
        starlightScrollToTop({
          position: "right",
          tooltipText: {
            ru: "Наверх",
          },
          smoothScroll: true,
          showTooltip: true,
          threshold: 20,
          borderRadius: "50",
          showProgressRing: true,
          progressRingColor: "#ff6b6b",
        }),
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});