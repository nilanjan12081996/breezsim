import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/Api";

export const getBreezData = createAsyncThunk(
    'getBreezData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/list/data`);
            if (response?.data?.statusCode === 200) {
                return response?.data;
            } else {
                return rejectWithValue(response);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
const initialState={
    loading:false,
    breezData:[],
    error:false
}
const ListSlice=createSlice(
    {
        name:"lists",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(getBreezData.pending,(state)=>{
                state.loading=true
            })
            .addCase(getBreezData.fulfilled,(state,{payload})=>{
                state.loading=false
                state.breezData=payload
                state.error=false
            })
            .addCase(getBreezData.rejected,(state,{payload})=>{
                state.loading=false
                state.error=payload
            })
        }

    }
)
export default ListSlice.reducer