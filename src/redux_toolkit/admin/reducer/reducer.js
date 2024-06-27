import { createSlice } from "@reduxjs/toolkit";
import {
    add_party, delete_connection, delete_election, delete_party, delete_voter, get_connection,
    get_election, get_party, get_user, get_voter, post_connection, post_election, post_user, post_voter
} from "../api/api";




let initialState = {
    party: [],
    voter: [],
    election: [],
    Connection: [],
    user: [],
    isLoading: false,
    isError: true,
}


let adminSlice = createSlice({
    name: "party",
    initialState,
    extraReducers: (builder) => {
        //get party
        builder.addCase(get_party.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(get_party.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.party = action.payload;
        })
        builder.addCase(get_party.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })
        //post party
        builder.addCase(add_party.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(add_party.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.party.push(action.payload)
        })
        builder.addCase(add_party.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })
        //delete party
        builder.addCase(delete_party.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(delete_party.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.party = state.party.filter((val) => val._id != action.payload)
        })
        builder.addCase(delete_party.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })


        //get voter
        builder.addCase(get_voter.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(get_voter.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.voter = action.payload;
        })
        builder.addCase(get_voter.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })
        //post voter
        builder.addCase(post_voter.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(post_voter.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.voter.push(action.payload)
        })
        builder.addCase(post_voter.rejected, (state, action) => {
            state.isError = true;
        })
        //remove voter
        builder.addCase(delete_voter.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(delete_voter.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.voter = state.voter.filter((val) => val._id != action.payload)
        })
        builder.addCase(delete_voter.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })


        //get election
        builder.addCase(get_election.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(get_election.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.election = action.payload;
        })
        builder.addCase(get_election.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })
        //post election
        builder.addCase(post_election.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(post_election.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.election.push(action.payload)
        })
        builder.addCase(post_election.rejected, (state, action) => {
            state.isError = true;
        })
        //remove voter
        builder.addCase(delete_election.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(delete_election.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.election = state.election.filter((val) => val._id != action.payload)
        })
        builder.addCase(delete_election.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })

        //get connection
        builder.addCase(get_connection.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(get_connection.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.Connection = action.payload;
        })
        builder.addCase(get_connection.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })
        //post connection
        builder.addCase(post_connection.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(post_connection.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.Connection.push(action.payload)
        })
        builder.addCase(post_connection.rejected, (state, action) => {
            state.isError = true;
        })
        //remove connection
        builder.addCase(delete_connection.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(delete_connection.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.Connection = state.Connection.filter((val) => val._id != action.payload)
        })
        builder.addCase(delete_connection.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })

        //vote user
        //get vote
        builder.addCase(get_user.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(get_user.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.user = action.payload;
        })
        builder.addCase(get_user.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })

        //post vote
        builder.addCase(post_user.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(post_user.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.user.push(action.payload)
        })
        builder.addCase(post_user.rejected, (state, action) => {
            state.isError = true;
        })

    }
})

export default adminSlice.reducer;