function openVideo() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('videoPlayer');
  modal.classList.add('active');
  video.play();
}

function closeVideo(event) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('videoPlayer');
  
  // Only close if clicking the modal background or close button
  if (event.target === modal || event.target.classList.contains('close-video')) {
    modal.classList.remove('active');
    video.pause();
    video.currentTime = 0;
  }
}

// Optional: close video with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');
    if (modal.classList.contains('active')) {
      modal.classList.remove('active');
      video.pause();
      video.currentTime = 0;
    }
  }
});
