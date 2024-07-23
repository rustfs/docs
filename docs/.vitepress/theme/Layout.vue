<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

import HeadTop from './HeadTop.vue'
import Banner from './Banner.vue'
import PlatformNav from './PlatformNav.vue'
import Download from './Download.vue'
import Footer from './Footer.vue'
</script>


<template>
    <HeadTop/>
    <Banner/>
    <PlatformNav />
    <Layout>
        <Content />
    </Layout>
    <Download />
    <Footer />
    <!-- 此处将渲染 markdown 内容 -->
</template>
