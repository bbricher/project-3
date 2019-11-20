import React, { Component } from "react";

class Profile extends Component {
    state = {
        name: "",
        years: "",
        background: "",
        class_certification: ""
    }

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = () => {
        
    }



    render() {
        return (
            <>
                {/* <Row> */}
                    <h1>
                        Profile
                    </h1>






                {/* </Row> */}


            </>
        )
    }
}

export default Profile;