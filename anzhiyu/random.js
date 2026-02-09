var posts=["2b2tCN生存服1-21-11版本大更新公告/","2b2tCN-Minecraft服务器管理地址/","Git生成SSHKey教程（Windows版）/","Git-Push失败？教你用SSH链接轻松解决/","Git（Windows版）快速安装教程/","hello-world/","新手零门槛！雨云MC服务器开服全攻略，10分钟搞定专属服务器/","如何快速的、大量的清理Linux系统废物文件/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };