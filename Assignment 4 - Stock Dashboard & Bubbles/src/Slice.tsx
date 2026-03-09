import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "info",
    initialState: {
        stocks: [
            {
                stock: "stock1",
                value: 200,
                minValue: 200,
                maxValue: 200
            },
            {
                stock: "stock2",
                value: 130,
                minValue: 130,
                maxValue: 130
            }
        ]
    },
    reducers: {
        setValue: (state, action) => {
            if (action.payload.stock === "stock1") {
                state.stocks[0].value = action.payload.value;
                if (action.payload.value < state.stocks[0].minValue) {
                    state.stocks[0].minValue = action.payload.value;
                }
                if (action.payload.value > state.stocks[0].maxValue) {
                    state.stocks[0].maxValue = action.payload.value;
                }
            } else if (action.payload.stock === "stock2") {
                state.stocks[1].value = action.payload.value;
                if (action.payload.value < state.stocks[1].minValue) {
                    state.stocks[1].minValue = action.payload.value;
                }
                if (action.payload.value > state.stocks[1].maxValue) {
                    state.stocks[1].maxValue = action.payload.value;
                }
            }
        }
    }
});

export const {setValue } = slice.actions;
export default slice.reducer;
