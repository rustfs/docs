<template>
    <div class="platform-nav">
        <div class="platform-nav__main">
            <div class="container">
                <nav>
                    <a  v-for="(item, index) in platformNav" rel="noreferrer" :href=item.link  @click="navClick(index)" :class="navIndex == index ? 'active' : ''">
                        <img class="hidden-rm" :src=item.img :alt=item.title>
                        {{ item.title }}
                    </a>
                </nav>
            </div>
        </div>
        <div class="platform-nav__sub" v-show="navIndex == 0">
            <div class="container">
                <nav>
                    <a  v-for="(item, index) in subNav" rel="noreferrer" :href=item.link  @click="subNavClick(index)" :class="subNavIndex == index ? 'active' : ''">{{ item.title }}</a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {reactive,ref} from 'vue';
    import { useRoute } from 'vitepress'

    const { path } = useRoute()

    let navIndex = ref();
    let subNavIndex = ref();
    const platformNav = reactive([
        /*
        {
            'title' :'Kubernetes',
            'img' : '/docs/images/kubernetes-inactive.svg',
            'link' : '/docs/k8s/original/'
        },
        */
        {
            'title' :'Docker',
            'img' : '/docs/images/docker-inactive.svg',
            'link' : '/docs/docker/'
        },
        {
            'title' :'Linux',
            'img' : '/docs/images/linux-inactive.svg',
            'link' : '/docs/linux/'
        },
        {
            'title' :'macOS',
            'img' : '/docs/images/macos-inactive.svg',
            'link' : '/docs/macos/'
        },
        {
            'title' :'Windows',
            'img' : '/docs/images/windows-inactive.svg',
            'link' : '/docs/windows/'
        },
    ])
    const navClick = (index) => {
        navIndex.value = index;
        subNavIndex.value = 0;
    }
    const subNavClick = (index) => {
        subNavIndex.value = index;
    }
    const initNavIndex = () => {
        if (path.match(/k8s/)) {
            navIndex.value = 0;
        } else if (path.match(/docker/)) {
            navIndex.value = 1;
        }else if (path.match(/linux/)) {
            navIndex.value = 2;
        }else if (path.match(/macos/)) {
            navIndex.value = 3;
        }else if (path.match(/windows/)) {
            navIndex.value = 4;
        }
    }

    const initSubNavIndex = () => {
        if (path.match(/k8s\/original/)) {
            subNavIndex.value = 0;
        } else if (path.match(/k8s\/openshift/)) {
            subNavIndex.value = 1;
        }else if (path.match(/k8s\/eks/)) {
            subNavIndex.value = 2;
        }else if (path.match(/k8s\/gks/)) {
            subNavIndex.value = 3;
        }else if (path.match(/k8s\/aks/)) {
            subNavIndex.value = 4;
        }
    }
    const subNav =  reactive([
        
        {
            'title' :'原生Kubernetes',
            'link' : '/docs/k8s/original/'
        },
        
        {
            'title' :'红帽Openshift',
            'link' : '/docs/k8s/openshift/'
        },
        {
            'title' :'亚马逊云EKS',
            'link' : '/docs/k8s/eks/'
        },
        {
            'title' :'谷歌云GKS',
            'link' : '/docs/k8s/gks/'
        },
        {
            'title' :'微软AKS',
            'link' : '/docs/k8s/aks/'
        },
    ])
    initNavIndex()
    initSubNavIndex()
</script>
<style>
.platform-nav {
    background-color: #f5f5f5;
    font-size: .9375rem;
    top:286px;
    position: absolute;
    width: 100%;
    -webkit-box-shadow: 0 0.1875rem 0.375rem rgba(0,0,0,.15);
    box-shadow: 0 0.1875rem 0.375rem rgba(0,0,0,.15);
    z-index:9;
}
.platform-nav__main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.platform-nav__main, .platform-nav__sub {
    position: relative;
    overflow: hidden;
}
.platform-nav .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    padding: 0;
    margin: 0 auto;
    max-width: 1220px;
    height: 2.8rem;
}
.container {
    margin: 0 auto;
    padding: 0 1.75rem;
    width: 100%;
}
.platform-nav nav {
    white-space: nowrap;
    overflow-x: auto;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    scroll-behavior: smooth;
    padding: 0 var(--content-padding);
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
}
.platform-nav__main nav {
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    gap: 1.5rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.platform-nav__main nav>a.active {
    border-bottom-color: #000;
    color: #000;
}
.platform-nav__main nav>a {
    color: #5c5c5c;
    font-weight: 500;
}
.platform-nav__main nav>a, .platform-nav__sub nav>a {
    border-bottom: 2px solid transparent;
    height: 2.8rem;
    -webkit-transition: color .3s;
    transition: color .3s;
    white-space: nowrap;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    scroll-snap-align: center;
}
.platform-nav__main nav>a.active>img, .platform-nav__main nav>a:hover>img {
    opacity: 1;
}
.platform-nav__main nav>a>img {
    margin-right: .5rem;
    opacity: .65;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    -webkit-filter: none;
    filter: none;
    border: 0;
    max-width: 100%;
}
.platform-nav__sub {
    background-color: #fff;
    font-size: .8125rem;
}
.platform-nav__sub nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1.5rem;
}
.platform-nav__sub nav>a {
    font-weight: 500;
    color: #000;
}
.platform-nav__sub nav>a.active{
    border-bottom-color: #c72e49;
    color: #c72e49;
    font-weight: 700;
}
.platform-nav__sub nav>a:hover{
    color: #c72e49;
}
</style>