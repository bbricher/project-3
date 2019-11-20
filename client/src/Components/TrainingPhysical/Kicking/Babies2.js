import React, { Component } from "react";

class Babies2 extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-5">
            <div className="card mb-3 training-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={require("../../../Images/Ct-B2-track-trap.PNG")}
                    className="card-img"
                    alt="Grabbing Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Track and Grab</h5>
                    <p className="card-text">
                      <b>Goal:</b> Successfully coordinate visual tracking w/
                      goal directed limb reaching resulting in a successful
                      ‘grab’ of an uphill rolling ball; develop the ability to
                      purposefully release the ball (deliberate release @ 10
                      months)
                      <br />
                      <b>How:</b> Supported straddle sit; start with baby
                      holding 5” @ 12 cm ball; pat, press, roll, release ball
                      (infant form of ‘throwing’) repeat with other size/weight
                      balls; low amp; pike sit, right/left hand with 3”/8cm ball
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card mb-3 training-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={require("../../../Images/Ct-B2-swing-trap.PNG")}
                    className="card-img"
                    alt="Swinging Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Swing and Catch</h5>
                    <p className="card-text">
                      <b>Goal:</b> Smoothly track and ‘grab’ low amp swinging
                      ball motion in the vertical plane; Deliberately release
                      the ball (10 months)
                      <br />
                      <b>How:</b>
                      Supported sit; start with baby holding the ball; low amp;
                      ball sizes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="card mb-3 training-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={require("../../../Images/Ct-B2-tilt-trap.PNG")}
                    className="card-img"
                    alt="Tilting Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tilt and Grab</h5>
                    <p className="card-text">
                      <b>Goal:</b> Baby can deliberately grasp balls off cone
                      with right and left hands in the horizontal and vertical
                      planes. Baby can release balls into a bucket with help
                      (deliberate release @ 10 months); exercises visual/spatial
                      awareness by performing activity in different spatial
                      planes
                      <br />
                      <b>How:</b> Football hold and supported vertical stand;
                      right hand and left hand; ball sizes/weights; (5”/10cm
                      balls look for baby to use 2 hands)
                      <br />
                      <b>Why:</b> Exercise and coordinate visual/spatial
                      processing with motor planning in getting balls in
                      different spatial planes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card mb-3 training-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={require("../../../Images/Ct-B2-track-time.PNG")}
                    className="card-img"
                    alt="Tracking Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tracking Time</h5>
                    <p className="card-text">
                      <b>Goal:</b> Smoothly track low amp rolling balls linearly and angularly in the horizontal  plane; track 1/3 helium filled balloon dropping in the vertical plane and tethered helium balloons being lightly bounced 
                      <br />
                      <b>How:</b> Prone and supported sit; ball sizes; low amp; incline mat tracking from top; side and bottom; 1/3 helium balloon for vertical tracking downward and tethered helium balloons for bouncing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Babies2;
