var posts=["AI角色扮演游戏框架SillyTavern（酒馆）的本地与云服务器搭建/","2b2tCN-Minecraft服务器管理地址/","Git-Push失败？教你用SSH链接轻松解决/","如何快速的、大量的清理Linux系统废物文件/","Git推送教程/","hello-world/","Git（Windows版）快速安装教程/","如何将hexo个人博客部署到个人云服务器上/","新手零门槛！雨云MC服务器开服全攻略，10分钟搞定专属服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };