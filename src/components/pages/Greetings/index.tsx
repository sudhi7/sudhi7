import {styled } from '@mui/material'
import React from 'react';
import { HomePageTemplate } from "../../templates/HomePage"
import { theme } from '../../../theme/theme'
import { ConsoleMessage } from '../../molecules/ConsoleMessage'

const Wrapper = styled("h2")({
    color: `${theme.palette.elevation.color1}`
})

export const Greetings = () => {
    return <HomePageTemplate contentGrid={<Wrapper>
       <ConsoleMessage text="HelloWorld!!"/>
    </Wrapper>}/>
}