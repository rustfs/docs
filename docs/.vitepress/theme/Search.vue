<template>
    <div class="search">
            <div class="search__inner">
            <div id="search-box">
                <div class="ais-SearchBox">
                    <form action="" role="search" class="ais-SearchBox-form search__form" novalidate="">
                        <input id="search" v-model="searchQuery"  @input="searchAction" class="ais-SearchBox-input search__input" type="text" placeholder="文档搜索" autofocus="true" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="512" aria-label="Search">
                        <button class="ais-SearchBox-reset search__reset" type="reset" title="Clear the search query" hidden="">
                            <svg class="ais-SearchBox-resetIcon" viewBox="0 0 20 20" width="10" height="10" aria-hidden="true">
                                <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>
                            </svg>
                        </button>
                        <span class="ais-SearchBox-loadingIndicator search__loading" hidden="">
                            <svg aria-label="Results are loading" class="ais-SearchBox-loadingIcon" width="16" height="16" viewBox="0 0 38 38" stroke="#444" aria-hidden="true">
                                <g fill="none" fill-rule="evenodd">
                                    <g transform="translate(1 1)" stroke-width="2">
                                        <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                                        <path d="M36 18c0-9.94-8.06-18-18-18">
                                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </form>
                </div>
            </div>
            <div class="search__dropdown">
                <div class="search-results">
                    <ol class="search-results-ol">
                        <div>
                            <ol class="search-results-list">
                                <li class="search-results-item">
                                    <a href="https://www.minio.org.cn/docs/minio/linux/reference/minio-mc/mc-find.html">
                                        <div class="search__hits__text">
                                            <div class="search__hits__title">mc <mark>f</mark>ind</div>
                                            <div class="search__hits__platform">linux</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="search-results-item">
                                    <a href="https://www.minio.org.cn/docs/minio/linux/reference/minio-mc/mc-find.html">
                                        <div class="search__hits__text">
                                            <div class="search__hits__title">mc <mark>f</mark>ind</div>
                                            <div class="search__hits__platform">linux</div>
                                        </div>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </ol>
                </div>
            </div>
            </div>
        </div>
  </template>
   
  <script setup>
        // 1. Initializing Pagefind
    import { onBeforeMount,ref,reactive } from 'vue'
    const searchQuery = ref('')
const addInlineScript = () => {
  const scriptText = `import('/pagefind/pagefind.js')
        .then((module) => {
          window.__pagefind__ = module
        })
        .catch(() => {
          console.log('not load /pagefind/pagefind.js')
        })`
  const inlineScript = document.createElement('script')
  inlineScript.innerHTML = scriptText
  document.head.appendChild(inlineScript)
}

onBeforeMount(() => {
  addInlineScript()
})
const searchResult = reactive({
    'list' : []
})
const searchAction = async () => {
    console.log(searchQuery.value)
    const search =  await window.__pagefind__.search(searchQuery.value)
    const results = search.results;
    if (results.length > 0) {
        results.forEach(async (ele) => {
            searchResult.list.push(await ele.data())
        })
    } else {
        searchResult.list = []
    }
    console.log(searchResult.list)
}
    
  </script>
   
  <style>
  .search{
        padding: 0 1rem 2.5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        --search-hits-item-padding: 0.5rem;
        isolation: isolate;
        position: relative;
        z-index: 111;
        top:170px;
        .search__inner {
            max-width: 35rem;
            width: 100%;
            margin: 0 auto;
            border-radius: .3125rem;
            position: relative;
            .search__form {
                background-color: #fff;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                border-radius: .1875rem .1875rem 0 0;
                .search__input {
                    background: transparent url(/images/search-light.svg) no-repeat center left 1rem;
                    background-size: .85rem;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    height: 2.75rem;
                    width: 100%;
                    padding: 0 1.5rem .05rem 2.5rem;
                    color: #000;
                    border-radius: .1875rem;
                    border: 0;
                }
                .search__reset {
                    display: grid !important;
                    place-content: center;
                    width: 1.5rem;
                    height: 1.5rem;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    border: 0;
                    background: 0 0;
                    border-radius: .125rem;
                    cursor: pointer;
                    display: none;
                    margin-right: .75rem;
                    svg {
                        width: .5rem;
                        fill: #000;
                        pointer-events: none;
                    }
                }
                .search__loading {
                    position: absolute;
                    top: .75rem;
                    left: 1rem;
                    background-color: #fff;
                    svg {
                        stroke-width: 2px;
                    }
                }
            }
        }
        .search__dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #edf1f3;
            z-index: 10;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: 0 0 .3125rem .3125rem;
            /*display: none;*/
            max-height: 24.5rem;
            .search-results{
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                overflow-y: auto;
                position: relative;
                scrollbar-width: thin;
                height: 360px;
                .search-results-ol{
                    place-content: center;
                    text-align: center;
                    font-size: .8125rem;
                    color: #5c5c5c;
                    .search-results-list{
                        padding: 1rem;
                        list-style: none;
                        margin: 0;
                        text-align: left;
                        .search-results-item {
                            position: relative;
                            a:hover {
                                background-color: rgba(120, 133, 152, 0.125);
                            }
                            a {
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                                padding: 0.5rem;
                                border-radius: .1875rem;
                                min-height: 3rem;
                                margin-bottom: .3rem;
                                .search__hits__title {
                                    font-size: .8125rem;
                                    color: #000;
                                    width: 100%;
                                    line-height: 1.1;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    max-width: 100%;
                                }
                                .search__hits__platform {
                                    font-size: .65rem;
                                    color: #5c5c5c;
                                    line-height: 1;
                                    border: 1px solid #c5cad0;
                                    border-radius: .125rem;
                                    padding: .1rem .2rem;
                                    width: -webkit-fit-content;
                                    width: -moz-fit-content;
                                    width: fit-content;
                                    margin: .4rem .35rem 0 0;
                                    display: inline-block;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  </style>