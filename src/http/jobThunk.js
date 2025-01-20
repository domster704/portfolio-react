import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiUrl} from "../constants"

/**
 * Получение всех промокодов, брендов и типов промо
 */
export const fetchAllJobs = createAsyncThunk(
    'jobs/fetchAllJobs',
    async () => {
        const response = await fetch(`${apiUrl}/jobs`, {
            method: 'GET',
        });

        return await response.json();
    }
);

