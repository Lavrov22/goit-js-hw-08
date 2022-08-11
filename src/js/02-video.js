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
 player.on('timeupdate', throttle(onPlay, 1000));

currentVideoTime = localStorage.getItem(STORAGE_KEY);
let videoSeconds = JSON.parse(currentVideoTime);
if (currentVideoTime) {
    player.setCurrentTime(videoSeconds.seconds);
} else{player.setCurrentTime(0)}


   


