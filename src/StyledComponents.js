import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
    width: 300px;
    height: 300px;
    background-color: ${(props) => props.changeColor ? 'lightpink' : 'aquamarine'};
`

export const Text = styled.p`
    margin: 0%;
    font-size: 0.8rem;
`