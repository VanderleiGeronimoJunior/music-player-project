// let progress = document.getElementById("progress");
// let song = document.getElementById("song");
// let ctrl_play = document.getElementById("ctrl_play");

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }

// function playPause(){
//     if(ctrl_play.classList.contains("bx-pause")){
//         song.pause();
//         ctrl_play.classList.remove("bx-pause");
//         ctrl_play.classList.add("bx-play");
//     }
//     else{
//         song.play();
//         ctrl_play.classList.add("bx-pause");
//         ctrl_play.classList.remove("bx-play");
//     }
// }

// if(song.play()){
//     setInterval(() => {
//         progress.value = song.currentTime;
//     },500);
// }


let songs = [ 
    {title:'You Know Im No Good', artist:'Amy Winehouse', src:'./audio/You Know Im No Good.mp3', img: './img/Amy Winehouse.jpg'},
    {title:'Loner', artist:'Black Sabbath', src:'./audio/Loner.mp3', img: './img/Black Sabbath.jpg'},
    {title:'Mr Crawley', artist:'Ozzy Osboune', src:'./audio/Mr._Crawley.mp3', img: './img/Ozzy Osboune.jpg'},
    {title:'Territory', artist:'Sepultura', src:'./audio/Territory.mp3', img: './img/Sepultura.jpg'},
    {title:'Angel of Death', artist:'Slayer', src:'./audio/Angel of Death.mp3', img: './img/Slayer.jpg'}
];

let music = document.querySelector('audio');
let indexMusic = 0;
let musicDuration = document.querySelector('.timeCounterEnd');
let image = document.querySelector('img');
let songName = document.querySelector('.player_img h5');
let artisName = document.querySelector('.player_img .subtitle');

renderMusic(indexMusic);

function renderMusic(index){
    music.setAttribute('src', songs[index].src);
    music.addEventListener('loadeddata', () => {
        songName.textContent = songs[index].title;
        artisName.textContent = songs[index].artist;
        image.src = songs[index].img;
        musicDuration.textContent = secondsoMunites(Math.floor(music.duration));
        pauseMusic();
    });    
}

function playMusic() {
    music.play()
    document.querySelector('.btn-pause').style.display = 'block'
    document.querySelector('.btn-play').style.display = 'none'
};

function pauseMusic() {
    music.pause();
    document.querySelector('.btn-pause').style.display = 'none'
    document.querySelector('.btn-play').style.display = 'block'
};


   
function atualizarBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.timeCounterStart')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
  }
  
  function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }
  
    return campoMinutos+':'+campoSegundos
  }
  
  document.querySelector('.btn-play').addEventListener('click', tocarMusica())
  document.querySelector('.btn-pause').addEventListener('click', pausarMusica())
  musica.addEventListener('timeupdate', atualizarBarra())
  
  document.querySelector('.btn-previous').addEventListener('click', () => {
    indexMusica--
    if (indexMusica < 0) {
        indexMusica = 4
    }
    renderizarMusica(indexMusica)
  })
  
  document.querySelector('.btn-next').addEventListener('click', () => {
    indexMusica++
    if (indexMusica > 4){
        indexMusica = 0
    }
    renderMusic(indexMusic);

  })
