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
          url: 'http://39.106.214.208:82/files/music/Tanninginyoursunray.mp3',
          cover: 'https://p2.music.126.net/9KeyafHLjadqSQTRS_tN5Q==/5741649720318487.jpg?param=90y90',
      }
  ]
});
