var posts=["如何快速的、大量的清理Linux系统废物文件/","hello-world/","新手零门槛！雨云MC服务器开服全攻略，10分钟搞定专属服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };