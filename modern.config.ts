import path from 'path';
import docTools, { defineConfig, NavItem, Sidebar } from '@modern-js/doc-tools';

const isProd = process.env.NODE_ENV === 'production';

function getI18nHelper(lang: 'zh' | 'en') {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const getLink = (str: string) => `${prefix}${str}`;
  const getText = (zhText: string, enText: string) => (isZh ? zhText : enText);
  return { getText, getLink };
}

function getNavConfig(lang: 'zh' | 'en'): NavItem[] {
  const { getText, getLink } = getI18nHelper(lang);
  return [
    {
      text: getText('指南', 'Guide'),
      link: getLink('/guide/introduction'),
      activeMatch: '/guide/',
    },
    {
      text: getText('配置', 'Config'),
      link: getLink('/config'),
      activeMatch: '/config',
    },
    {
      text: getText('API', 'API'),
      link: getLink('/api'),
      activeMatch: '/api',
    },
    {
      text: getText('博客', 'Blog'),
      link: getLink('/blog/announcement'),
      activeMatch: '/blog',
    },
    {
      text: getText('生态', 'Ecosystem'),
      items: [
        {
          text: 'Rspack Sources',
          link: 'https://github.com/web-infra-dev/rspack-sources',
        },
        {
          text: 'Modern.js',
          link: 'https://modernjs.dev/',
        },
      ],
    },
    {
      text: getText('关于', 'About'),
      items: [
        {
          text: getText('加入我们', 'Join Us'),
          link: getLink('/misc/join-us'),
        },
        {
          text: getText('团队', 'Team'),
          link: getLink('/misc/meet-the-team'),
        },
        {
          text: getText('发布日志', 'Releases'),
          link: 'https://github.com/web-infra-dev/rspack/releases',
        },
        {
          text: getText('功能规划', 'Roadmap'),
          link: getLink('/misc/roadmap'),
        },
        {
          text: getText('基准测试', 'Benchmark'),
          link: getLink('/misc/benchmark'),
        },
        {
          text: getText('贡献指南', 'Contributing Guide'),
          link: 'https://github.com/web-infra-dev/rspack/blob/main/CONTRIBUTING.md',
        },
        {
          text: getText('品牌指南', 'Branding Guideline'),
          link: getLink('/misc/branding'),
        },
      ],
    },
  ];
}

