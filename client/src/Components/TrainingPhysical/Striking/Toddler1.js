import React, { Component } from "react";

class Toddler1 extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-5">
            <div className="card mb-3 training-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={require("../../../Images/Ct-T1-catch-throw.PNG")}
                    className="card-img"
                    alt="Grabbing Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Catch and Throw</h5>
                    <p className="card-text">
                      <b>Goal:</b> Successfully coordinate visual tracking w/
                      goal directed limb reaching resulting in a successful
                      ‘catch’ of a low/mid amp rolling or bouncing ball uphill
                      <br />
                      <b>How:</b> Supported straddle sit; start with toddler
                      holding 5”/12 cm ball; have toddler release throw ball
                      into bucket (target) (overhand throw @ 14 months); catch a
                      rolled or bounced low/mid amp ball uphill; ball sizes;
                      pike position, roll 3”/8cm ball up right then left sides
                      NEW: Dynamic target (S/D)
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
                    src={require("../../../Images/Ct-T1-swing-catch.PNG")}
                    className="card-img"
                    alt="Swinging Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Swing and Catch</h5>
                    <p className="card-text">
                      <b>Goal:</b> Smoothly track and ‘catch’ mid amp swinging
                      ball motion in the vertical plane
                      <br />
                      <b>How:</b>
                      Supported stand; start with toddler holding the ball at
                      hip height; release ball to swing and catch at mid amp;
                      ball sizes NEW: Dynamic target (S/D)
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
                    src={require("../../../Images/Ct-T1-basketball-drop.PNG")}
                    className="card-img"
                    alt="Tilting Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Basketball Drop</h5>
                    <p className="card-text">
                      <b>Goal:</b> Toddler can deliberately drop balls into a
                      child’s basketball hoop; toddler can drop balls into low
                      and mid space targets in the vertical and horizontal
                      planes
                      <br />
                      <b>How:</b> Supported stand using a floor marker; 3”/8 cm
                      and 5”/10cm balls; use child’s basketball hoop and low
                      profile targets; use a small hoop and manually define
                      targets in vertical and horizontal planes; (overhand throw
                      @ 14 months) NEW: Static target (S/S)
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
                    src={require("../../../Images/Ct-T1-balloon-catch.PNG")}
                    className="card-img"
                    alt="Tracking Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Balloon Catch</h5>
                    <p className="card-text">
                      <b>Goal:</b> Smoothly track and catch a 1/3 helium filled
                      balloon dropped from slightly above and in front of
                      toddler at low amp
                      <br />
                      <b>How:</b> Toddler stands on marker and looks at balloon
                      held in front and slightly above head height; child
                      reaches arms up toward balloon; drop balloon and encourage
                      child to catch it. NEW: Dynamic Target (D/S)
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

export default Toddler1;
