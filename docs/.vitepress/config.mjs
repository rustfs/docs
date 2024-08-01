import { defineConfig } from 'vitepress';
import { pagefindPlugin } from 'vitepress-plugin-pagefind';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'rustfs 中文文档',
  description: 'rustfs 中文文档',
  lang: 'zh-cn',
  base: '/docs/',
  cleanUrls: false,
  appearance: false,
  vite: {
    plugins: [
      pagefindPlugin({
        btnPlaceholder: '搜索',
        placeholder: '搜索文档',
        emptyText: '空空如也',
        heading: '共: {{searchResult}} 条结果',
        forceLanguage: 'zh-cn',
        excludeSelector: ['img', 'a.header-anchor'],
        customSearchQuery(input) {
          // 将搜索的每个中文单字两侧加上空格
          return input
            .replace(/[\u4E00-\u9FA5]/g, ' $& ')
            .replace(/\s+/g, ' ')
            .trim();
        },
        filter(searchItem, idx, originArray) {
          return !searchItem.route.includes('404');
        },
      }),
    ],
  },
  themeConfig: {
    outlineTitle: '页面导航',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: {
      '/k8s/original': [
        {
          text: 'Rustfs Kubernetes中文文档目录1',
          items: [{ text: '首页', link: '/k8s/original/' }],
        },
        {
          text: 'Rustfs Kubernetes中文文档目录2',
          items: [{ text: '测试', link: '/k8s/original/test' }],
        },
      ],
      '/k8s/openshift': [
        {
          text: 'Rustfs OpenShift中文文档',
          items: [{ text: '首页', link: '/k8s/openshift/' }],
        },
      ],
      '/k8s/eks': [
        {
          text: 'Rustfs 亚马逊EKS中文文档',
          items: [{ text: '首页', link: '/k8s/eks/' }],
        },
      ],
      '/k8s/gks': [
        {
          text: 'Rustfs 谷歌GKE中文文档',
          items: [{ text: '首页', link: '/k8s/gks/' }],
        },
      ],
      '/k8s/aks': [
        {
          text: 'Rustfs 微软AKS中文文档',
          items: [{ text: '首页', link: '/k8s/aks/' }],
        },
      ],
      '/docker/': [
        {
          text: 'Rustfs Container中文文档',
          items: [
            { text: '首页', link: '/docker/' },
            { text: '测试', link: '/docker/test' },
          ],
        },
      ],
      '/linux/': [
        {
          text: 'Rustfs Linux中文文档',
          items: [{ text: '首页', link: '/linux/' }],
        },
      ],
      '/macos/': [
        {
          text: 'Rustfs 苹果MacOS中文文档',
          items: [{ text: '首页', link: '/macos/' }],
        },
      ],
      '/windows/': [
        {
          text: 'Rustfs Windows中文文档',
          items: [{ text: '首页', link: '/windows/' }],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
