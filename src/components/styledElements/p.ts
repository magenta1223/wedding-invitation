import { FontConfig, StyledTextProps } from "@/src/types/wedding";
import { styled } from "styled-components";

const WeddingDate = styled.p<{ $fontConfig: FontConfig }>`
    font-family: ${(prop) => prop.$fontConfig.fontFamily}, "Times New Roman",
        serif;
    font-style: ${(prop) => prop.$fontConfig.fontStyle};
    font-size: ${(prop) => prop.$fontConfig.fontSize}rem;
    min-height: ${(prop) => prop.$fontConfig.fontSize};
    color: ${(prop) => prop.$fontConfig.color};
    margin-top: 2rem;
`;

export const StyledP = styled.p<{
    $styledTextProps: StyledTextProps;
}>`
    // font configs
    font-family: ${(prop) => prop.$styledTextProps.fontConfig.fontFamily};
    font-style: ${(prop) => prop.$styledTextProps.fontConfig.fontStyle};
    font-size: ${(prop) => prop.$styledTextProps.fontConfig.fontSize}rem;
    min-height: ${(prop) => prop.$styledTextProps.fontConfig.fontSize};
    color: ${(prop) => prop.$styledTextProps.fontConfig.color};
    font-weight: ${(prop) => prop.$styledTextProps.fontConfig.fontWeight};

    // margin configs
    margin-top: ${(prop) => prop.$styledTextProps.marginConfig?.top};
    margin-bottom: ${(prop) => prop.$styledTextProps.marginConfig?.bottom};
    margin-left: ${(prop) => prop.$styledTextProps.marginConfig?.left};
    margin-right: ${(prop) => prop.$styledTextProps.marginConfig?.right};

    // padding configs
    padding-top: ${(prop) => prop.$styledTextProps.paddingConfig?.top};
    padding-bottom: ${(prop) => prop.$styledTextProps.paddingConfig?.bottom};
    padding-left: ${(prop) => prop.$styledTextProps.paddingConfig?.left};
    padding-right: ${(prop) => prop.$styledTextProps.paddingConfig?.right};

    // layout configs

    // etcConfig 적용
    ${(prop) =>
        prop.$styledTextProps.etcConfig?.whiteSpace &&
        `white-space: ${prop.$styledTextProps.etcConfig.whiteSpace};`}
    ${(prop) =>
        prop.$styledTextProps.etcConfig?.lineHeight &&
        `line-height: ${prop.$styledTextProps.etcConfig.lineHeight};`}
    ${(prop) =>
        prop.$styledTextProps.etcConfig?.maxWidth &&
        `max-width: ${prop.$styledTextProps.etcConfig.maxWidth};`}
    ${(prop) =>
        prop.$styledTextProps.etcConfig?.display &&
        `display: ${prop.$styledTextProps.etcConfig.display};`}
    ${(prop) =>
        prop.$styledTextProps.etcConfig?.alignItems &&
        `align-items: ${prop.$styledTextProps.etcConfig.alignItems};`}
    ${(prop) =>
        prop.$styledTextProps.etcConfig?.gap &&
        `gap: ${prop.$styledTextProps.etcConfig.gap};`}
    ${(prop) =>
        prop.$styledTextProps.etcConfig?.minHeight &&
        `min-height: ${prop.$styledTextProps.etcConfig.minHeight};`}
    ${(prop) =>
        prop.$styledTextProps.etcConfig?.letterSpacing &&
        `letter-spacing: ${prop.$styledTextProps.etcConfig.letterSpacing};`}

    ${(prop) =>
        prop.$styledTextProps.etcConfig?.textDecoration &&
        `text-decoration: ${prop.$styledTextProps.etcConfig.textDecoration};`}
`;

// @media (min-width: 768px) {
//     font-size: 1.125rem;
// } invitationMessage

const DateText = styled.p<{
    $fontConfig: FontConfig;
}>`
    margin-bottom: 0.5rem;

    /* 기본 크기에서 세로 길이가 짧을 때 */
    @media (min-width: 769px) and (max-height: 700px) {
        margin-bottom: 0.4rem;
    }

    @media (min-width: 769px) and (max-height: 600px) {
        margin-bottom: 0.3rem;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        min-height: 0.3rem;
    }

    /* 768px 이하에서 세로 길이가 짧을 때 */
    @media (max-width: 768px) and (max-height: 650px) {
        margin-bottom: 0.4rem;
    }
    @media (max-width: 768px) and (max-height: 550px) {
        margin-bottom: 0.3rem;
    }

    @media (max-width: 450px) {
        font-size: 1.1rem;
        margin-bottom: 0.15rem;
    }

    /* 450px 이하에서 세로 길이가 짧을 때 */
    @media (max-width: 450px) and (max-height: 600px) {
        margin-bottom: 0.1rem;
    }
    @media (max-width: 450px) and (max-height: 500px) {
        margin-bottom: 0.05rem;
    }

    @media (max-width: 360px) {
        font-size: 1rem;
        margin-bottom: 0.1rem;
    }

    /* 360px 이하에서 세로 길이가 짧을 때 */
    @media (max-width: 360px) and (max-height: 550px) {
        margin-bottom: 0.05rem;
    }
    @media (max-width: 360px) and (max-height: 450px) {
        margin-bottom: 0.02rem;
    }

    @media (max-width: 295px) {
        font-size: 0.9rem;
        margin-bottom: 0.05rem;
    }

    /* 295px 이하에서 세로 길이가 짧을 때 */
    @media (max-width: 295px) and (max-height: 500px) {
        margin-bottom: 0.02rem;
    }
    @media (max-width: 295px) and (max-height: 400px) {
        margin-bottom: 0rem;
    }
`;

const VenueText = styled.p<{
    $fontConfig: FontConfig;
}>`
    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
    @media (max-width: 450px) {
        font-size: 0.9rem;
    }
    @media (max-width: 360px) {
        font-size: 0.85rem;
    }
    @media (max-width: 295px) {
        font-size: 0.75rem;
    }
`;

const VenueAddress = styled.p<{ $fontConfig: FontConfig }>`
    margin-bottom: 0.5rem;
`;

const TransportLabel = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
`;

const TransportText = styled.p<{ $fontConfig: FontConfig }>`
    white-space: pre-line;
`;

const ShuttleLabel = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
`;

const ShuttleText = styled.p`
    font-size: 0.875rem;
    color: var(--text-medium);
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
