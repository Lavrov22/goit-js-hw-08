import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

let currentVideoTime;
const STORAGE_KEY = "videoplayer-current-time";

const onPlay = function (data) {
    console.log(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    };
currentVideoTime = localStorage.getItem(STORAGE_KEY);
const videoSeconds = JSON.parse(currentVideoTime).seconds;
if (currentVideoTime) {
    player.setCurrentTime(videoSeconds);
}

    player.on('timeupdate', throttle(onPlay, 1000));

   


