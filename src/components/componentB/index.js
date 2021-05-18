import React, { useState } from 'react'
import { Wrapper } from '../../StyledComponents'


const ComponentB = ({changeColorFunc, changeColorValue}) => {
    return (
        <Wrapper changeColor={changeColorValue}>
            <span className={"component_title"}> Component B </span>
            <button onClick={changeColorFunc}>Change Color B</button>
        </Wrapper>
    )

}

export default ComponentB;
