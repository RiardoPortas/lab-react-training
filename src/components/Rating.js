import React from "react";

function Rating (props) {
    const {children} = props;
    function Stars(rating) {
        switch (Math.round(rating)) {
            case 0:
                return '☆☆☆☆☆'
            case 1:
                return '★☆☆☆☆'
            case 2:
                return '★★☆☆☆'
            case 3:
                return '★★★☆☆'
            case 4:
                return '★★★★☆'
            case 5:
                return '★★★★★'
                default:
                    return;
        }
    }

    return (
        <div className='rating'>
            <p>{Stars(children)}</p>
        </div>
    );

}

export default Rating;