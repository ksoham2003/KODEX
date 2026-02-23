const audio = new Audio();

const sounds = {
  q: "song/24.mp3",
  w: "song/29.mp3",
  e: "song/36.mp3",
  r: "song/41.mp3",
  t: "song/48.mp3",
  y: "song/53.mp3",
  u: "song/60.mp3",
  i: "song/64.mp3",
  o: "song/65.mp3",
  p: "song/69.mp3",
  z: "song/72.mp3",
  x: "song/77.mp3",
  c: "song/79.mp3",
  v: "song/84.mp3",
  b: "song/96.mp3",
  n: "song/metro-hi-final.mp3",
  m: "song/metro-low-final.mp3",
};

document.addEventListener("keydown", function (event) {
  if (sounds[event.key]) {
    audio.src = sounds[event.key];
    audio.play();
  }
});
