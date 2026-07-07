var posts=["2026/02/28/微信电脑版视频号视频下载工具/","2026/05/01/最好用的免费手机录屏工具，手机录音工具，电脑录音工具，超好用的录制软件推荐，主播UP主都在用/","2026/05/01/夸克网盘下载加速和网盘扩容/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };