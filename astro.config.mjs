// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // sitemap generation
  site: "https://docs.accept-school.ru",

  integrations: [
    starlight({
      title: "Accept",
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 3,
      },
      logo: {
        src: "./src/assets/logo.svg",
        // replacesTitle: true,
      },
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
          label: "Задачи",
          items: [
            {
              label: "Обзор задач",
              link: "/tasks/overview",
            },
            {
              label: "Добавление и редактирование задачи",
              link: "/tasks/add-edit",
            },
            { label: "Попытки", autogenerate: { directory: "tasks/attempts" } },
          ],
        },
        // {
        //   label: "Уроки",
        //   autogenerate: { directory: "assignments" },
        // },
        // {
        //   label: "Турниры",
        //   autogenerate: { directory: "tournaments" },
        // },
        // {
        //   label: "Курсы",
        //   items: [
        //     {
        //       label: "Обзор курсов",
        //       link: "/courses/overview",
        //     },
        //     { label: "Курсы", autogenerate: { directory: "courses/course" } },
        //     { label: "Модули", autogenerate: { directory: "courses/unit" } },
        //     { label: "Уроки", autogenerate: { directory: "courses/lesson" } },
        //   ],
        // },
      ],
      customCss: ["./src/styles/global.css"], // For tailwind
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});