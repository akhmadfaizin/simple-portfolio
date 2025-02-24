import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppRedux } from "./interface";

export const initialState: IAppRedux = {
  isLoading: false,
  isTableLoading: false,
  uploadProgress: 0,
  errorModal: {
    isOpen: false,
    message: "",
  },
  version: undefined,
  isVersionChecked: false,
  isReloaded: true,
  isTouched: false,
  nextPath: "",
  isModalOpen: false,
  isRefresh: false,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setApplicationData: (
      state,
      action: PayloadAction<{
        isLoading?: boolean;
        isTableLoading?: boolean;
        uploadProgress?: number;
        errorModal?: {
          isOpen?: boolean;
          message?: string;
        };
        version?: string;
        isVersionChecked?: boolean;
        isReloaded?: boolean;
        isTouched?: boolean;
        nextPath?: string;
        isModalOpen?: boolean;
        isRefresh?: boolean;
      }>
    ) => {
      Object.assign(state, {
        ...state,
        ...action.payload,
        errorModal: {
          ...state.errorModal,
          ...action.payload.errorModal,
        },
      });
    },
  },
});

export const { setApplicationData } = applicationSlice.actions;
export default applicationSlice.reducer;
