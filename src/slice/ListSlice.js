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

export const getBreezDataSearch = createAsyncThunk(
    'getBreezDataSearch',
    async (query, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/list/search?country=${query}`);
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
    error:false,
    searchData:[]
}
const ListSlice=createSlice(
    {
        name:"lists",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(getBreezData.pending,(state)=>{
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
              .addCase(getBreezDataSearch.pending,(state)=>{
                state.loading=true
            })
            .addCase(getBreezDataSearch.fulfilled,(state,{payload})=>{
                state.loading=false
                state.searchData=payload
                state.error=false
            })
            .addCase(getBreezDataSearch.rejected,(state,{payload})=>{
                state.loading=false
                state.error=payload
            })
        }

    }
)
export default ListSlice.reducer