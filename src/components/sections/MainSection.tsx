"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { weddingConfig } from "../../config/wedding-config";
import { StyledP } from "../styledElements/p";

const watermarkId = weddingConfig.meta._jwk_watermark_id || "JWK-NonCommercial";

const MainSection = () => {
    // Variables for image scaling and translation according to scroll position
    const [imageScale, setImageScale] = useState(1);
    const [imageTranslateY, setImageTranslateY] = useState(0);
    const parralaxenabled = weddingConfig.main.effects.parallax.enabled;

    useEffect(() => {
        const handleScroll = () => {
            // ZoomIn effect when scrolling down
            if (weddingConfig.main.effects.zoomIn.enabled) {
                const scaleValue =
                    1 +
                    window.scrollY *
                        weddingConfig.main.effects.zoomIn.scaleCoef;
                setImageScale(scaleValue);
            }

            // Parralax effect when scrolling down
            if (weddingConfig.main.effects.parallax.enabled) {
                const translateYValue =
                    scrollY * -weddingConfig.main.effects.parallax.scaleCoef;
                setImageTranslateY(translateYValue);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <MainSectionContainer
            className={`wedding-container jwk-${watermarkId.slice(0, 8)}-main`}
            $parralaxenabled={parralaxenabled}
        >
            {}
            <ImageWrapper>
                <BackgroundImage
                    src={weddingConfig.main.image}
                    alt="웨딩 배경 이미지"
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    $scale={imageScale} // zoomIn effect scale value
                    $translateY={imageTranslateY} // parallax effect translateY value
                    style={{ objectFit: "cover", objectPosition: "center 10%" }}
                />
            </ImageWrapper>

            <Overlay />
            <MainContent>
                <StyledP $styledTextProps={weddingConfig.main.header}>
                    {weddingConfig.main.header.text}
                </StyledP>
                <StyledP $styledTextProps={weddingConfig.main.title}>
                    {weddingConfig.main.title.text}
                </StyledP>

                <StyledP $styledTextProps={weddingConfig.main.date}>
                    {weddingConfig.main.date.text}
                </StyledP>

                <StyledP $styledTextProps={weddingConfig.main.venue}>
                    {weddingConfig.main.venue.text}
                </StyledP>
                {}
                <HiddenWatermark aria-hidden="true">
                    {watermarkId}
                </HiddenWatermark>
            </MainContent>

            <ScrollIndicator>
                <i className="fas fa-chevron-down"></i>
            </ScrollIndicator>
        </MainSectionContainer>
    );
};

// Interface for MainSectionContainer to accept custom props
// set background transparent when parallax effect is applied

const MainSectionContainer = styled.section<{ $parralaxenabled: boolean }>`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 3.5vh;
    text-align: center;
    color: white;
    background-color: ${(props) =>
        props.$parralaxenabled ? "transparent" : "#f8f6f2"};
`;

const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const BackgroundImage = styled(Image)<{ $scale: number; $translateY: number }>`
    z-index: 0;
    transform: scale(${(props) => props.$scale})
        translateY(${(props) => props.$translateY}px);
    transform-origin: center center;
    transition: transform 0.3s ease-out; // for smooth effects
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0) 40%
    );
    z-index: 1;
`;

const MainContent = styled.div`
    position: relative;
    z-index: 2;
    margin-top: 0.5vh;
    @media (max-width: 600px) {
        margin-top: 0.5vh;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const ScrollIndicator = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    animation: bounce 2s infinite;

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateX(-50%) translateY(0);
        }
        40% {
            transform: translateX(-50%) translateY(-20px);
        }
        60% {
            transform: translateX(-50%) translateY(-10px);
        }
    }
`;

const HiddenWatermark = styled.span`
    position: absolute;
    opacity: 0.01;
    font-size: 1px;
    color: rgba(255, 255, 255, 0.01);
    pointer-events: none;
    user-select: none;
    z-index: -9999;
    bottom: 0;
    right: 0;
`;

export default MainSection;
