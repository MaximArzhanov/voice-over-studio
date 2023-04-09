// import file1 from '../audio/audio_1.mp3';
// import file2 from '../audio/audio_2.mp3';
// import file3 from '../audio/audio_3.mp3';
// import file4 from '../audio/audio_4.mp3';
// import file5 from '../audio/audio_5.mp3';
// import file6 from '../audio/audio_6.mp3';
// import WaveSurfer from "wavesurfer.js";

// // Массив объектов с аудио на странице
// let initializedAudios = [];

// const initializeAudio = (audio, file) => {
//     const audioWaveform = audio.querySelector('.audio__waveform');
//     const buttonPlayToggle = audio.querySelector('.audio__button_type_toggle');
//     const buttonDownload = audio.querySelector('.audio__button_type_download');

//     // Для загрузки файла
//     buttonDownload.download = file;
//     buttonDownload.href = file;
    
//     // Инициализация формы проигрывателя
//     const wavesurfer = WaveSurfer.create({
//         container: audioWaveform,
//         responsive: true,
//         height: 80,
//         normalize: true,
//         hideScrollbar: true,
//         progressColor: '#666',
//         waveColor: '#003A97'
//     });

//     // Добавление созданного объекта в массив
//     initializedAudios.push(wavesurfer);
    
//     // Загрзка файла
//     wavesurfer.load(file);
    
//     // Отображает значок "Пауза" на кнопке
//     const setPauseButton = () => {
//         buttonPlayToggle.classList.remove('audio__button_type_play');
//         buttonPlayToggle.classList.add('audio__button_type_pause');
//     }
    
//     // Отображает значок "Плей" на кнопке
//     const setPlayButton = () => {
//         buttonPlayToggle.classList.remove('audio__button_type_pause');
//         buttonPlayToggle.classList.add('audio__button_type_play');
//     }

//     // Останавливает все треки на странице, кроме того который выбран в данный момент
//     const stopAllAudios = () => {
//         initializedAudios.forEach(playingAudio => {
//             if (playingAudio !== wavesurfer) playingAudio.stop()
//         });
//     }
    
//     const handleClickPlayToggle = () => {
//         stopAllAudios();
//         if (wavesurfer.isPlaying()) wavesurfer.pause();
//         else wavesurfer.play();
//     }
    
//     // Подписка на события
//     wavesurfer.on('play', setPauseButton);
//     wavesurfer.on('pause', setPlayButton);
//     wavesurfer.on('finish', setPlayButton);
//     buttonPlayToggle.addEventListener('click', handleClickPlayToggle)
// }

// const actor1 = document.querySelector('#actor1');
// const actor2 = document.querySelector('#actor2');
// const actor3 = document.querySelector('#actor3');
// const actor4 = document.querySelector('#actor4');
// const actor5 = document.querySelector('#actor5');
// const actor6 = document.querySelector('#actor6');

// const audio1 = actor1.querySelector('.audio');
// const audio2 = actor2.querySelector('.audio');
// const audio3 = actor3.querySelector('.audio');
// const audio4 = actor4.querySelector('.audio');
// const audio5 = actor5.querySelector('.audio');
// const audio6 = actor6.querySelector('.audio');

// initializeAudio(audio1, file1);
// initializeAudio(audio2, file2);
// initializeAudio(audio3, file3);
// initializeAudio(audio4, file4);
// initializeAudio(audio5, file5);
// initializeAudio(audio6, file6);

debugger