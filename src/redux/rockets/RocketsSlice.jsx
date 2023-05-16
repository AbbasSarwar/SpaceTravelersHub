import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    rockets: [],
    status:true,
    error:null,
};

export const FetchData = createAsyncThunk('get/rockets', async ()=>{
    const rockets = await axios.get('https://api.spacexdata.com/v4/rockets');
    return rockets.data
})


export const Rocket = createSlice({
    name:"Rockets",
    initialState,
    extraReducers(builder){
        builder
        .addCase(FetchData.fulfilled, (state, { payload })=>{
            state.status = false
            const data = payload.map((rocket)=>({
                rocket_id:rocket.id,
                rocket_name: rocket.name,
                description: rocket.description,
                rocket_flickr_images: rocket.flickr_images[0]
            }));
            state.rockets = data;
        })
    }
});