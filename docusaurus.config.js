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
    image: 'img/meta-img.jpg',
    navbar: {
      title: 'Economy Tool',
      hideOnScroll: true,
      logo: {
        alt: 'Economy Tool Logo',
        src: 'img/Economy-Logo.png',
      },
      items: [
        {
          to: 'docs/in-game-overlay/economy-tab',
          activeBasePath: 'docs',
          label: 'Features',
          position: 'left',
        },
        {to: 'blog', label: 'Changelog', position: 'left'},
        // Please keep Appstore link to the right for consistency.
        {
          href: 'https://discord.com/invite/VEY8mwM',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Economy Logo',
        src: 'img/economy-logo-footer.png',
        href:
          'https://www.overwolf.com/app/Alberico_Dias_Barreto_Filho-Economy_Tool',
      },
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
              to: 'docs/in-game-overlay/economy-tab',
            },
            {
              label: 'Dashboard',
              to: 'docs/dashboard/economy-overview/',
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
              to: 'docs/roadmap',
            },
            {
              label: 'Twitch Extension',
              href: 'https://www.twitch.tv/ext/hecb122wgtrzumrv9ywwjn7wg6nglq',
            },
            {
              label: 'Product Owner',
              href: 'https://www.linkedin.com/in/albericod/',
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
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'CS:GO - Trusted Mode <a target="_blank" rel="noopener noreferrer" href="https://blog.counter-strike.net/index.php/2020/07/30736/">Learn more.</a>',
      backgroundColor: '#f3f3f3', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
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
          blogTitle: 'Changelog!',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