function getSidebarConfig(lang: 'zh' | 'en'): Sidebar {
  const { getText, getLink } = getI18nHelper(lang);

  return {
    [getLink('/guide/')]: [
      {
        collapsible: false,
        text: getText('开始', 'Getting started'),
        items: [
          getLink('/guide/introduction'),
          getLink('/guide/quick-start'),
          getLink('/guide/glossary'),
        ],
      },
      {
        collapsible: false,
        text: getText('特性', 'Features'),
        items: [
          getLink('/guide/language-support'),
          {
            link: getLink('/guide/asset-module'),
            text: getText('资源模块', 'Asset modules'),
          },
          getLink('/guide/loader'),
          {
            link: getLink('/guide/plugin'),
            text: getText('Plugin', 'Plugin'),
          },
          getLink('/guide/module-resolution'),
          getLink('/guide/dev-server'),
        ],
      },
      {
        collapsible: false,
        text: getText('优化', 'Optimization'),
        items: [
          getLink('/guide/production'),
          getLink('/guide/code-splitting'),
          getLink('/guide/tree-shaking'),
          getLink('/guide/analysis'),
        ],
      },
      {
        collapsible: false,
        text: getText('框架支持', 'Framework support'),
        items: [
          getLink('/guide/react'),
          getLink('/guide/solid'),
          getLink('/guide/vue'),
        ],
      },
      {
        collapsible: false,
        text: getText('兼容性', 'Compatibility'),
        items: [
          getLink('/guide/loader-compat'),
          getLink('/guide/plugin-compat'),
        ],
      },
      {
        collapsible: false,
        text: getText('迁移', 'Migration'),
        items: [
          getLink('/guide/migrate-from-webpack'),
          getLink('/guide/config-diff'),
          getLink('/guide/migrate-from-cra'),
        ],
      },
      {
        collapsible: false,
        text: getText('其他', 'Misc'),
        items: [
          getLink('/misc/FAQ'),
          getLink('/misc/roadmap'),
          getLink('/misc/join-us'),
          getLink('/misc/meet-the-team'),
          getLink('/misc/license'),
          getLink('/misc/branding'),
          getLink('/misc/benchmark'),
        ],
      },
    ],
    [getLink('/config/')]: [
      {
        text: getText('配置', 'Config'),
        link: getLink('/config'),
      },
      {
        text: getText('Entry 入口', 'Entry'),
        link: getLink('/config/entry'),
      },
      {
        text: getText('Context 基础目录', 'Context'),
        link: getLink('/config/context'),
      },
      {
        text: getText('Mode 模式', 'Mode'),
        link: getLink('/config/mode'),
      },
      {
        text: getText('Output 输出', 'Output'),
        link: getLink('/config/output'),
      },
      {
        text: getText('Module 模块', 'Module'),
        link: getLink('/config/module'),
      },
      {
        text: getText('Resolve 模块解析', 'Resolve'),
        link: getLink('/config/resolve'),
      },
      {
        text: getText('Node 全局变量', 'Node'),
        link: getLink('/config/node'),
      },
      {
        text: getText('Optimization 优化', 'Optimization'),
        link: getLink('/config/optimization'),
      },
      {
        text: getText('Plugins 插件', 'Plugins'),
        link: getLink('/config/plugins'),
      },
      {
        text: getText('DevServer 开发服务器', 'DevServer'),
        link: getLink('/config/dev-server'),
      },
      {
        text: getText('Cache 缓存', 'Cache'),
        link: getLink('/config/cache'),
      },
      {
        text: getText('Snapshot 缓存快照', 'Snapshot'),
        link: getLink('/config/snapshot'),
      },
      {
        text: getText('Devtool 调试', 'Devtool'),
        link: getLink('/config/devtool'),
      },
      {
        text: getText('Target 目标环境与兼容性', 'Target'),
        link: getLink('/config/target'),
      },
      {
        text: getText('Watch 监听变更', 'Watch'),
        link: getLink('/config/watch'),
      },
      {
        text: getText('Externals 外部依赖', 'Externals'),
        link: getLink('/config/externals'),
      },
      {
        text: getText('Stats 打包信息', 'Stats'),
        link: getLink('/config/stats'),
      },
      {
        text: getText('Experiments 实验功能', 'Experiments'),
        link: getLink('/config/experiments'),
      },
      {
        text: getText('Builtins 内置功能', 'Builtins'),
        link: getLink('/config/builtins'),
      },
    ],
    [getLink('/api/')]: [
      {
        text: getText('API 接口', 'API'),
        link: getLink('/api'),
      },
      {
        text: getText('Command-line 命令行接口', 'Command-line interface'),
        link: getLink('/api/cli'),
      },
      // {
      //   text: getText('Node.js 接口', 'Node.js API'),
      //   link: getLink('/api/node-api'),
      // },
      {
        text: getText('Modules', 'Modules'),
        link: getLink('/api/modules'),
      },
      {
        text: getText('Hot Module Replacement', 'Hot Module Replacement'),
        link: getLink('/api/hmr'),
      },
      {
        text: getText('Loader 接口', 'Loader API'),
        link: getLink('/api/loader-api'),
      },
      {
        text: getText('Plugin 接口', 'Plugin API'),
        link: getLink('/api/plugin-api'),
      },
    ],
    [getLink('/blog/')]: [
      {
        text: getText('发布公告', 'Announcing Rspack'),
        link: getLink('/blog/announcement'),
      },
    ],
  };
}

export default defineConfig({
  doc: {
    root: path.join(__dirname, 'docs'),
    title: 'Rspack',
    description: 'A fast Rust-based web bundler',
    logo: {
      light:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/navbar-logo-2027.png',
      dark: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/navbar-logo-dark-2027.png',
    },
    icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/favicon-1714.png',
    lang: 'en',
    globalStyles: path.join(__dirname, 'theme', 'index.css'),
    markdown: {
      checkDeadLinks: true,
      experimentalMdxRs: true,
    },
    themeConfig: {
      footer: {
        message: '© 2023 ByteDance Inc. All Rights Reserved.',
      },
      socialLinks: [
        {
          icon: 'github',
          mode: 'link',
          content: 'https://github.com/web-infra-dev/rspack',
        },
      ],
      locales: [
        {
          lang: 'en',
          title: 'Rspack',
          description: 'A fast Rust-based web bundler',
          nav: getNavConfig('en'),
          sidebar: getSidebarConfig('en'),
          label: 'English',
        },
        {
          lang: 'zh',
          title: 'Rspack',
          description: '基于 Rust 的高性能 Web 构建工具',
          nav: getNavConfig('zh'),
          sidebar: getSidebarConfig('zh'),
          label: '简体中文',
        },
      ],
    },
    builderConfig: {
      dev: {
        startUrl: false,
      },
      tools: {
        postcss: (config, { addPlugins }) => {
          addPlugins([require('tailwindcss/nesting'), require('tailwindcss')]);
        },
      },
      html: {
        tags: [
          // Configure Google Analytics
          {
            tag: 'script',
            attrs: {
              async: true,
              src: 'https://www.googletagmanager.com/gtag/js?id=G-XKKCNZZNJD',
            },
          },
          {
            tag: 'script',
            children: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XKKCNZZNJD');`,
          },
        ],
      },
    },
  },
  plugins: [docTools()],
});
