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
          url: 'music.163.com/outchain/player?type=2&id=27591663&auto=1&height=66',
          cover: 'https://p2.music.126.net/9KeyafHLjadqSQTRS_tN5Q==/5741649720318487.jpg?param=90y90',
      }
  ]
});
