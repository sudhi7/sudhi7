import {Avatar, styled } from '@mui/material';
// import {displayPicture} from './displayPicture.png';
import React from 'react';

const Wrapper = styled(Avatar)({
    boxShadow: '#9e9e9e 0px 14px 28px, #9e9e9e 0px 10px 10px',
})

export const DisplayPicture = () => {
    return <Wrapper
    alt="Malla Sai Sudhiksha"
    src={require('./../../../images/displayPicture.png')}
    sx={{ width: 150, height: 150 }}
  />
}