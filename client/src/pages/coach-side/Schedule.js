import React, { Component } from "react";
import axios from "axios";

class Schedule extends Component {
    renderEvents = () => {
        let userId = JSON.parse(localStorage.getItem('userId'));
        axios({
            url:`/${userId}/events`,
            method: "GET",
        })
        .then(response => {
            
        })
    }

    render() {
        return(
            <>
                <h1></h1>
            </>
        )
    }
}

export default Schedule;
