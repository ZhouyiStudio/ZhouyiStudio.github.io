var posts=["Git-Push失败？教你用SSH链接轻松解决/","Git（Windows版）快速安装教程/","hello-world/","2b2tCN-Minecraft服务器管理地址/","如何将hexo个人博客部署到个人云服务器上/","如何将将hexo个人博客部署到个人云服务器上/","如何快速的、大量的清理Linux系统废物文件/","新手零门槛！雨云MC服务器开服全攻略，10分钟搞定专属服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };