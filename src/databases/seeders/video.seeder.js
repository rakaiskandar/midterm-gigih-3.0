const Video = require("../models/video.model");

const init = async () => {
    const video = await Video.find();
    const data = [
        {
            videoId: "xr3xsigGZv4",
            videoThumb: "https://img.youtube.com/vi/xr3xsigGZv4/0.jpg",
            title: "Nescafe Indonesia"
        },
        {
            videoId: "-vLbY1rGMSk",
            videoThumb: "https://img.youtube.com/vi/-vLbY1rGMSk/0.jpg",
            title: "Erigo in New York"
        },
        {
            videoId: "pCpy8s5tUkE",
            videoThumb: "https://img.youtube.com/vi/pCpy8s5tUkE/0.jpg",
            title: "Samsung Galaxy A34|A54 5G"
        },
        {
            videoId: "CGuOSwT1KHM",
            videoThumb: "https://img.youtube.com/vi/CGuOSwT1KHM/0.jpg",
            title: "Rise to The Challenge | Redmi Note 11 Series"
        },
        {
            videoId: "P1zOY2wjOQQ",
            videoThumb: "https://img.youtube.com/vi/P1zOY2wjOQQ/0.jpg",
            title: "Running Needs Nothing Need You | adidas"
        }
    ]

    const promises = [];
    if (!video.length) {
        data.forEach((video) => {
            promises.push(
                new Promise(async(resolve, reject) => {
                    try {
                        await Video.insertMany(video);

                        resolve(true);
                    } catch (e) {
                        reject(false);
                    }
                })
            )
        })

        Promise.all(promises)
            .then(() => console.log("Success generated videos"))
            .catch(() => console.log("Failed generated videos"))

    } else {
        console.log("Videos already generated");
    }
};

module.exports = init;