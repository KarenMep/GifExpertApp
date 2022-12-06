import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isInfoModalOpen: false
    },
    reducers:{
        onOpenInfoModal: (state) => {
            state.isInfoModalOpen = true;
        },
        onCloseInfoModal: (state) => {
            state.isInfoModalOpen = false;
        }
    }
})

export const { onOpenInfoModal, onCloseInfoModal } = uiSlice.actions