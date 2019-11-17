const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: true,
  loop: 'all',
  volume: 0.7,
  theme: '#FADFA3', //主题色
  listFolded: false,
  listMaxHeight: 60,
  audio: [
      {
          name: '沙滩恋曲',
          artist: '头文字D 电影原声',
          url: 'https://win-web-ra01-sycdn.kuwo.cn/c7822a134b1d2d6b338c92c01907e832/5dd17566/resource/n1/128/57/69/3172436728.mp3',
          cover: 'https://p2.music.126.net/9KeyafHLjadqSQTRS_tN5Q==/5741649720318487.jpg?param=90y90',
      }
  ]
});
