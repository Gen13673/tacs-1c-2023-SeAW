import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
	name: "ui",
	initialState: {
        isLoadingUI: false,
		isCreateEventModalOpen: false,
	},
	reducers: {
        onStartLoading: (state) => {
			state.isLoadingUI = true;
		},
        onStopLoading: (state) => {
			state.isLoadingUI = false;
		},
		onOpenCreateEventModal: (state) => {
			state.isCreateEventModalOpen = true;
		},
		onCloseCreateEventModal: (state) => {
			state.isCreateEventModalOpen = false;
		}
	},
});


export const { 
    onStartLoading,
    onStopLoading,
    onOpenCreateEventModal, 
    onCloseCreateEventModal,
} = uiSlice.actions;