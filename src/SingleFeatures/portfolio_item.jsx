import React from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioItem(props) {
    const {img, title, url, tag } = props;
    return (
            <div className="single_project cat1 cat5">
                <div className="grid_item">
                    <div className="deneb_img">
                        { url ? 
                        <div> <a href={url}></a>
                            <img
                                src={img}
                                className="img-fluid"
                                alt={title}
                            />
                         </div>
                        :
                        <img
                            src={img}
                            className="img-fluid"
                            alt={title}
                        />
                       }
                        
                    </div>
                    <div className="deneb_info">
                        {url ? 
                        <h4><a href={url}>{title}</a></h4>
                        : <h4>{title}</h4> }
                        <p>{tag}</p>
                    </div>
                </div>
            </div>
    )
}
