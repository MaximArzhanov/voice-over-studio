import file1 from '../audio/classic_1.mp3';
import file2 from '../audio/classic_2.mp3';
import file3 from '../audio/classic_3.mp3';
import file4 from '../audio/classic_4.mp3';

import WaveSurfer from "wavesurfer.js";

let data = [];

const audios_Nodelist = document.querySelectorAll('.audio');
const audios_Array = Array.from(audios_Nodelist);

const initializeAudio = (audio, file) => {
    const audioWaveform = audio.querySelector('.audio__waveform');
    const buttonPlayToggle = audio.querySelector('.audio__button_type_toggle');
    const buttonDownload = audio.querySelector('.audio__button_type_download');

    
    
    // Для загрузки файла
    buttonDownload.download = file1;
    
    // Инициализация формы проигрывателя
    const wavesurfer = WaveSurfer.create({
        container: audioWaveform,
        responsive: true,
        hideScrollbar: true,
        backgroundColor: '#fff',
        progressColor: '#666',
        waveColor: '#003A97'
    });

    data.push(wavesurfer);
    
    wavesurfer.load(file);
    
    const setPauseButton = () => {
        buttonPlayToggle.classList.remove('audio__button_type_play');
        buttonPlayToggle.classList.add('audio__button_type_pause');
    }
    
    const setPlayButton = () => {
        buttonPlayToggle.classList.remove('audio__button_type_pause');
        buttonPlayToggle.classList.add('audio__button_type_play');
    }

    const stopAllAudios = () => {
        data.forEach(playingAudio => {
            if (playingAudio !== wavesurfer) playingAudio.stop()
        });
    }
    
    const handleClickPlayToggle = () => {
        stopAllAudios();
        if (wavesurfer.isPlaying()) wavesurfer.pause();
        else wavesurfer.play();
    }
    
    wavesurfer.on('play', setPauseButton);
    wavesurfer.on('pause', setPlayButton);
    wavesurfer.on('finish', setPlayButton);
    
    buttonPlayToggle.addEventListener('click', handleClickPlayToggle)
}

audios_Array.forEach((audio) => {
    initializeAudio(audio, file1);
});

console.log(data);
