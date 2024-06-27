import { createAsyncThunk } from "@reduxjs/toolkit";
import { add_data, delete_data, get_data } from "../../api/api";
import { ADD_VOTE, DELETE_CONNECTION, DELETE_ELECTION, DELETE_PARTY, DELETE_VOTER, GET_CONNECTION, GET_ELECTION, GET_PARTY, GET_VOTE, GET_VOTER, POST_CONNECTION, POST_ELECTION, POST_PARTY, POST_VOTER } from "../../constant";


let get_party = createAsyncThunk("GETPARTY", async (action) => {
    let res = await get_data(GET_PARTY)
    return (res.data.data)
})

let add_party = createAsyncThunk("POSTPARTY", async (action) => {
    let res = await add_data(POST_PARTY, action)
    return (res.data.data)
})

let delete_party = createAsyncThunk("DELETEPARTY", async (action) => {
    let res = await delete_data(DELETE_PARTY, action)
    return action
})

//voter

let get_voter = createAsyncThunk("GETVOTER", async (action) => {
    let res = await get_data(GET_VOTER)
    return (res.data.data)
})

let post_voter = createAsyncThunk("POSTVOTER", async (action) => {
    let res = await add_data(POST_VOTER, action)
    return (res.data.data)
})

let delete_voter = createAsyncThunk("DELETEVOTER", async (action) => {
    let res = await delete_data(DELETE_VOTER, action)
    return action;
})

//election

let get_election = createAsyncThunk("GETELECTION", async (action) => {
    let res = await get_data(GET_ELECTION)
    return (res.data.data)
})

let post_election = createAsyncThunk("POSTELECTION", async (action) => {
    let res = await add_data(POST_ELECTION, action)
    return (res.data.data)
})

let delete_election = createAsyncThunk("DELETEELECTION", async (action) => {
    let res = await delete_data(DELETE_ELECTION, action)
    return action;
})

//connection

let get_connection = createAsyncThunk("GETCONNECTION", async (action) => {
    let res = await get_data(GET_CONNECTION)
    return (res.data.data)
})

let post_connection = createAsyncThunk("POSTCONNECTION", async (action) => {
    let res = await add_data(POST_CONNECTION, action)
    return (res.data.data)
})

let delete_connection = createAsyncThunk("DELETECONNECTION", async (action) => {
    let res = await delete_data(DELETE_CONNECTION, action)
    return action;
})


//user

let get_user = createAsyncThunk("GETUSER", async (action) => {
    let res = await get_data(GET_VOTE)
    return (res.data.data)
})

let post_user = createAsyncThunk("POSTUSER", async (action) => {
    let res = await add_data(ADD_VOTE, action)
    return (res.data.data)
})

export {
    get_party, add_party, delete_party, get_voter, post_voter, delete_voter, get_election, post_election, delete_election,
    get_connection, post_connection, delete_connection, get_user, post_user
}