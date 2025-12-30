import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The Humanoid Horizon',
  tagline: 'An exploration into Physical AI and Robotics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
                blog: {
                  showReadingTime: true,
                  feedOptions: {
                    type: ['rss', 'atom'],
                    xslt: true,
                  },
                  // Useful options to enforce blogging best practices
                  onInlineTags: 'warn',
                  onInlineAuthors: 'warn',
                  onUntruncatedBlogPosts: 'warn',
                },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',
      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
    },
    navbar: {
      title: 'The Humanoid Horizon',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {to: '/blog', label: 'Blog', position: 'left'},

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: '/docs/humanoid-robotics-book/01-introduction',
            },
            {
              label: 'All Chapters',
              to: '/docs/humanoid-robotics-book/01-introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: '#',
            },
            {
              label: 'Discord',
              href: '#',
            },
            {
              label: 'X (Twitter)',
              href: '#',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About the Author',
              to: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Humanoid Horizon.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
