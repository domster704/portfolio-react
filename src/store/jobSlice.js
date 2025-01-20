import {createSlice} from '@reduxjs/toolkit';
import {fetchAllJobs} from "../http/jobThunk";

const initialState = {
    list: []
};

const jobSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAllJobs.fulfilled, (state, action) => {
                state.list = action.payload.data.reverse();
            })
    }
});

export default jobSlice.reducer;