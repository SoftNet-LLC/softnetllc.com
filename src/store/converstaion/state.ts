import { createStore } from "effector";
import { nextEvent, updateFieldEvent } from "@store/converstaion/events";

const initState = {
    current: "name",
    loading: false,
    data: {
        name: "",
        email: "",
        phone: "",
    }
}

export const $conversation = createStore({ ...initState })
    .on(updateFieldEvent, (state, payload: any) =>({ ...state, data: { ...state.data, ...payload } }))
    .on(nextEvent, (state, payload) =>({ ...state, current: payload }))
