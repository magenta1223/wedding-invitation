import { styled } from "styled-components";

const ShuttleCallButton = styled.a`
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    text-decoration: none;
    margin-left: 0.5rem;
    position: relative;
    overflow: hidden;

    &:active {
        transform: translateY(1px);
    }

    &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, 0.5);
        opacity: 0;
        border-radius: 100%;
        transform: scale(1, 1) translate(-50%);
        transform-origin: 50% 50%;
    }

    &:active:after {
        animation: ripple 0.6s ease-out;
    }
`;
