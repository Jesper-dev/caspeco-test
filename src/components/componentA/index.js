import React, { useState } from 'react'
import { Wrapper } from '../../StyledComponents'

const ComponentA = ({changeColorFunc, changeColorValue, text, setText}) => {
    return (
        <Wrapper changeColor={changeColorValue}>
            <span className={"component_title"}> Component A </span>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={changeColorFunc}>Change Color A</button>
        </Wrapper>
    )

}

export default ComponentA;
