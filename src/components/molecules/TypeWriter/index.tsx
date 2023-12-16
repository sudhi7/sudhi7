import { Cursor } from "../../organisms/Cursor";
import { Text } from "../../organisms/Text";
import React from 'react';

export const TypeWriter = (props: {text:string, delay: number}) => {
    return (<>
        <Text text={props.text} delay={props.delay}/>
        <Cursor delay={props.delay}/>
    </>);
};