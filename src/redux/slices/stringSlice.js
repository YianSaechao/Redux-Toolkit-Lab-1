import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    value: 'Hello World!',
};

const stringSlice = createSlice({
    name: 'string',

    initialState,
    reducers: {
        updateString: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateString } = stringSlice.actions;
export default stringSlice.reducer;