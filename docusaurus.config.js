/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Economy Tool',
  tagline: 'Control your money like a professional player',
  url: 'https://economy-tool.github.io',
  baseUrl: '/site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Economy-Tool', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Economy Tool',
      logo: {
        alt: 'Economy Tool Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/dashboard/economy-overview/',
          activeBasePath: 'docs',
          label: 'Features',
          position: 'left',
        },
        {to: 'blog', label: 'Changelog', position: 'left'},
        // Please keep Appstore link to the right for consistency.
        {
          href:
            'https://www.overwolf.com/app/Alberico_Dias_Barreto_Filho-Economy_Tool',
          label: 'Appstore',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Game Economy Impact',
              to: 'docs/game-economy-impact',
            },
            {
              label: 'In Game Overlay',
              to: 'docs/in-game-overlay',
            },
            {
              label: 'Dashboard',
              to: 'docs/dashboard',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Overwolf Appstore',
              href:
                'https://www.overwolf.com/app/Alberico_Dias_Barreto_Filho-Economy_Tool',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/economy-tool',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/VEY8mwM',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Roadmap',
              to: 'docs/roadmap/new-version',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/albericod',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              to: 'docs/legal/privacy',
            },
            {
              label: 'Terms',
              to: 'docs/legal/terms',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Economy Tool. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Changelog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
