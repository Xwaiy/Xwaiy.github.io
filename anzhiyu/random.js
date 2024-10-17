var posts=["2024/10/17/每日十问前端面试题Vue篇-02/","2024/10/16/每日十问前端面试题Vue篇-01/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };