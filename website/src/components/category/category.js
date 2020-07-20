import React from 'react';
import styles from './category.module.css';
import { Link } from 'gatsby';
import ReactImageFallback from "react-image-fallback";

import loader from '../../assets/loader.gif';
import profileImage from '../../assets/mentor-default.svg';

const Category = ({data}) => {
  const categoryUrl = data.fields.slug;
  const { title, categories, githubUsername, ...otherData } = data.frontmatter;
  const gitUrl = `http://github.com/${githubUsername}`;

  return (
    <div className="col-sm-3 ">
      <div className="card">
          <Link
              to={`/category/${categoryUrl}`} className="card"
          >
              <div className="text-center">
                  <ReactImageFallback
                      src={profileImage}
                      fallbackImage={profileImage}
                      initialImage={loader}
                      alt={title}
                      className="img-thumbnail img-fluid rounded-circle thumbnail" />
              </div>

              <div className="content-card">
                  <h3>{ title }</h3>
                  {categories.map((category, i) => (
                      <div key={i} className="tags">
                        <span>{category}</span>
                      </div>
                  ))}
              </div>
          </Link>

          <div className="social-media">
              <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                >
                { githubUsername ? githubUsername : 'deafult' }
              </a>
          </div>
      </div>
    </div>
  )
}

export default Category;
