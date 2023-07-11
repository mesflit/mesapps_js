const videoList = [
  {
    title: "Mummies - Mumyalar ~DUBLAJ~",
    videoUrl: "https://s230.rapidrame.com/hls2/01/00017/qyhd3mj61nlx_,l,n,.urlset/index-f1-v1-a1.m3u8?t=cuNdluNIG3RKJFdHr0rHhfl4rlRdBlm0tgSyK09A0aU&s=1689063937&e=1199998800&f=86579&srv=s179&i=0.0&sp=0&p1=s230&p2=s230",
    thumbnailUrl: "https://www.hdfilmcehennemi.life/uploads/poster/mummies.jpg"
  },
    {
    title: " The Flash ~AltYazı~",
    videoUrl: "https://s230.rapidrame.com/hls2/01/00017/gd1x16gl631t_,l,n,.urlset/index-f2-v1-a1.m3u8?t=TdT3ia9uemyXk39U_ymUwKCm7HZYbD8we3FPu8Gispw&s=1689064682&e=1199998800&f=86039&srv=s137&i=0.0&sp=0&p1=s230&p2=s230",
    thumbnailUrl: "https://www.hdfilmcehennemi.life/uploads/poster/the-flash.jpg"
  },
  {
    title: " The Flash ~DUBLAJ~",
    videoUrl: "https://s230.rapidrame.com/hls2/01/00017/7jhbbkhptqfh_,l,n,.urlset/index-f2-v1-a1.m3u8?t=ihU7EuC-7P2PpL8vyC1zOLyrLIKhFsRPsIgKyS7IK0c&s=1689064433&e=1199998800&f=85986&srv=s233&i=0.0&sp=0&p1=s230&p2=s230",
    thumbnailUrl: "https://www.hdfilmcehennemi.life/uploads/poster/the-flash.jpg"
  }
];

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const videoListDiv = document.getElementById('video-list');

function displayVideos(videos) {
  videoListDiv.innerHTML = '';

  videos.forEach(video => {
    const videoDiv = document.createElement('div');
    videoDiv.classList.add('video');

    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = video.thumbnailUrl;
    thumbnailImg.alt = video.title + ' Thumbnail';
    thumbnailImg.addEventListener('click', () => {
      const videoPlayer = videoDiv.querySelector('.video-js');
      thumbnailImg.style.display = 'none';
      videoPlayer.style.display = 'block';
      const player = videojs(videoPlayer);
      player.play();
    });

    const title = document.createElement('h3');
    title.textContent = video.title;

    const videoPlayer = document.createElement('video');
    videoPlayer.classList.add('video-js');
    videoPlayer.style.display = 'none';
    videoPlayer.controls = true;

    const videoSource = document.createElement('source');
    videoSource.src = video.videoUrl;
    videoSource.type = 'video/mp4';

    videoPlayer.appendChild(videoSource);
    videoDiv.appendChild(thumbnailImg);
    videoDiv.appendChild(title);
    videoDiv.appendChild(videoPlayer);

    videoListDiv.appendChild(videoDiv);
  });
}

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();

  const filteredVideos = videoList.filter(video =>
    video.title.toLowerCase().includes(searchTerm)
  );

  displayVideos(filteredVideos);
});

displayVideos(videoList);
