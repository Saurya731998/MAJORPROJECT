const mongoose = require("mongoose");
const { data: initData } = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});

    const transformedData = initData.map((obj) => ({
        ...obj,
        owner: "6aad202f39138ce72c81a98f",
        image: {
            url: obj.image.url,
            filename: obj.image.filename
        }
    }));

    await Listing.insertMany(transformedData);

    console.log("data was initialized");
};
initDB();