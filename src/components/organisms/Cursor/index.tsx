import { styled } from '@mui/material/styles'
import { theme } from '../../../theme/theme'
import { useEffect, useState } from "react";
import React from 'react';

const Span = styled('span')(
    (props: { isVisible: boolean }) => ({
        color: props.isVisible === true
          ? `${theme.palette.text.primary}`
          : `${theme.palette.text.secondary}`,
        fontWeight: 'bold',
    })
)

export const Cursor = (props: {delay: number}) => {
    const [isVisible, blink] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            blink((isVisible) => !isVisible);
        }, props.delay);
    });

    
    return <Span isVisible={isVisible}>_</Span>
};