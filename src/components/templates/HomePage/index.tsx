import {Box, styled } from '@mui/material'
import React from 'react';

const Wrapper = styled("div")({
    height: '100%',
    width: '100%'
})

const MainContent = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    padding: '2%'
})

interface Props {
    contentGrid: JSX.Element
}

export const HomePageTemplate = (props: Props) => {
    return (<Wrapper>
        <MainContent>
            {props.contentGrid}
        </MainContent>
    </Wrapper>)
}