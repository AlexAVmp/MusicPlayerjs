let songsData = [
    {
        title: '',
        artist: '',
        song_path: '',
        img_path: '',
    },
    {
        title: '',
        artist: '',
        song_path: '',
        img_path: '',
    },
    {
        title: '',
        artist: '',
        song_path: '',
        img_path: '',
    },
    {
        title: '',
        artist: '',
        song_path: '',
        img_path: '',
    }
];

const song_img = document.querySelector('.song-img');
const song_title = document.querySelector('.song-name');
const song_artist = document.querySelector('.song-artist');
const song_next = document.querySelector('.song-next');
const btn_play = document.querySelector('.btn-play');
const btn_play_img = document.querySelector('.btn-play');
const btn_prev = document.querySelector('.btn-prev');
const btn_next = document.querySelector('.btn-next');
const audio_player = document.querySelector('.music-player');

let current_song_index = null;
let next_song_index = null;

btn_play.addEventListener('click', () => playMusic());
btn_play.addEventListener('click', () => changeMusic());
btn_play.addEventListener('click', () => changeMusic(false));

loadPlayer();

function loadPlayer(){
    current_song_index = 0;
    next_song_index = current_song_index + 1;
    updatePlayer();
}

function changeMusic(next = true){
    if (next){
        current_song_index++;
        next_song_index = current_song_index + 1;
        if (current_song_index > songsData.length - 1){
            current_song_index = 0;
            next_song_index = current_song_index + 1;
        }
        if (next_song_index > songsData.length - 1){
            next_song_index = 0;
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;
            if (current_song_index < 0){
                current_song_index = songsData.length - 1;
                next_song_index = 0;
            }
        }
        updatePlayer()
    }

    function updatePlayer() {
        let song = songs[current_song_index];

        song_img.style = "background-image: url('" + song.img_path + "');";
        song_title.innerText = song.title;
        song_artist.innerText = song.artist;
        song_next.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;
        audio_player.src = song.song_path;
    }
}
