import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiUrl} from "../constants"

/**
 * Получение всех промокодов, брендов и типов промо
 */
export const fetchAllProjects = createAsyncThunk(
    'projects/fetchAllProjects',
    async () => {
        const response = await fetch(`${apiUrl}/projects?populate=links&populate=image`, {
            method: 'GET',
        });

        return await response.json();
    }
);

