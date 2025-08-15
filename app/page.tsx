"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import MainSection from "../src/components/sections/MainSection";
import { weddingConfig } from "../src/config/wedding-config";
import { StyledP } from "@/src/components/styledElements/p";
import { styled } from "styled-components";

const watermarkId = weddingConfig.meta._jwk_watermark_id || "JWK-NonCommercial";

// 동적 임포트로 코드 분할 및 지연 로딩 적용
const DateSection = dynamic(
    () => import("../src/components/sections/DateSection"),
    {
        loading: () => (
            <div style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
                로딩 중...
            </div>
        ),
    }
);

// 카카오맵 API는 클라이언트 사이드에서만 로드되어야 함
const VenueSection = dynamic(
    () => import("../src/components/sections/VenueSection"),
    {
        ssr: false,
        loading: () => (
            <div style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
                로딩 중...
            </div>
        ),
    }
);

const GallerySection = dynamic(
    () => import("../src/components/sections/GallerySection"),
    {
        loading: () => (
            <div style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
                로딩 중...
            </div>
        ),
    }
);

const InvitationSection = dynamic(
    () => import("../src/components/sections/InvitationSection")
);
const RsvpSection = dynamic(
    () => import("../src/components/sections/RsvpSection")
);
const AccountSection = dynamic(
    () => import("../src/components/sections/AccountSection")
);
const Footer = dynamic(() => import("../src/components/sections/Footer"));

export default function Home() {
    // 갤러리 위치 설정
    const galleryPosition = weddingConfig.gallery.position || "middle";
    const showRsvp = weddingConfig.rsvp?.enabled ?? true;

    // 실제 렌더링되는 섹션들의 순서를 계산하여 색상 인덱스 결정
    const sectionColorMap = useMemo(() => {
        const sections = [];

        // MainSection은 색상 계산에서 제외 (항상 기본 스타일)
        sections.push("invitation"); // InvitationSection
        sections.push("date"); // DateSection
        sections.push("venue"); // VenueSection

        if (galleryPosition === "middle") {
            sections.push("gallery-middle"); // GallerySection (middle)
        }

        if (showRsvp) {
            sections.push("rsvp"); // RsvpSection
        }

        sections.push("account"); // AccountSection

        if (galleryPosition === "bottom") {
            sections.push("gallery-bottom"); // GallerySection (bottom)
        }

        // 각 섹션에 색상 인덱스 할당 (0부터 시작하여 번갈아가며)
        const colorMap: Record<string, "white" | "beige"> = {};
        sections.forEach((section, index) => {
            colorMap[section] = index % 2 === 0 ? "white" : "beige";
        });

        return colorMap;
    }, [galleryPosition, showRsvp]);

    const [scrollY, setScrollY] = useState(0);
    const [headerScale, setHeaderScale] = useState(1);
    const [titleScale, setTitleScale] = useState(1);

    const headerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLDivElement>(null);
    const venueRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const y = window.scrollY;
                    const progress = Math.min(y / 150, 1); // 0 ~ 150px 스크롤 구간
                    setScrollY(y);

                    // Header/Title scale
                    setHeaderScale(Math.max(1 - progress * 0.3, 0.5)); // 최대 50% 축소
                    setTitleScale(Math.max(1 - progress * 0.5, 0.4));

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const headerH = headerRef.current?.offsetHeight || 0;
        const titleH = titleRef.current?.offsetHeight || 0;
        const dateVisible = scrollY < 150;
        const dateH = dateVisible ? dateRef.current?.offsetHeight || 0 : 0;
        const venueVisible = scrollY < 150;
        const venueH = venueVisible ? venueRef.current?.offsetHeight || 0 : 0;

        setHeaderHeight(headerH + titleH + dateH + venueH);
    }, [scrollY]);

    const progress = Math.min(scrollY / 150, 1);

    return (
        <main>
            <MainContent>
                <HeaderWrapper progress={progress} height={headerHeight}>
                    <StyledPWithScale
                        $styledTextProps={weddingConfig.main.header}
                        scale={headerScale}
                        ref={headerRef}
                    >
                        {weddingConfig.main.header.text}
                    </StyledPWithScale>
                    <StyledPWithScale
                        $styledTextProps={weddingConfig.main.title}
                        scale={titleScale}
                        ref={titleRef}
                    >
                        {weddingConfig.main.title.text}
                    </StyledPWithScale>

                    {progress < 1 && (
                        <AnimatedText
                            style={{
                                transform: `translateY(-${progress * 30}px)`,
                                opacity: 1 - Math.max(5 * progress - 4, 0),
                            }}
                            ref={dateRef}
                        >
                            <StyledP $styledTextProps={weddingConfig.main.date}>
                                {weddingConfig.main.date.text}
                            </StyledP>
                        </AnimatedText>
                    )}

                    {progress < 1 && (
                        <AnimatedText
                            style={{
                                transform: `translateY(-${progress * 30}px)`,
                                opacity: 1 - progress,
                            }}
                            ref={venueRef}
                        >
                            <StyledP
                                $styledTextProps={weddingConfig.main.venue}
                            >
                                {weddingConfig.main.venue.text}
                            </StyledP>
                        </AnimatedText>
                    )}
                </HeaderWrapper>

                <HiddenWatermark aria-hidden="true">
                    {watermarkId}
                </HiddenWatermark>
            </MainContent>

            {weddingConfig.componentOrder.map((component) => {
                if (!component.show) return;
                switch (component.name) {
                    case "main":
                        return <MainSection key="main" />;
                    case "invitation":
                        return (
                            <InvitationSection
                                key="invitation"
                                bgColor={sectionColorMap["invitation"]}
                            />
                        );
                    case "date":
                        return (
                            <DateSection
                                key="date"
                                bgColor={sectionColorMap["date"]}
                            />
                        );
                    case "venue":
                        return (
                            <VenueSection
                                key="venue"
                                bgColor={sectionColorMap["venue"]}
                            />
                        );
                    case "gallery":
                        return (
                            <GallerySection
                                key="gallery"
                                bgColor={sectionColorMap["gallery-middle"]}
                            />
                        );
                    case "rsvp":
                        return (
                            <RsvpSection
                                key="rsvp"
                                bgColor={sectionColorMap["rsvp"]}
                            />
                        );
                    case "account":
                        return (
                            <AccountSection
                                key="account"
                                bgColor={sectionColorMap["account"]}
                            />
                        );
                    default:
                        return null;
                }
            })}
            <Footer />
        </main>
    );
}

