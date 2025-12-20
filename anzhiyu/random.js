var posts=["新手零门槛！雨云MC服务器开服全攻略，10分钟搞定专属服务器/","hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };