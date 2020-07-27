import React, { Component } from "react";
import ProfileList from './ProfileList';
import { getCategoryImages } from '../utils/helpers';

class Profile extends Component {

    render() {
        const profileData = this.props.profile;
        return (
            <div className="main thememain-white">
                <div className="container content-main">
                <br />
                    <div className="row">
                        {/* <div className="col-md-3">
                            Add Filters
                        </div> */}
                        <div className="col-md-12">
                            <div className="row">
                                {
                                    Object.keys(profileData).map((category, index) => {
                                        return <ProfileList 
                                            key={category} 
                                            title={category} 
                                            count={profileData[category]}
                                            image={getCategoryImages[category]}
                                        /> ;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
