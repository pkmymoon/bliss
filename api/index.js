const OpenAI = require("openai");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const _jimp = require("./jimp");
const { v4: uuidv4 } = require("uuid");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        parameterLimit: 100000,
        limit: "50mb",
        extended: true,
    })
);
app.use(cors());

let fileupload = require("express-fileupload");
app.use(fileupload());
app.post("/image", async (req, res) => {
    let prompT =
        "cleaned place with clean and neat waste bins with different colours of high quality each one for different materials like plastic, organic, and other wastes. This picture looks like a clean neighbourhood. ";
    const { image } = req.files;
    if (!image) return res.sendStatus(400);
    let upload_image = "./upload/" + uuidv4() + ".png";
    image.mv(upload_image, async function (err) {
        let mask = await _jimp.mask(upload_image);
        const response = await openai.images.edit({
            image: fs.createReadStream(upload_image),
            mask: fs.createReadStream(mask),
            prompt: prompT,
        });
        res.send(response.data[0].url);
    });
});
app.listen(3000, () => console.log("Server ready on port 3000."));
module.exports = app;
