// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bybit API Documentation',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/docs-v2/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  themes: ['docusaurus-theme-openapi-docs'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bybit-exchange', // Usually your GitHub org/user name.
  projectName: 'docs-v2', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: { label: 'English' },
      zh: { label: '繁體中文' },
    },
  },
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          dv_market: {
            specPath: "yml-folder/derivatives/market.yaml",
            outputDir: "docs/api-explorer/derivatives/market",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          dv_unified: {
            specPath: "yml-folder/derivatives/unified.yaml",
            outputDir: "docs/api-explorer/derivatives/trade/unified",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
        }
      }
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/bybit.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Bybit Logo',
          src: 'img/logo_lightmode.png',
          srcDark: 'img/logo_darkmode.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'v5/intro',
            position: 'left',
            label: 'v5 API',
          },
          {
            type: 'doc',
            docId: 'v3/intro',
            position: 'left',
            label: 'v3 API',
          },
          {
            to: '/api-explorer/category',
            position: 'left',
            label: 'API explorer',
          },
          {
            label: 'Previous Version',
            position: 'right',
            items: [
              {
                href: 'https://bybit-exchange.github.io/docs/spot/v1/#t-introduction',
                label: 'Spot v1'
              },
              {
                href: 'https://bybit-exchange.github.io/docs/usdc/perpetual/#t-introduction',
                label: 'USDC Perpetual v1'
              },
              {
                href: 'https://bybit-exchange.github.io/docs/usdc/option/#t-introduction',
                label: 'USDC Option v1'
              },
              {
                href: 'https://bybit-exchange.github.io/docs/account_asset/v1/#t-introduction',
                label: 'Account Asset v1'
              },
              {
                href: 'https://bybit-exchange.github.io/docs/futuresV2/linear/#t-introduction',
                label: 'USDT Perpetual v2'
              },
              {
                href: 'https://bybit-exchange.github.io/docs/futuresV2/inverse/#t-introduction',
                label: 'Inverse Perpetual v2'
              },
              {
                href: 'https://bybit-exchange.github.io/docs/futuresV2/inverse_futures/#t-introduction',
                label: 'Inverse Future v2'
              },
            ]
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsBefore: [],
            dropdownItemsAfter: [],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram – English',
                href: 'https://t.me/BybitAPI',
              },
              {
                label: 'Telegram – Chinese',
                href: 'https://t.me/BybitChineseAPI',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/VBwVwS2HUs',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'API usage examples',
                href: 'https://github.com/bybit-exchange/api-usage-examples',
              },
              {
                label: 'Official python SDK – pybit',
                href: 'https://github.com/bybit-exchange/pybit',
              },
              {
                label: 'Community nodeJS SDK – bybit-api',
                href: 'https://www.npmjs.com/package/bybit-api',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),
};

module.exports = config;
