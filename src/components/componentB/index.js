import React, { Component } from 'react'
import { Wrapper } from '../../StyledComponents'

export default class ComponentB extends Component {
    render() {
        return (
            <Wrapper>
                <span className={"component_title"}> Component B </span>
            </Wrapper>
        )
    }
}
