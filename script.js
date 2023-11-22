

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Bảng màu',
        'name': 'l1.mp4',
        'duration': '4 giây',
    },
    {
        'id': 'a2',
        'title': 'Màu cam',
        'name': 'l2.mp4',
        'duration': '5 giây ',
    },

    

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                   
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');


videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            
        }

        selected_video.classList.add('active');
        

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
