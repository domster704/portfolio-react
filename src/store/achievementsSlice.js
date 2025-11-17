import {createSlice} from '@reduxjs/toolkit';
import ITS from '/src/assets/image/certificate/compressed/ITS_S.webp';
import CP from '/src/assets/image/certificate/compressed/CP_S.webp';
import KM from '/src/assets/image/certificate/compressed/KM_S.webp';
import LCT2024 from '/src/assets/image/certificate/compressed/LCT2024_S.webp';
import LCT2025 from '/src/assets/image/certificate/compressed/LCT2025_S.webp';
import AL_1701 from '/src/assets/image/certificate/compressed/AL-1701_S.webp';
import AL_1702 from '/src/assets/image/certificate/compressed/AL-1702_S.webp';


const initialState = {
    list: [
        {
            png: LCT2025,
            pdf: 'https://portfolio.ln-kr.ru/data/docs/certificate/LCT2025.pdf',
            isActive: false,
        },
        {
            png: ITS,
            pdf: 'https://portfolio.ln-kr.ru/data/docs/certificate/ITS.pdf',
            isActive: true,
        }, {
            png: LCT2024,
            pdf: 'https://portfolio.ln-kr.ru/data/docs/certificate/LCT2024.pdf',
            isActive: false,
        }, {
            png: CP,
            pdf: 'https://portfolio.ln-kr.ru/data/docs/certificate/CP.pdf',
            isActive: false,
        }, {
            png: KM,
            pdf: 'https://portfolio.ln-kr.ru/data/docs/certificate/KM.pdf',
            isActive: false,
        }, {
            png: AL_1701,
            pdf: 'https://portfolio.ln-kr.ru/data/docs/certificate/AL-1701.pdf',
            isActive: false,
        }, {
            png: AL_1702,
            pdf: 'https://portfolio.ln-kr.ru/data/docs/certificate/AL-1702.pdf',
            isActive: false,
        },
    ],
};


export const achievementsSlice = createSlice({
    name: 'achievementsSlice',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.list[action.payload.index].isActive = action.payload.isActive;
        }
    }
});

export const {setActive} = achievementsSlice.actions;
export default achievementsSlice.reducer;