const MainContent = styled.div`
    position: fixed;
    top: 0;
    z-index: 2;
    text-align: center; /* 텍스트 중앙 정렬 */
    width: 100%;

    margin-top: 0.5vh;
    @media (max-width: 600px) {
        margin-top: 0.5vh;
        padding-left: 1rem;
        padding-right: 1rem;
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

// const AnimatedText = styled.div<{ $progress: number }>`
//     /* progress가 1 미만이면 visible */
//     ${({ $progress }) => {
//         const visible = $progress < 1;
//         return `
//             transform: ${visible ? "translateY(0)" : "translateY(-30px)"};
//             opacity: ${visible ? 1 : 0};
//             max-height: ${visible ? "" : "0"};
//         `;
//     }}
//     overflow: hidden;
// `;

const AnimatedText = styled.div`
    transition: transform 0.3s ease, opacity 0.3s ease;
`;

const StyledPWithScale = styled(StyledP)<{ scale: number }>`
    transform: scale(${({ scale }) => scale});
    transform-origin: top center;
    transition: transform 0.2s ease-out;
`;

const HeaderWrapper = styled.div<{ progress: number; height: number }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; /* 화면 전체 너비 */
    height: ${({ height }) => height}px;

    padding: 0 2rem; /* 위/아래는 조금 padding, 원하면 제거 가능 */
    background-color: ${({ progress }) =>
        progress >= 1 ? "rgba(0, 0, 0, 0.1)" : "transparent"};
    transition: background-color 0.6s ease;
    align-items: center;
    z-index: 1; /* MainContent 텍스트 위에 배치 */
`;
