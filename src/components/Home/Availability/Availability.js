import React from 'react';
import './Availability.css';

const Availability = props => {
    return (
        <section className="container about-section">
            <div className="row">
                <div className="col">
                    <h2 className="text-center text-primary">Seeking Employment</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                    <p id="contact-me-p" className="text-center">
                        I am actively seeking for a full time position in either frontend development or fullstack development. 
                        I think, with my skill set,  I am qualify for taking the role as a junior to mid-level software engineer role.  
                    </p>
                </div>
            </div>
            {/* <div className="row">
                <div className="col  d-flex justify-content-center">
                    <a href='/contact' id='message-me-btn' className="btn btn-primary">
                        <span className="ion-ios-email"></span> Message Me
                    </a>
                </div>
            </div> */}
        </section>
    )
}

export default Availability;
