import { useState } from 'react';

function LikeButton () {
    const [count, setCount] = useState(0);

    return(
        <button style={{padding: '5px', margin: '10px'}}
        onClick= {() => setCount(count +1)}>
            {count} Likes
        </button>
    );
}

export default LikeButton;