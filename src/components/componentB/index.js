import React, { useState } from 'react'
import { Wrapper, Text } from '../../StyledComponents'


const ComponentB = ({changeColorFunc, changeColorValue, text}) => {
    return (
        <Wrapper changeColor={changeColorValue}>
            <span className={"component_title"}> Component B </span>
            <Text>{text}</Text>
            <button onClick={changeColorFunc}>Change Color B</button>
        </Wrapper>
    )

}

export default ComponentB;
