## audio 属性

[预览](http://book.jirengu.com/jirengu-inc/jrg-renwu7/members/%E9%82%B9%E7%AB%8B%E6%9D%B0/music-player/index.html)
双击页面切歌

1. 创建audio对象

```JavaScript
var audioObject = new Audio('http://cloud.hunger-valley.com/music/玫瑰.mp3');

```

2. audio.play()
开始播放
3. audio.pause()
暂停播放
4. audio.autoPlay
设置或是获取自动播放状态
```JavaScript
audioObject.autoPlay = true  //设置为自动播放，下次更换 audioObject.src 后会自动播放音乐
audioObject.autoPlay = false //设置不自动播放
```
5. audio.src 
设置或获取音乐地址
6. audio.volume
设置或获取音量（0-1）
7. audio.loop
设置或获取循环状态
8. audio.duration
获取音乐长度
9. audio.currentTime
设置或获取播放时间
10. audio.ended
判断音乐是否播放完毕，只读属性

## 事件
1. playing
2. pause
3. ended
4. timeupdate
5. volumechange
