const express = require("express");
const router = express.Router({
    mergeParams: true
});
const wrapAsync = require("../util/wrapAsync.js");
const ExpressError = require("../util/ExpressError.js");
const {isloggedIn} = require("../middleware.js");
const {
    reviewSchema
} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listings.js");

const validateReview = (req, res, next) => {
    let {
        error
    } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        req.flash("warning", errMsg);
        const listingId = req.params.listingId;
        return res.redirect(`/listings/${listingId}`);
    }
    next();
};

//Post Review Route

router.post("/", isloggedIn, validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.listingId);
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
  let review = new Review(req.body.review);
review.author = req.user._id;
listing.reviews.push(review);
await review.save(); 
await listing.save();

    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
}));

//Delete Review Route

router.delete("/:reviewId", wrapAsync(async (req, res) => {
    let {
        listingId,
        reviewId
    } = req.params;
    await Listing.findByIdAndUpdate(listingId, {
        $pull: {
            reviews: reviewId
        }
    });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${listingId}`);
}));

module.exports = router;