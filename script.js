console.log("Welcome");
let songIndex = 0;

let audioElement = new Audio("song/Aashiqui.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Aashiqui",
    filepath: "song/1.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songName: "Tum Hi Ho",
    filepath: "song/2.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songName: "Aasan",
    filepath: "song/3.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songName: "Bhula Dena",
    filepath: "song/4.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songName: "Chahun",
    filepath: "song/5.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songName: "Hum Mar",
    filepath: "song/6.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songName: "Milne",
    filepath: "song/7.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songName: "Piya Aaye Na",
    filepath: "song/8.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songName: "Sunn Raha",
    filepath: "song/9.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songName: "BR",
    filepath: "song/10.mp3",
    coverPath: "images/cover1.jpg",
  },
];
songItems.forEach((element, i) => {
  //console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressbar.value = progress;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log(e);
      makeAllPlays();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `song/${index}.mp3`;
      masterSongName.innerText = songs[songIndex + 1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 10) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `song/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;

  audioElement.currentTime = 0;
  audioElement.play();

  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `song/${songIndex}.mp3`;

  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
