<template>
    <footer class="pc-footer">
      <div>
        <h3>架构支持</h3>
        <ul>
          <li><a href="https://rustfs.com/html/baremetal.html">裸金属和虚拟化</a></li>
          <li><a href="https://rustfs.com/html/aliyun.html">阿里云</a></li>
          <li><a href="https://rustfs.com/html/qcloud.html">腾讯云</a></li>
          <li><a href="https://rustfs.com/html/huaweicloud.html">华为云</a></li>
          <li><a href="https://rustfs.com/html/tanzu.html">VMWare Tanzu</a></li>
          <li><a href="https://rustfs.com/html/aws-elastic.html">国际云厂商</a></li>
        </ul>
      </div>
      <div>
        <h3>产品功能</h3>
        <ul>
          <li><a href="https://rustfs.com/html/solution-distributed.html">分布式</a></li>
          <li><a href="https://rustfs.com/html/solution-logs.html">日志管理</a></li>
          <li><a href="https://rustfs.com/html/solution-versions.html">版本控制</a></li>
          <li><a href="https://rustfs.com/html/solution-s3.html">S3兼容</a></li>
          <li><a href="https://rustfs.com/html/solution-WORM.html">对象锁与只读</a></li>
          <li><a href="https://rustfs.com/html/solution-copy.html">跨区域复制</a></li>
          <li><a href="https://rustfs.com/html/solution-encryption.html">加密</a></li>
          <li><a href="https://rustfs.com/html/solution-lifecycle.html">生命周期管理</a></li>
        </ul>
      </div>
      <div>
        <h3>解决方案</h3>
        <ul>
          <li><a href="https://rustfs.com/html/product-dataLake.html">现代数据湖</a></li>
          <li><a href="https://rustfs.com/html/product-AI.html">AI和机器学习</a></li>
          <li><a href="https://rustfs.com/html/product-cloud.html">云原生</a></li>
          <li><a href="https://rustfs.com/html/product-HDFS.html">大数据计算存储分离</a></li>
          <li><a href="https://rustfs.com/html/product-SQL.html">SQL支持</a></li>
          <li><a href="https://rustfs.com/html/product-quantify.html">量化交易</a></li>
          <li><a href="https://rustfs.com/html/industry.html">制造业降本</a></li>
          <li><a href="https://rustfs.com/html/cold-archiving.html">冷归档存储</a></li>
          <li><a href="https://rustfs.com/html/video.html">视频存储方案</a></li>
          <li><a href="https://rustfs.com/html/domestic.html">国产信创和SM解决方案</a></li>
        </ul>
      </div>
      <div>
        <h3>关于我们</h3>
        <ul>
          <li><a href="https://rustfs.com/html/about.html">关于我们</a></li>
          <li><a href="https://rustfs.com/html/about.html#money">投资RustFS</a></li>
          <li><a href="https://rustfs.com/html/trademark.html">商标使用</a></li>
          <li><a href="https://github.com/rustfs/rustfs">RustFS GitHub</a></li>
        </ul>
      </div>
      <div class="last">
        <h3>联系我们</h3>
        <ul>
          <li><a href="javascript:;">hello@rusfs.com</a></li>
          <li><a href="javascript:;">4008-333-333</a></li>
          <li><a href="javascript:;">北京市海淀区宝盛北里中关村智诚科创大厦3楼</a></li>
          <li><a href="javascript:;">客服时间：9:00-18:00</a></li>
        </ul>
      </div>
    </footer>
    <div class="footer">
      <div class="footer-line">
        京ICP备2024061305号-1
        <a class="git-icon" href="https://github.com/rustfs/rustfs">
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </a>
      </div>
    </div>
</template>
<style>
.pc-footer {
    margin-top: 50px;
}
footer {
    display: flex;
    width: 1220px;
    margin: 0 auto;
    margin-top: 24px;
}
footer > div {
    width: 300px;
}
footer > div h3 {
    font-size: 18px;
    color: #01081a;
    line-height: 28px;
    font-weight:bold;
    margin:18px 0;
}
footer > div ul {
    list-style: none;
    margin:18px 0;
    padding: 0;
}
footer > div ul li {
    height: 32px;
    line-height: 32px;
}
footer > div ul li a {
    font-size: 14px;
    color: #333333;
    line-height: 28px;
    text-decoration: none;
}
footer > div ul li a:hover{
    text-decoration: underline;
}
footer > div.last {
    width: 450px;
}
footer .last li:nth-of-type(1) {
    background: url(/images/email.svg) no-repeat left center;
}
footer .last li:nth-of-type(2) {
    background: url(/images/tel.svg) no-repeat left center;
}
footer .last li:nth-of-type(3) {
    background: url(/images/location.svg) no-repeat left center;
}
footer .last li:nth-of-type(4) {
    background: url(/images/kf.svg) no-repeat left center;
}
footer .last li {
    text-indent: 30px;
}
.footer {
    border-top: 1px solid #ebebeb;
    height: 66px;
}
.footer-line {
    height: 66px;
    width: 1220px;
    margin: 0 auto;
    font-size: 14px;
    color: #333333;
    line-height: 66px;
}
.git-icon {
    float: right;
    margin-right: 10px;
}
.git-icon svg {
    vertical-align: middle;
    display: inline;
}
</style>