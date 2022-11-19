import React from "react";

function DriverCard(props) {
    const { name, rating, img, car,} = props;

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

    return(
        <div className='driverPhoto'>
            <img src={img} alt="driverCard"/>
             <div className='drive'>
                 <p>{name}</p>
                 <p>{Stars(rating)}</p>
                 <p>
                 {car.model} - {car.licensePlate}
                 </p>
            </div>
        </div>
    );
}

export default DriverCard;