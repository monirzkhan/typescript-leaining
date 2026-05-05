//OOP Abstraction:


//Interface for abstraction


interface MediaPlayer{
    play(): void;
    pause(): void;
    stop(): void;
}

class AudioPlayer implements MediaPlayer{
    play(): void {
        console.log('Playing audio...');
    }
    pause(): void {
        console.log('Pausing audio...');
    }
    stop(): void {
        console.log('Stopping audio...');
    }
}

class VideoPlayer implements MediaPlayer{
    play(): void {
        console.log('Playing video...');
    }
    pause(): void {
        console.log('Pausing video...');
    }
    stop(): void {
        console.log('Stopping video...');
    }
}

const audioPlayer = new AudioPlayer();
audioPlayer.play();
audioPlayer.pause();
audioPlayer.stop();

const videoPlayer = new VideoPlayer();
videoPlayer.play();
videoPlayer.pause();
videoPlayer.stop();     

///Abstract class for abstraction

abstract class MediaPlayerAbstract{
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}


//implementing abstract class
class MonirPlayer extends MediaPlayerAbstract{
    play(): void {
        console.log('MonirPlayer is playing media...');
    }
    pause(): void {
        console.log('MonirPlayer is pausing media...');
    }
    stop(): void {
        console.log('MonirPlayer is stopping media...');
    }       
}


const monirPlayer = new MonirPlayer();
monirPlayer.play();
monirPlayer.pause();
monirPlayer.stop();