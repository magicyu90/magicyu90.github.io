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
          url: 'http://m10.music.126.net/20191117234723/72d070f25fb5720679088f37266555fa/ymusic/e303/dfbe/913c/f3628c355995d4a76158060fdd8280ac.mp3',
          cover: 'https://p2.music.126.net/9KeyafHLjadqSQTRS_tN5Q==/5741649720318487.jpg?param=90y90',
      }
  ]
});
