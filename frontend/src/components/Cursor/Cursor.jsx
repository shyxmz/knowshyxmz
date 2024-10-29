import React from 'react';
import styled from "styled-components";

const StyledCursorPointer = styled.div.attrs(props => ({
    style: {
        left: `${props.x}px`,
        top: `${props.y}px`,
    }
}))`
    background-color: #2f2f2f; /* Darker gray color */
    position: absolute;
    border-radius: 100%;
    mix-blend-mode: difference;
    width: 32px;
    height: 32px;
    transform: translate(-50%, -50%);
`;

export default function CursorPointer({ x, y }) {
    return <StyledCursorPointer x={x} y={y} />;
}
