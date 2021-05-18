import React, { Component } from 'react'
import { Wrapper } from '../../indexStyles'

export default class ComponentA extends Component {
    render() {
        return (
            <Wrapper>
                <span className={"component_title"}> Component A </span>
            </Wrapper>
        )
    }
}
