import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating(props) {
    const { rating } = props;

    const getRating = (rating) => {
        const stars = [];
        let i = 0;
        while(i<5) {
            if(i >= rating) {
                stars.push(
                    <FontAwesomeIcon icon={faStar} style={{color: "#DBDBDB"}}/>
                )
            } else {
                stars.push(
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD700"}}/>
                )
            }
            i++;
        }
        return stars;
    }

    return (
        <div className="d-flex justify-content-center">
            {getRating(rating).map((item, index) => {
                return (
                    <span key={index}>
                        {item}
                    </span>
                )
            })}
        </div>
    )
}

export default Rating;
