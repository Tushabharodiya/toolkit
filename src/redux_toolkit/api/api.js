import axios from "axios"
import { BASE_URL } from "../constant"
import { createAsyncThunk } from "@reduxjs/toolkit"




let get_data = async (endpoint) => {
    let res = await axios.get(BASE_URL + endpoint)
    return res;
}

let add_data = async (endpoint, data) => {
    let res = await axios.post(BASE_URL + endpoint, data)
    return res;
}

let delete_data = async (endpoint, id) => {
    let res = await axios.delete(BASE_URL + endpoint + id)
    return res;
}

export { get_data, add_data, delete_data }