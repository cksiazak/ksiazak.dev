import React from 'react'
import styled from 'styled-components';

const InnerWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
`

const AppWrapper = (props) => {
    return (
        <InnerWrap>
            {props.children}
        </InnerWrap>
    )
}

export default AppWrapper
