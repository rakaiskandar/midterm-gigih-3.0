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
        },
        {
            videoId: "NK1_EjVjxp0",
            videoThumb: "https://img.youtube.com/vi/NK1_EjVjxp0/0.jpg",
            title: "No Excuses | Nike "
        },
        {
            videoId: "TVFwAaWND48",
            videoThumb: "https://img.youtube.com/vi/TVFwAaWND48/0.jpg",
            title: "OPPO Needs Joy"
        },
        {
            videoId: "BwL3vWmLRjE",
            videoThumb: "https://img.youtube.com/vi/BwL3vWmLRjE/0.jpg",
            title: "Vivo | Connections Should Have No Limit"
        },
        {
            videoId: "Ytfa4tDrWt4",
            videoThumb: "https://img.youtube.com/vi/Ytfa4tDrWt4/0.jpg",
            title: "Capture the Light| realme 9 Pro Series"
        },
        {
            videoId: "TqeHDDohDqA",
            videoThumb: "https://img.youtube.com/vi/TqeHDDohDqA/0.jpg",
            title: "UNIQLO | Rayakan Dengan Baju Baru"
        },
        {
            videoId: "scEDHsr3APg",
            videoThumb: "https://img.youtube.com/vi/scEDHsr3APg/0.jpg",
            title: "Devops CI/CD Explained"
        },
        {
            videoId: "nZqwQCLYgjk",
            videoThumb: "https://img.youtube.com/vi/nZqwQCLYgjk/0.jpg",
            title: "wave to earth - season"
        },
        {
            videoId: "4-k6j9g5Hzk",
            videoThumb: "https://img.youtube.com/vi/4-k6j9g5Hzk/0.jpg",
            title: "How Stardew Valley Was Made by Only One Person"
        },
        {
            videoId: "QXjU9qTsYCc",
            videoThumb: "https://img.youtube.com/vi/QXjU9qTsYCc/0.jpg",
            title: "How do computers read code?"
        },
        {
            videoId: "sW9npZVpiMI",
            videoThumb: "https://img.youtube.com/vi/sW9npZVpiMI/0.jpg",
            title: "Why You Need Math for Prorammings?"
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