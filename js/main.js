let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrl_play = document.getElementById("ctrl_play");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrl_play.classList.contains("bx-pause")){
        song.pause();
        ctrl_play.classList.remove("bx-pause");
        ctrl_play.classList.add("bx-play");
    }
    else{
        song.play();
        ctrl_play.classList.add("bx-pause");
        ctrl_play.classList.remove("bx-play");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}
