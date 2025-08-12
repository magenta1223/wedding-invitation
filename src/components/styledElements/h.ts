import styled from "styled-components";

const SectionTitle = styled.h2`
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1.5rem;

    &::after {
        content: "";
        position: absolute;
        bottom: -16px;
        left: 50%;
        transform: translateX(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--secondary-color);
    }
`;
