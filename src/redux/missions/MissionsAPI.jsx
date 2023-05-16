import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const missionsData = createAsyncThunk('get/fetchmissions', async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      const data = response.data
      return data.map((mission)=>({
        id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
    }));
    } catch (error) {
      throw Error('Error fetching data from API');
    }
  });