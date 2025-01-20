import {createSlice} from '@reduxjs/toolkit';
import {fetchAllProjects} from "../http/projectThunk";
import {assetsUrl} from "../constants";

// https://www.simpleimageresizer.com/resize/webp

const initialState = {
    list: []
};

export const projectsSlice = createSlice({
    name: 'projectsSlice',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllProjects.fulfilled, (state, action) => {
                state.list = action.payload.data.map(item => {
                    if (item.image) {
                        item.image_full = assetsUrl + item.image[0].url;
                        item.image = assetsUrl + item.image[0].formats.small.url;
                    }
                    return item;
                });
            })
    }
});

export const {} = projectsSlice.actions;
export default projectsSlice.reducer;