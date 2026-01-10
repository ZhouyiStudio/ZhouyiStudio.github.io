var posts=["如何快速的、大量的清理Linux系统废物文件/","hello-world/","Git-Push失败？教你用SSH链接轻松解决/","2b2tCN-Minecraft服务器管理地址/","新手零门槛！雨云MC服务器开服全攻略，10分钟搞定专属服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };