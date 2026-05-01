var posts=["2026/02/28/微信电脑版视频号视频下载工具/","2026/05/01/夸克网盘下载加速和网盘扩容/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };