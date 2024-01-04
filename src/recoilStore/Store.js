import { atom, selector } from "recoil";

//const apiKey = import.meta.env.React_API_KEY;
//const apiUrl = import.meta.env.React_API_URL_Base;

//console.log(import.meta.env.React_API_KEY);
//console.log(apiUrl);

export const storeData = atom({
    key: 'data',
    default: []
})
export const storeColumns = atom({
    key: 'columns',
    default: []
})

export const storeKey = atom({
    key: 'key',
    default: ''
})

export const storeURL = atom({
    key: 'url',
    default: 'https://theotesteng.000webhostapp.com/API/api'
})

export const storeSelectedlist = atom({
    key: 'selected',
    default: null
})

export const storeForm = atom({
    key: 'form',
    default: null
})


export const filterSelect = selector({
    key: 'filter',
    get: ({ get }) => {
        const data = get(storeData)
        const column = get(storeColumns)
        return data, column
    }
})