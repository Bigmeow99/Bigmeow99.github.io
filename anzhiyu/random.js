var posts=["2025/06/27/微信视频号视频下载/","2025/06/06/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };