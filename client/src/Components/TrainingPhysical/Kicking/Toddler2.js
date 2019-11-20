import React, { Component } from "react";

class Toddler2 extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-5">
            <div className="card mb-3 training-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={require("../../../Images/Ct-T2-catch-throw.PNG")}
                    className="card-img"
                    alt="Grabbing Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Catch and Throw</h5>
                    <p className="card-text">
                      <b>Goal:</b> Successfully coordinate motion detection
                      tracking w/ goal directed limb reaching resulting in a
                      successful ‘catch’ of a mid/high amp rolling, bouncing or
                      free thrown light weight ball; successfully throw balls
                      into a target
                      <br />
                      <b>How:</b> Stand behind incline; start with toddler
                      holding a 7”/18 cm ball; have toddler throw ball into the
                      bucket (target); catch same ball bounced (later free
                      thrown) at mid amp. Next, supported stand on top of step
                      and free throw high amp; ball sizes; throw 3”/8cm balls
                      into target with right and left hands NEW: Dynamic target
                      (S/D)
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
                    src={require("../../../Images/Ct-T2-swing-catch.PNG")}
                    className="card-img"
                    alt="Swinging Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Swing and Catch</h5>
                    <p className="card-text">
                      <b>Goal:</b> Smoothly track and ‘catch’ mid/high amp
                      swinging ball motion in the vertical plane
                      <br />
                      <b>How:</b>
                      Supported stand; start with toddler holding the ball at
                      chest height; release ball to swing and catch at high amp;
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
                    src={require("../../../Images/Ct-T2-basketball-target.PNG")}
                    className="card-img"
                    alt="Tilting Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Basketball/Target Station</h5>
                    <p className="card-text">
                      <b>Goal:</b> Toddler can deliberately throw Balls from a
                      distance into a child’s basketball hoop; toddler can throw
                      5”/10 cm balls into low and mid space targets in the
                      vertical and horizontal planes from different spatial
                      directions (in front; to right and left sides; From above
                      and below); attain enhanced targeting ability employing
                      ‘speed throws’; Child can run up to targets from one floor
                      marker to another and throw balls through target
                      <br />
                      <b>How:</b> Independently stand on a floor Marker 2’/60cm
                      in front of target; use 5”/10cm and 3”/8 cm balls;
                      mid/high amp; use child’s basketball hoop and low profile
                      baskets; use a small hoop and manually define targets in
                      vertical and horizontal planes; increase distance,
                      Direction and level to target NEW: Static target/Static
                      child (S/S); Dynamic Child/Static Target (D/S)
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
                    src={require("../../../Images/Ct-T2-balloon-free.PNG")}
                    className="card-img"
                    alt="Tracking Image"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Free Balloon</h5>
                    <p className="card-text">
                      <b>Goal:</b> Smoothly track and catch a 1/3 helium filled
                      balloon dropped from slightly above and in front of
                      toddler at low amp
                      <br />
                      <b>How:</b> Toddler stands on marker and looks at balloon
                      held in front and slightly above head height; child
                      reaches arms up toward balloon; drop balloon and encourage
                      child to catch it. NEW: Dynamic Child/ Dynamic Target
                      (D/D)
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

export default Toddler2;
