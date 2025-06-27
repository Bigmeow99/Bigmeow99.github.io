var posts=["2025/06/26/微信视频号视频下载/","2025/06/05/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };