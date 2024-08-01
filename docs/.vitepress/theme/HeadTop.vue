<template>
  <header :class="{ 'header-bg': scrollYGt100 }">
    <div id="header">
      <a href="https://rustfs.com/" class="logo"><img src="/images/logo2.svg" class="logo" alt="RustFS首页" /></a>
      <div class="container">
        <div class="menu">
          <div class="login-btn">
            <a class="down" href="https://rustfs.com/html/download.html">下载</a>
            <a href="https://rustfs.com/html/price.html">价格</a>
          </div>
          <ul>
            <li>
              <a href="javascript:;" class="list">产品功能</a>
              <div class="silideDown first">
                <div class="list-items">
                  <h3>特征</h3>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-s3.html">S3兼容</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-versions.html">版本控制</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-scalable.html">可扩展</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-logs.html">日志审计</a>
                  </div>
                </div>
                <div class="list-items">
                  <h3>Future</h3>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-encryption.html">加密</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-lifecycle.html">生命周期管理</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-copy.html">桶复制</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-WORM.html">只读</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/domestic.html">信创支持</a>
                  </div>
                </div>
                <div class="list-items">
                  <h3>可视化监控</h3>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-distributed.html">
                      <div>分布式可扩展</div>
                      <div class="desc">RustFS是非常强劲的分布式存储产品，通过pools去管理分布式集群让分布式集群可以无限向上扩展，轻松实现EB级存储</div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/solution-logs.html">
                      <div>监控报警</div>
                      <div class="desc">RustFS可以通过prometheus全面的完成对集群的监控和报警，通过设置alerts规则，实时了解告警状态，保障产生可靠</div>
                    </a>
                  </div>
                </div>
                <div class="list-items">
                  <h3>大数据和AI</h3>
                  <div class="item">
                    <a href="https://rustfs.com/html/product-AI.html">人工智能</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/small-file.html">小文件优化</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/product-dataLake.html">数据湖支持</a>
                  </div>

                  <div class="item">
                    <a href="https://rustfs.com/html/product-HDFS.html">存算分离</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:;" class="list">架构</a>
              <div class="silideDown second">
                <div class="list-items">
                  <h3>虚拟化和国产化支持</h3>
                  <div class="item">
                    <a href="https://rustfs.com/html/tanzu.html">vmware虚拟化</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/baremetal.html">KVM和国产虚拟化</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/domestic.html">信创和商密支持</a>
                  </div>
                </div>
                <div class="list-items">
                  <h3>云支持</h3>
                  <div class="item">
                    <a href="https://rustfs.com/html/aliyun.html">阿里云</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/qcloud.html">腾讯云</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/huaweicloud.html">华为云</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/aws-elastic.html">国际其他云厂商</a>
                  </div>
                </div>
                <div class="list-items">
                  <h3>私有云和混合云</h3>
                  <div class="item">
                    <a href="https://rustfs.com/html/baremetal.html">
                      <div>裸金属</div>
                      <div class="desc">RustFS可以在私有云和裸金属私有云下完成部署，通过虚批化和裸金属均可构建私通过虚批化和裸金属均可构建私</div>
                    </a>
                  </div>
                </div>
                <div class="list-items">
                  <h3>云原生</h3>
                  <div class="item">
                    <a href="https://rustfs.com/html/product-cloud.html">Kubernetes</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/openshift.html">OpenShift</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/tanzu.html">Tanzu</a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/suse-rancher.html">SUSE Rancher</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:;" class="list">解决方案</a>

              <div class="silideDown third">
                <div class="list-items">
                  <div class="item">
                    <a href="https://rustfs.com/html/product-dataLake.html">
                      <div>现代数据湖</div>
                      <div class="desc">现代数据湖和数据湖仓一体建立在现代对象存储之上。这意味着它们建立在 RustFS 之上。</div>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://rustfs.com/html/product-cloud.html">
                      <div>云原生</div>
                      <div class="desc">混合/多云架构可实现一致的性能、安全性 和经济性。任何关于多云的讨论都需要从一个定义开始。 它不仅仅是一个单一的公共云和本地。</div>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://rustfs.com/html/industry.html">
                      <div>制造业降本</div>
                      <div class="desc">制造业通过的AI质检、视频存储、图像存储中需要大量进行高清图片和高清视频的存储，急需降低存储成本。</div>
                    </a>
                  </div>
                </div>
                <div class="list-items">
                  <div class="item">
                    <a href="https://rustfs.com/html/product-AI.html">
                      <div>AI和机器学习</div>
                      <div class="desc">我们是高性能对象存储。</div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/product-HDFS.html">
                      <div>HDFS</div>
                      <div class="desc">未来是分解的，S3兼容和Kubernetes原生 - 换句话说， 除了Hadoop HDFS之外的东西。</div>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://rustfs.com/html/video.html">
                      <div>视频存储降本方案</div>
                      <div class="desc">在某些重要场景，视频需要存储长达数10年，海量的视频存储占用了大量的空间，急需要降低视频存取时的成本和提升吞吐</div>
                    </a>
                  </div>
                </div>
                <div class="list-items">
                  <div class="item">
                    <a href="https://rustfs.com/html/product-veevm.html">
                      <div>Veeam备份</div>
                      <div class="desc">面向 Veeam Backup and Replication 的高性能对象存储</div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/product-commvault.html">
                      <div>康沃备份</div>
                      <div class="desc">用于 Commvault 备份、恢复和复制的高性能对象存储。简单、可伸缩、快、防勒索软件。换句话说，正是你想要的。</div>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://rustfs.com/html/cold-archiving.html">
                      <div>冷归档存储</div>
                      <div class="desc">使用RustFS分布式对象存储与蓝光存储相结合，将数据在脱电状态下保存数百年，极大的降低数据归档的存储成本。</div>
                    </a>
                  </div>
                </div>
                <div class="list-items">
                  <div class="item">
                    <a href="https://rustfs.com/html/product-SQL.html">
                      <div>SQL支持</div>
                      <div class="desc">利用 RustFS 的强大功能，使用外部表函数和 polybase 在任何云（ 公有云、私有云或边缘云）上运行 SQL Server 2022。</div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="https://rustfs.com/html/product-quantify.html">
                      <div>量化交易</div>
                      <div class="desc">量化交易 文件存储解决方案，如果希望进一步了解，我们可以安排 1:1 会议为你介绍和演示</div>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://rustfs.com/html/domestic.html">
                      <div>国产信创和SM方案</div>
                      <div class="desc">全面提供从硬件、操作系统到涉密、加密的全套存储解决方案</div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="link"><a href="https://rustfs.com/html/integration.html">集成</a></li>
            <li class="link">
              <a href="javascript:;">技术文档</a>
            </li>
            <!--
            先注释,等完成后开放
            <li class="link"><a href="javascript:;">博客</a></li>
            <li class="link"><a href="javascript:;">技术文档</a></li>
            -->
            <li class="link"><a href="https://rustfs.com/html/product-AI.html">AI支持</a></li>
            <li class="link"><a href="https://rustfs.com/html/product-dataLake.html">数据湖</a></li>
            <li class="link"><a href="https://rustfs.com/html/price.html">价格</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue';
const scrollYGt100 = ref(false);
const handleScroll = () => {
  const scrollTop = Math.floor(window.scrollY || document.documentElement.scrollTop);
  if (scrollTop > 50) {
    scrollYGt100.value = true;
  } else {
    scrollYGt100.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, true);
});
</script>
<style>
header {
  height: 55px;
  min-width: 1260px;
  box-sizing: border-box;
  padding: 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: transparent;
}
.header-bg {
  background-color: #051845;
}
#header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1220px;
  position: relative;
}
#header > a {
  overflow: hidden;
  display: block;
  width: 82px;
  height: 27px;
  background-color: transparent;
}
#header img {
  border-style: none;
}
header .container {
  margin: 0 auto;
  width: 1100px;
  height: 100%;
  display: flex;
  z-index: 1;
  align-items: center;
  padding-top: 6px;
  padding-left: 0;
  padding-right: 0;
}
header .container .menu {
  width: 1080px;
  height: 100%;
  display: flex;
  align-items: center;
}
header .container .login-btn {
  margin-left: auto;
  order: 2;
  box-sizing: content-box;
}
header .container .login-btn .down {
  border: 1px solid #e8037d;
  background-color: #e8037d;
  margin-right: 27px;
  box-sizing: content-box;
}
#header ul li.link:hover > a {
  color: #d0006f;
  border-bottom: 2px solid #d0006f;
}
/* #header ul li:hover .silideDown {
  display: flex;
} */

#header ul li:hover .silideDown {
  visibility: visible;
  opacity: 1;
}

header .container .login-btn a {
  display: inline-block;
  text-align: center;
  line-height: 42px;
  width: 80px;
  height: 42px;
  background-color: transparent;
  text-decoration: none;
  font-size: 16px;
  border-radius: 6px;
  color: #fff;
  align-self: center;
  border: 1px solid #ffffff;
  cursor: pointer;
  box-sizing: content-box;
}
header .container ul {
  order: 1;
  list-style: none;
  display: flex;
  margin-left: 88px;
  margin: 0;
}
header .container ul li {
  padding: 0 25px;
}
header .container ul li:hover a.list::after {
  transform: rotate(180deg);
}

header .container ul li > a {
  text-decoration: none;
  font-size: 15px;
  /* font-weight: 600; */
  line-height: 33px;
  color: #fff;
  position: relative;
  background-color: transparent;
}
header .container ul li a.list::after {
  display: block;
  content: ' ';
  background-image: url(/images/arrow.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 8px;
  height: 4px;
  right: -12px;
  top: 8px;
  transition: all 0.5s;
}
#header ul li .silideDown {
  transition: all 0.3s;
  transition-delay: 0.5s;
  position: absolute;
  padding: 20px 30px;
  box-sizing: border-box;
  width: 1220px;
  background-color: #fff;
  /* display: none; */
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;
  left: 0;
  top: 55px;
  border-radius: 4px;
  color: #060b17;
}
#header ul li .silideDown::before {
  display: block;
  content: ' ';
  width: 14px;
  height: 14px;
  background: #ffffff;
  position: absolute;
  top: -7px;
  left: 150px;
  box-sizing: border-box;
  transform: rotate(45deg);
}
#header ul li .silideDown.second::before {
  left: 245px;
}
#header ul li .silideDown.third::before {
  left: 340px;
}
#header ul li .silideDown .list-items:first-of-type {
  margin-left: 0;
}
#header ul li .silideDown .list-items {
  flex: 1;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
}
#header ul li .silideDown .list-items h3 {
  font-weight: 600;
  margin: 0;
  margin-left: 5px;
  color: #060b17;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  /* border-bottom: 1px solid #b9b9b9; */
  position: relative;
}
#header ul li .silideDown .list-items h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  background: #b9b9b9;
  width: 100%;
  height: 1px;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
#header ul li .silideDown .list-items .item {
  flex: 1;
}
#header ul li .silideDown .list-items .item a {
  display: block;
  /* height: 40px; */
  line-height: 40px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  padding: 0 5px;
}
#header ul li .silideDown .list-items .item .desc {
  color: #717273;
  font-size: 11px;
  line-height: 19px;
  padding: 0px 0px 10px;
}
</style>
