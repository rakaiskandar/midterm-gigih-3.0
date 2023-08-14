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
            videoId: "xr3xsigGZv4",
            url: "https://www.tokopedia.com/gunzfam/nescafe-latte-500gr-by-nestle-professional-termurah",
            title: "Nescafe Latte 500gr by Nestle Professional TERMURAH !",
            price: 46000
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
            videoId: "-vLbY1rGMSk",
            url: "https://www.tokopedia.com/erigo/outerwear-unisex-erigo-coach-jacket-fujinkai-taslan-black-l",
            title: "Outerwear Unisex Erigo Coach Jacket Fujinkai Taslan Black - L",
            price: 155000
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
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "NK1_EjVjxp0",
            url: "https://www.tokopedia.com/trueogkicks/nike-air-force-1-low-triple-black-authentic-gs-38-63de6",
            title: "Nike Air Force 1 Low Black",
            price: 1699000
        },
        {   
            productId: `P-${generateRandomInt()}`,
            videoId: "NK1_EjVjxp0",
            url: "https://www.tokopedia.com/trueogkicks/sneakers-air-jordan-1-low-light-smoke-grey-100-original-45",
            title: "Sneakers Air Jordan 1 Low Light Smoke Grey 100% Original - 45",
            price: 2899000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "TVFwAaWND48",
            url: "https://www.tokopedia.com/onlyonecell/hp-oppo-a54-ram-6gb-128gb-5000mah-smartphone-garansi-toko-1-tahun-biru",
            title: "Oppo A54 Ram 6GB/128GB 5000mAh Smartphone Garansi Toko 1 Tahun - Biru",
            price: 879000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "BwL3vWmLRjE",
            url: "https://www.tokopedia.com/vivo/vivo-iqoo-z7-12-256-sdm-782g-120w-flashcharge-5000mah-64mp-ois-matrix-blue-e2177",
            title: "vivo iQOO Z7 (12/256) - SDM 782G, 120W FlashCharge + 5000mAh, 64MP OIS - Matrix Blue",
            price: 4899000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "BwL3vWmLRjE",
            url: "https://www.tokopedia.com/vivo/vivo-y22-4-128-helio-g85-50mp-camera-splash-waterproof-starlit-blue-c65c1",
            title: "vivo Y22 (4/128) - Helio G85, 50MP Camera, Splash Waterproof - Starlit Blue",
            price: 2299000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "Ytfa4tDrWt4",
            url: "https://www.tokopedia.com/barnaclestoree/realme-9-pro-plus-8-256-gb",
            title: "Realme 9 Pro Plus",
            price: 4220000
        },
        {   
            productId: `P-${generateRandomInt()}`,
            videoId: "Ytfa4tDrWt4",
            url: "https://www.tokopedia.com/realme/realme-11-pro-8-8gb-256gb-dimensity-7050-5g-100mp-ois-pro-camera-astral-black",
            title: "realme 11 Pro 8+8GB*/256GB - Dimensity 7050 5G | 100MP OIS Pro Camera - Astral Black",
            price: 5599000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "TqeHDDohDqA",
            url: "https://www.tokopedia.com/presidenkaosmurah/tshirt-baju-kaos-distro-uniqlo-logo-kaos-distro-pria-wanita-m",
            title: "Uniqlo Tshirt Unisex",
            price: 60750
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "scEDHsr3APg",
            url: "https://www.tokopedia.com/mrhanzo/lenovo-x1-extreme-core-i7-8750h-ram-32gb-nvidia-gtx-1050-ti-4gb-8gb-256gb-17e54",
            title: "Lenovo X1 extreme core i7 8750H - RAM 32GB - NVIDIA GTX 1050 Ti 4GB - 8GB - 256GB",
            price: 8075000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "nZqwQCLYgjk",
            url: "https://www.tokopedia.com/sevenstereo/legacy-eg100-eg-100-stratocaster-guitar-electric-sunburst-76bc3",
            title: "Legacy EG100 EG-100 Stratocaster Guitar Electric - Sunburst",
            price: 1590000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "4-k6j9g5Hzk",
            url: "https://www.tokopedia.com/onexindonesia/onex-gx6-premium-quality-kursi-gaming-chair-black",
            title: "ONEX GX6 Premium Quality Kursi Gaming Chair - BLACK",
            price: 2600000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "QXjU9qTsYCc",
            url: "https://www.tokopedia.com/xiaomi-indonesia/mi-monitor-gaming-curved-34-inch-144hz-wqhd-3440-1440-garansi-resmi-paket-instant",
            title: "Mi Monitor Gaming Curved 34 Inch 144Hz WQHD 3440 * 1440 - Garansi Resmi, Paket Instant",
            price: 5445000
        },
        {
            productId: `P-${generateRandomInt()}`,
            videoId: "sW9npZVpiMI",
            url: "hhttps://www.tokopedia.com/nyk-official/keyboard-gaming-61-wired-membrane-nyk-nemesis-k-06-eris-with-holder-hitam",
            title: "Keyboard Gaming 61% Wired Membrane NYK Nemesis K-06 Eris With Holder - Hitam",
            price: 130000
        }
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