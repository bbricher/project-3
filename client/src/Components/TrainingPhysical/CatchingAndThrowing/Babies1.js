import React, { Component } from "react";

class Babies1 extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-5">
            <div className="card mb-3 training-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={require("../../../Images/Ct-B1-track-trap.PNG")}
                    className="card-img"
                    alt="Trapping Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Track and Trap</h5>
                    <p className="card-text">
                      <b>Goal:</b> Successfully coordinate visual tracking w/
                      goal directed limb reaching resulting in a successful
                      ‘trap’ of an uphill rolling ball (5 months); develop
                      purposeful release of ball (infant form of ‘throwing’ – 6
                      months)
                      <br />
                      <b>How:</b> Football hold; start with baby holding 5”/10
                      cm ball; pat, press, roll to release ball; repeat with
                      other size/weight balls; low amp
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
                    src={require("../../../Images/Ct-B1-swing-trap.PNG")}
                    className="card-img"
                    alt="Swinging Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Swing and Trap</h5>
                    <p className="card-text">
                      <b>Goal:</b> Smoothly track and ‘trap’ low amp swinging
                      ball motion linearly and angularly in horizontal and
                      vertical planes
                      <br />
                      <b>How:</b>
                      Supine and supported sit; ball sizes; low amp
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
                    src={require("../../../Images/Ct-B1-tilt-trap.PNG")}
                    className="card-img"
                    alt="Tilting Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tilt and Trap</h5>
                    <p className="card-text">
                      <b>Goal:</b> Baby can deliberately grasp balls off cone
                      with right and left hands in the horizontal and vertical
                      planes. Baby can release balls into a bucket with help;
                      exercises visual/spatial awareness by performing activity
                      in different spatial planes
                      <br />
                      <b>How:</b> Football hold and supported vertical stand;
                      right hand and left hand; ball sizes/weights; (5”/10cm
                      balls baby will generally use 2 hands)
                      <br />
                      <b>Why:</b> Develop, exercise and coordinate
                      visual/spatial processing skills with motor planning
                      ability (get balls successfully in different spatial
                      planes using correct right or left arm/hand reach)
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
                    src={require("../../../Images/Ct-B1-track-time.PNG")}
                    className="card-img"
                    alt="Tracking Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tracking Time</h5>
                    <p className="card-text">
                      <b>Goal:</b> Smoothly track low amp rolling balls linearly
                      and angularly in the horizontal plane (on floor and
                      down/up incline mat; track lightly tapped tethered helium
                      balloons
                      <br />
                      <b>How:</b> Prone and supported sit; ball sizes (tapped
                      tethered helium balloons for vertical plane tracking);
                      incline mat tracking from top; side and bottom
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

export default Babies1;
