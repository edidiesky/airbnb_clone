import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Gig from "../models/Gig.js";
// GET All Gig
//  Public
const GetAllGig = asyncHandler(async (req, res) => {
  // instantiate the request queries
  // min and max price
  // search and userId
  // category
  const search = req.query.search;
  const minprice = req.query.minprice;
  const category = req.query.category;
  const maxprice = req.query.maxprice;
  const authorId = req.query.user;
  const sort = req.query.sort;

  const queryObject = {};

  // search
  if (search) {
    queryObject.title = { $regex: search, options: "i" };
  }
  // minimum price
  if (minprice) {
    queryObject.price = { $gt: minprice };
  }
  // maxprice
  if (maxprice) {
    queryObject.price = { $gt: maxprice };
  }
  // user
  if (authorId) {
    queryObject.authorId = user;
  }
  // category
  if (category) {
    queryObject.category = category;
  }

  const limit = req.query.limit || 12;
  const page = req.query.page;
  const skip = (page - 1) * limit;

  let result = Gig.find(queryObject)
    .skip(skip)
    .limit(limit)
    .populate("authorId", "image username");

  // perform sorting operation
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }

  // console.log(queryObject)

  const totalGig = await Gig.countDocuments({});
  const noOfPages = Math.ceil(totalGig / limit);

  const gig = await result;
  res.status(200).json({ gig, totalGig, noOfPages });
});
//
// GET SINGLE Gig
// Not Private
const GetSingleGig = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const gig = await Gig.findById({ _id: id }).populate(
    "authorId",
    "username image country role"
  );
  if (!gig) {
    res.status(404);
    throw new Error("Gig not found");
  }
  res.status(200).json({ gig });
});

// GET SINGLE Gig
// Not Private
// Admin and seller
const CreateSingleGig = asyncHandler(async (req, res) => {
  // get the request body parameters
  const {
    title,
    image,
    category,
    description,
    price,
    countInStock,
    shortDescription,
    tags,
    subInfo,
    type,
    deliveryDays,
  } = req.body;
  const { userId, role } = req.user;

  if (role === "user") {
    res.status(404);
    throw new Error("User cannot perform this action");
  }

  const gig = await Gig.create({
    title,
    image,
    description,
    price,
    countInStock,
    shortDescription,
    tags,
    type,
    deliveryDays,
    authorId: userId,
    category,
    subInfo,
  });

  res.status(200).json({ gig });
});

//PRIVATE
// ADMIN
const UpdateGig = asyncHandler(async (req, res) => {
  const { userId, role } = req.user;
  const {
    title,
    image,
    category,
    description,
    price,
    countInStock,
    shortDescription,
    tags,
    subInfo,
    type,
    deliveryDays,
  } = req.body;
  const gig = await Gig.findById({ _id: req.params.id });

  if (!gig) {
    res.status(404);
    throw new Error("Gig not found");
  }
  // res.send(role)
  // console.log((role === 'admin'));
  // check if the user is the seller or is admin
  if (gig.authorId.toString() === userId || role === "admin") {
    const data = {
      authorId: userId,
      title,
      tags,
      image,
      type,
      description,
      price,
      countInStock,
      shortDescription,
      deliveryDays,
      category,
      subInfo,
    };
    // check for empty values and repeated values

    const updatedGig = await Gig.findByIdAndUpdate(
      { _id: req.params.id },
      { ...data },
      { new: true }
    );
    res.status(200).json({ updatedGig });
  } else {
    res.status(404);
    throw new Error("You are not authorized to perform this action");
  }
});

//PRIVATE/
// ADMIN
const DeleteGig = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId, role } = req.user;
  const gig = await Gig.findById({ _id: id });

  if (!gig) {
    res.status(404);
    throw new Error("Gig not found");
  }
  // res.send(role)
  // console.log((role === 'admin'));
  // console.log(gig.authorId.toString() !== userId);
  // check if the user is the seller or is admin
  if (gig.authorId.toString() === userId || role === "admin") {
    await Gig.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "The Gig has been successfully deleted" });
  } else {
    res.status(404);
    throw new Error("You are not authorized to perform this action");
  }
  // console.log(gig);
  // res.status(200).json({ gig});

  // console.log('Helolo world');

});

const GetTopRatedGig = asyncHandler(async (req, res) => {
  // get the Gig but based on the rating and then send 4 Gig
  const toprated = await Gig.find({}).sort({ rating: -1 }).limit(3);
  res.status(200).json({ toprated });
});

export {
  GetSingleGig,
  GetAllGig,
  UpdateGig,
  DeleteGig,
  GetTopRatedGig,
  CreateSingleGig,
};