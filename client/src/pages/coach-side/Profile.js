import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';

import API from "../../utils/API"

class Profile extends Component {
    state = {
        coach: ""
    }

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = () => {
        API.getCoach()
            .then(res => this.setState({ coach: res.data }))
            .catch(err => console.log(err));
    }



    render() {
        return (
            <>
                <Row>
                    <h1>
                        Profile
                    </h1>
                    <h2>
                        {this.state.coach.name}
                    </h2>






                </Row>


            </>
        )
    }
}

export default Profile;