import React, { Component } from "react";
import { Link } from 'gatsby';
import ReactImageFallback from "react-image-fallback";

import loader from '../assets/loader.gif';
import mentorImage from '../assets/mentor-default.svg';

class ProfileList extends Component {
  render() {
    const { title, count, image } = this.props;

    return (
        <div className="col-sm-3 ">
            <div className="card">
                <Link
                    to={`/category/${title}`} className="card"
                >
                    <div className="text-center">
                        <ReactImageFallback
                            src={image}
                            fallbackImage={mentorImage}
                            initialImage={loader}
                            alt={this.props.title}
                            className="img-thumbnail img-fluid rounded-circle thumbnail" />
                    </div>

                    <div className="content-card">
                        <h3>{ title }</h3>
                        <p>{ count }</p>
                        {/* {techs.map((tech, i) => (
                            <div key={i} className="tags">
                            <span>{tech}</span>
                            </div>
                        ))} */}
                        {/* <div className="bottom-info">
                            {}
                            <Heart {...this.props.data} />
                        </div> */}
                    </div>
                </Link>

                {/* <div className="social-media">
                    <a
                    href="http://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FaTwitter />
                    </a>
                    <a
                    href="http://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FaGithub />
                    </a>
                    <a
                    href="http://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FaLinkedinIn />
                    </a>
                </div> */}
            </div>
        </div>
    );
  }
}

export default ProfileList;
