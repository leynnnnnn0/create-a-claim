import "./CreateClaim.css";
import Nav from "../../components/Navigation/Nav";
import { useState } from "react";

const CreateClaim = () => {
  return (
    <div className="create-claim">
      <div className="nav-section">
        <Nav />
      </div>
      <div className="claim-process">
        <form className="claim-form">
          <div className="first-row">
            <div className="time-and-date input-box">
              <div>
                <input type="time" />
                <p>Time of the incident</p>
              </div>
              <div>
                <input type="date" />
                <p>Date of the incident</p>
              </div>
            </div>
            <div className="other-party-info">
              <div className="yes-or-no">
                <p>Do you have the information of the other party?</p>
                <div>
                  <input type="radio" name="yes" id="yes" />
                  <label htmlFor="yes">Yes</label>

                  <input type="radio" name="no" id="no" />
                  <label htmlFor="no">No</label>
                </div>
                <div className="name-and-rego input-box">
                  <input type="text" />
                  <p>Name</p>
                  <input type="text" />
                  <p>Address</p>
                  <input type="text" />
                  <p>Rego</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-row input-box">
            <div>
              <textarea name="description" id="description"></textarea>
              <label htmlFor="description">What happened</label>
                      </div>
                      <div>
                          <input type="text" />
                          <p>Address</p>
                      </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClaim;
