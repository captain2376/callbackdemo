import React from 'react'
import { memo } from 'react'

const Title = () => {
    console.log('Rendering Title');
    return (
        <div>
            useCallBack Hook
        </div>
    )
}
//export default React.demo(Title)
export default React.memo(Title)
