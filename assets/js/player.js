(function(audio, controls) {
  'use strict';
   var trackTitle = controls.querySelector('.track-title'),
     albumTitle = controls.querySelector('.album-title'),
     progress = controls.querySelector('.progress');
  
  function showProgress() {
    var duration = moment.utc(audio.duration * 1000).format("mm:ss");
    var currentTime = moment.utc(audio.currentTime * 1000).format("mm:ss");
    progress.innerHTML = `${currentTime}/${duration}`
  };

  audio.addEventListener('loadstart', function() { progress.innerHTML = 'Loading...'; });
  audio.addEventListener('canplay', showProgress);
  audio.addEventListener('timeupdate', showProgress);
  audio.addEventListener('durationchange ', showProgress);

  document.addEventListener('trackselected', function(e) {
    var track = e.detail;
    track.streamUrl && (audio.src = track.streamUrl);
    track.title && (trackTitle.innerHTML = track.title);
    track.album && (albumTitle.innerHTML = `(${track.album})`);
    track.start && audio.src && audio.play();
  });

  Array.prototype.forEach.call(document.getElementsByClassName('play'), function (element) {
    element.addEventListener('click', function(e) {
      e.stopPropagation();
      var track = element.dataset;
      document.dispatchEvent(new CustomEvent('trackselected', { detail: {
        title: track.title,
        album: track.album,
        streamUrl: track.streamUrl,
        start: true
      }}));
    });
  });
  
  Array.prototype.forEach.call(document.getElementsByClassName('pause'), function (element) {
    element.addEventListener('click', function(e) {
      e.stopPropagation();
      audio.pause();
    });
  }); 
})(document.querySelector('audio'), document.querySelector("footer .controls"));