import React, { Component } from "react";

class ProfileForm extends Component {
    render() {
        return(
            <>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Preffered Coach Name</label>
                        <input type="email" className="form-control" id="CoachName" placeholder="Coach Patty"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Brief Coach Introduction (in third person)</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Coach Patty began her Child Development career here at PlayWisely in 2010. She is from a big family and loves kids, she doesn't hesitate to go out of her way to help each child she meets! Her specialty is with rambunctious kiddos and gentle babies!" rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Favorite Age to Coach</label>
                        <select multiple class="form-control" id="exampleFormControlSelect2">
                            <option>0-4 Months</option>
                            <option>4-8 Months</option>
                            <option>8-12 Months</option>
                            <option>12-24 Months</option>
                            <option>24-32 Months</option>
                            <option>3-5 Years</option>
                        </select>
                    </div>
                </form>
            </>
        )
    }
}

export default ProfileForm;