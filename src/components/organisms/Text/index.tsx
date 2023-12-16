import { useEffect, useState } from "react";
import React from 'react';

const initialText: string[] = [];

export const Text = (props: {text:string, delay: number}) => {
    const [currentText, setCurrentText] = useState(initialText);

    useEffect(() => {
        let l = currentText.length
        if (l < props.text.length) {
            setTimeout(() => {
                setCurrentText((prevText) => [...prevText, props.text.charAt(l)]);
            }, props.delay);
        }
    });

    return <>
        {currentText.map((letter) => (
            <>{letter}</>
        ))}
    </>;
};