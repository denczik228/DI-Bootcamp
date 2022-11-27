class Video {
    constructor(title, uploader, time) {
        this.titleVideo = title;
        this.uploaderVideo = uploader;
        this.timeVideo = time;
    }
    //method
    wath() {
        return (`${this.uploaderVideo} watched all ${this.timeVideo}sec of ${this.titleVideo}!`);
    }
}
const mVideo = new Video("Young Sheldon", "Ralph", 2700);
mVideo.wath();
console.log(mVideo);
console.log(mVideo.wath());

class SecondVideo extends Video {
    constructor(titleSecondVideo, uploaderSecondVideo, timeSecondVideo) {
        super(titleSecondVideo, uploaderSecondVideo, timeSecondVideo)
    }
    watch() {
        return (`${this.uploaderVideo} watched all ${this.timeVideo}sec of ${this.titleVideo}!`);
    }
}

const mSVideo = new SecondVideo("Tric or Treat", "Young Dolph", 2400);
mSVideo.watch();
console.log(mSVideo.watch());

const data = [
    {
        title: "Gangs of London",
        uploader: "Great Britain",
        time: "3240",
    },
    {
        title: "Solar Oposites",
        uploader: "USA",
        time: "1500",
    },
    {
        title: "Brassic",
        uploader: "Britain",
        time: "2580",
    },
    {
        title: "Residant Alien",
        uploader: "USA",
        time: "2760",
    },
    {
        title: "Rick and Morty",
        uploader: "USA",
        time: "1200",
    },
]

const datavideo = [];
for (const films of data) {
    const { uploader, title, time } = films;
    const film = new Video({ uploader, title, time });
    datavideo.push(film);
}
console.log(datavideo);