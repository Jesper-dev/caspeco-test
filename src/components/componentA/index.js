import React, { useState } from 'react'
import { Wrapper } from '../../StyledComponents'

const ComponentA = ({changeColorFunc, changeColorValue}) => {
    console.log(changeColorValue, 'In CompA')
    return (
        <Wrapper changeColor={changeColorValue}>
            <span className={"component_title"}> Component A </span>
            <button onClick={changeColorFunc}>Change Color A</button>
        </Wrapper>
    )

}

export default ComponentA;
