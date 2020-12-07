import { atom, selector } from "recoil";

const getShowState = atom({
    key: "getShowState",
    default: [],
})

export { getShowState }