// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Search buildspace',
  tagline: 'Quickly and easily search all buildspace guides',
  url: 'https://learnsolidity.lol/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon2.png',
  organizationName: 'almostefficient',
  projectName: 'search-buildspace', 

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AlmostEfficient/search-buildspace',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AlmostEfficient/search-buildspace',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'search',
        logo: {
          alt: 'Buildspace Logo',
          src: 'img/buildspace-light.svg',
          srcDark: 'img/buildspace.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/almostefficient/search-buildspace',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Buildspace links',
            items: [
              {
                label: 'Buildspace projects',
                to: 'https://buildspace.so/p?utm_source=raza&utm_medium=footer&utm_campaign=search-buildspace',
              },
              {
                label: 'Buildspace jobs',
                to: 'https://buildspace.so/jobs?utm_source=raza&utm_medium=footer&utm_campaign=search-buildspace',
              },
              {
                label: 'Buildspace discover',
                to: 'https://buildspace.so/discover?utm_source=raza&utm_medium=footer&utm_campaign=search-buildspace',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/ethereum',
              // },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/buildspace',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/_buildspace',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/buildspace/buildspace-projects',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Search buildspace.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
