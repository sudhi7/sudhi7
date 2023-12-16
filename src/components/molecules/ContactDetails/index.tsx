import React from 'react';
import {styled } from '@mui/material'

const SocialSites = styled("ul")({
    listStyle: 'none',
    padding: '0%',
    display: 'flex',
    justifyContent: 'space-evenly',
})

const StyledImg = styled("img")({
    height: '15px',
    width: '15px'
})



export const ContactDetails = () => {
    return <>
    <p><b><i>sudhikshamalla28@gmail.com</i></b></p>
    <br/>
    <SocialSites>
    <li><a href="https://www.linkedin.com/in/sudhi7/"> <StyledImg src="https://cdn-icons-png.flaticon.com/512/124/124011.png"/> </a></li>
    <li><a href="https://www.instagram.com/_sudhi7_/"> <StyledImg src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"/> </a></li>
    </SocialSites>

    </>
}