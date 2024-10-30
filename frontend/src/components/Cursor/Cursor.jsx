import React, { useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components";
import swordIcon from "../../assets/sword.png"; // Adjust path as needed

// Keyframes for the slicing animation
const sliceAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(20deg) scale(1.1); }
  100% { transform: rotate(0deg) scale(1); }
`;

// Keyframes for the circular rotation on hover
const hoverAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component for the sword cursor
const StyledCursorPointer = styled.div.attrs(props => ({
    style: {
        left: `${props.x}px`,
        top: `${props.y}px`,
    }
}))`
    position: fixed; /* Change to fixed for consistent positioning */
    width: 32px; /* Adjust as needed */
    height: 32px;
    background-image: url(${swordIcon});
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
    transform-origin: center;
    animation: ${props => props.hover ? hoverAnimation : (props.clicking ? sliceAnimation : 'none')} 0.5s linear; /* Adjust duration */
    transition: transform 0.2s ease;
`;

export default function CursorPointer({ x, y }) {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const handleMouseClick = () => {
            setIsClicking(true);
            setTimeout(() => setIsClicking(false), 300);
        };

        // Attaching hover events for buttons and links globally
        document.querySelectorAll("a, button, .boxs").forEach(element => {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });

        document.addEventListener("click", handleMouseClick);

        return () => {
            document.querySelectorAll("a, button, .boxs").forEach(element => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            });
            document.removeEventListener("click", handleMouseClick);
        };
    }, []);

    return <StyledCursorPointer x={x} y={y} hover={isHovering} clicking={isClicking} />;
}
