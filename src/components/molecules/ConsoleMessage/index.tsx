import {styled } from '@mui/material'
import { TypeWriter } from '../../molecules/TypeWriter'
import { theme } from '../../../theme/theme'
import React from 'react';

const GreaterThan = styled("b")({
    color: `${theme.palette.text.primary}`,
})

export const ConsoleMessage = (props: {text:string}) => {
    return (<>
    <GreaterThan>&gt;</GreaterThan>
    &nbsp;
    <TypeWriter text={props.text} delay={400}/>
    </>)
}