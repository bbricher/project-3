import React, { Component } from "react";
import Collapsible from 'react-collapsible';
import Babies1 from "./Babies1";
import Babies2 from "./Babies2";
import Toddler1 from "./Toddler1";
import Toddler2 from "./Toddler2";
import Toddler3 from "./Toddler3";





class Striking extends Component {
    render() {
        return(
            <>
                <Collapsible trigger="Babies 1">
                    <Babies1 />
                </Collapsible>
                <Collapsible trigger="Babies 2">
                    <Babies2 />
                </Collapsible>
                <Collapsible trigger="Toddler 1">
                    <Toddler1 />
                </Collapsible>
                <Collapsible trigger="Toddler 2">
                    <Toddler2 />
                </Collapsible>
                <Collapsible trigger="Toddler 3">
                    <Toddler3 />
                </Collapsible>
            </>
        )
    }
}

export default Striking;