// document.addEventListener('DOMContentLoaded', function() {
//     var video = document.getElementById('autoplay-video');

//     // Check if the video element is available
//     if (video) {
//         video.play(); // Autoplay the video
//     }
// });

const vid = document.querySelectorAll('.vid');
for (let i = 0; i < vid.length; i++){
    vid[i].addEventListener('mouseenter',
    function(e){
        vid[i].play()
    })
    vid[i].addEventListener('mouseout',
    function(e){
        vid[i].pause()
    })
}

const vid2 = document.querySelectorAll('.vid2');
for (let i = 0; i < vid2.length; i++){
    vid2[i].addEventListener('mouseenter',
    function(e){
        vid2[i].play()
    })
    vid2[i].addEventListener('mouseout',
    function(e){
        vid2[i].pause()
    })
}

const vid3 = document.querySelectorAll('.vid3');
for (let i = 0; i < vid3.length; i++){
    vid3[i].addEventListener('mouseenter',
    function(e){
        vid3[i].play()
    })
    vid3[i].addEventListener('mouseout',
    function(e){
        vid3[i].pause()
    })
}

const vid4 = document.querySelectorAll('.vid4');
for (let i = 0; i < vid4.length; i++){
    vid4[i].addEventListener('mouseenter',
    function(e){
        vid4[i].play()
    })
    vid4[i].addEventListener('mouseout',
    function(e){
        vid4[i].pause()
    })
}