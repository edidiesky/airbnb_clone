import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching all Gigs
export const getAllGigs = createAsyncThunk(
  "/fetch/allGigs",
  async (name, thunkAPI) => {
    try {
      const {
        page,
        search,
        sort,
        type,
        minprice,
        time,
        category,
        maxprice,
        endDate,
        startDate,
        location,
      } = thunkAPI.getState().gigs;
      let GigsUrl = `/api/v1/listing`;
      if (sort) {
        productUrl = productUrl + `?sort=${sort}`;
      }
      if (type) {
        GigsUrl = GigsUrl + `?type=${type}`;
        const { data } = await axios.get(GigsUrl);
        return data;
      }
      if (endDate !== "Invalid date" || startDate !== "Invalid date" || location) {
        GigsUrl =
          GigsUrl +
          `?listing_endDate=${endDate}&listing_startDate=${startDate}&listing_country=${location}`;
        const { data } = await axios.get(GigsUrl);
        return data;
      }
      if (category || minprice || maxprice) {
        GigsUrl =
          GigsUrl +
          `?category=${category}&minprice=${minprice}&maxprice=${maxprice}`;
        const { data } = await axios.get(GigsUrl);
        return data;
      }
      if (page) {
        GigsUrl = GigsUrl + `?page=${page}`;
        const { data } = await axios.get(GigsUrl);
        return data;
      }
      const { data } = await axios.get(GigsUrl);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching single Gigs based on its id
export const getSingleGigsDetails = createAsyncThunk(
  "Gigs/getGigsDetails",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/listing/${name}`);

      return data.gig;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching single Gigs based on its id
export const getHostListing = createAsyncThunk(
  "Gigs/getHostListing",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/listing/host/${name}`);

      return data.gig;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching single Gigs based on its id
export const CreateSingleGig = createAsyncThunk(
  "Gigs/createGigs",
  async (GigsData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.post(`/api/v1/listing`, GigsData, config);

      return data.gig;
      // console.log(GigsData)
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Update a single Gigs for the admin
export const UpdateGig = createAsyncThunk(
  "/updateGig",
  async ({ GigsData }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { _id } = state.gigs.GigsDetails;
      const { data } = await axios.put(
        `/api/v1/listing/${_id}`,
        GigsData,
        config
      );
      // console.log(GigsData)
      return data.updatedGig;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Delete a single Gigs for the admin
export const DeleteGig = createAsyncThunk(
  "/admin/deleteGig",
  async (Gigsid, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.delete(`/api/v1/listing/${Gigsid}`, config);
      return Gigsid;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Create a review access point for the user
export const createReviewGigs = createAsyncThunk(
  "/user/reviewGigs/",
  async ({ Reviewdata, id }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/v1/listing/review/${id}`,
        Reviewdata,
        config
      );
      return data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Get al toprated Gigs for the user
export const getTopRatedGigs = createAsyncThunk(
  "/get/topRatedGigs",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.get(`/api/v1/listing/rated`, config);
      return data.toprated;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Get al toprated Gigs for the user
export const getGigsStats = createAsyncThunk(
  "/get/getGigsStats",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.get(`/api/v1/listing/stats`, config);
      return data.stats;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
