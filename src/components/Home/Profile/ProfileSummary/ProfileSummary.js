import React from 'react';

const ProfileSummary = props => {
    return (
        <div className="row justify-content-center summary-row">
            <div className="col-lg-6">
                <h2 className="text-center text-primary">Welcome!!</h2>
                <p id="about-me-p" className="text-center">
                    My name's Eddie. <br/>
                    I'm a software developer with the skills and knowledge necessary to create user-friendly, interactive, web applications. I'm a fast learner, diligent worker and truly dedicated to my craft. I am trying to put myself into a place where I am a little fish in a big pond. Currently, I live in the SF Bay Area.
                </p>
            </div>
        </div>
    );
}

export default ProfileSummary;
