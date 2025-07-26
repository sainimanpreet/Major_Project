const mongoose = require("mongoose");
const Listing = require("./models/listings"); // model import
const { sampleListings } = require("./init/data"); // adjust path if needed

main()
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ Connection Error:");
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({});

  const updatedListings = sampleListings.map((listing) => {
    if (typeof listing.image === "string") {
      listing.image = {
        url: listing.image,
        filename: "unsplash-default",
      };
    }
    return listing;
  });

  await Listing.insertMany(updatedListings);
  console.log("🌱 Database seeded with updated image format!");
};

initDB();




