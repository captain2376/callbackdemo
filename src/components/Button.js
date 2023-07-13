import React, { Children } from 'react'
import { memo } from 'react'

const Button=({handleClick,children}) => {
    console.log('rendering children-',children);
    return (
        <div>
            <button onClick={handleClick}>
                {children}
            </button>
        </div>
    );
};

export default React.memo(Button)
