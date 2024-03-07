var Jimp = require("jimp");
const { v4: uuidv4 } = require("uuid");
let image_2 = "./assets/masks.png";

exports.mask = function (image_1) {
    return new Promise((res, rej) => {
        Jimp.read(image_1, (err, image) => {
            Jimp.read(image_2, (err1, image1) => {
                image1.resize(image.bitmap.width, image.bitmap.height);
                image.mask(image1, 0, 0);

                let output_image = "./out/" + uuidv4() + ".png";
                image.write(output_image);
                image.getBufferAsync("image/png");
                res(output_image);
            });
        });
    });
};
