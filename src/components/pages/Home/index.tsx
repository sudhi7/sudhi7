import {Grid, Stack, styled } from '@mui/material'
import React from 'react';
import { HomePageTemplate } from "../../templates/HomePage"
import { DisplayPicture } from '../../atoms/DisplayPicture'
import { ContactDetails } from '../../molecules/ContactDetails'

const Wrapper = styled(Grid)({
})

const DesignationStack = styled(Stack)({
})

export const Home = () => {
    return <HomePageTemplate contentGrid={<Wrapper>
        <DisplayPicture />
        <ContactDetails />
    </Wrapper>}/>
}