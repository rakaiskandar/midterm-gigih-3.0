const { generateRandomInt } = require("../../utils/general.util");
const Product = require("../models/product.model");

const init = async () => {
    const product = await Product.find();
    const data = [
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "xr3xsigGZv4",
            url: "https://www.tokopedia.com/dolcegustoid/nescaf-dolce-gusto-flat-white-1-box-12-kapsul-12-gelas",
            title: "NESCAFÉ Dolce Gusto Flat White 1 box (12 kapsul = 12 gelas)",
            price: 106000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "xr3xsigGZv4",
            url: "https://www.tokopedia.com/gunzfam/nescafe-classic-vending-120gr-by-nestle-professional-promo",
            title: "Nescafe Classic Vending 120gr by Nestle Professional PROMO !",
            price: 35800
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "-vLbY1rGMSk",
            url: "https://www.tokopedia.com/erigo/outerwear-unisex-erigo-coach-jacket-idaina-kaeru-taslan-black-s",
            title: "Outerwear Unisex Erigo Coach Jacket Idaina Kaeru Taslan Black - S",
            price: 500000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "-vLbY1rGMSk",
            url: "https://www.tokopedia.com/erigo/outerwear-unisex-erigo-chore-jacket-vasyl-black-s",
            title: "Outerwear Unisex Erigo Chore Jacket Vasyl Black - S",
            price: 450000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "pCpy8s5tUkE",
            url: "https://www.tokopedia.com/samsung/samsung-galaxy-a34-5g-8-128gb-awesomesilver",
            title: "Samsung Galaxy A34 5G 8/128GB - AwesomeSilver",
            price: 4999000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "pCpy8s5tUkE",
            url: "https://www.tokopedia.com/samsung/samsung-galaxy-a54-5g-8-256gb-awesome-white",
            title: "Samsung Galaxy A54 5G 8/128GB - AwesomeSilver",
            price: 6399000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "CGuOSwT1KHM",
            url: "https://www.tokopedia.com/okeshopwtc/xiaomi-redmi-note-11-pro-8gb-128gb-garansi-resmi-xiaomi-blue",
            title: "Xiaomi Redmi Note 11 Pro ( 8GB/128GB ) Garansi Resmi Xiaomi - Blue",
            price: 3629000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "CGuOSwT1KHM",
            url: "https://www.tokopedia.com/okeshop/xiaomi-redmi-note-11-smartphone-6-128gb-star-blue",
            title: "Xiaomi Redmi Note 11 Smartphone (6/128GB) - Star Blue",
            price: 2649000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "P1zOY2wjOQQ",
            url: "https://www.tokopedia.com/fastrunsport/sepatu-lari-pria-adidas-duramo-10-gw8346",
            title: "ADIDAS DURAMO 10 - GW8346",
            price: 540000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "P1zOY2wjOQQ",
            url: "https://www.tokopedia.com/sportyshopid/baju-kaos-sport-olahraga-running-gym-jogging-adidas-pria-pendek-putih-classic-putih-l",
            title: "Adidas Pria Pendek Putih - CLASSIC PUTIH, L",
            price: 115000
        },
    ]

    const promises = [];
    if (!product.length) {
        data.forEach((product) => {
            promises.push(
                new Promise(async(resolve, reject) => {
                    try {
                        await Product.insertMany(product);

                        resolve(true);
                    } catch (e) {
                        reject(false);
                    }
                })
            )
        })

        Promise.all(promises)
            .then(() => console.log("Success generated products"))
            .catch(() => console.log("Failed generated products"))

    } else {
        console.log("Products already generated");
    }
}

module.exports = init;