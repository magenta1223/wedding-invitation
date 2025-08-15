import { styled } from "styled-components";
import { FontConfig, StyledTextProps } from "@/src/types/wedding";

export const StyledDiv = styled.div<{
    $styledTextProps: StyledTextProps;
}>`
    // font configs
    font-family: ${(prop) => prop.$styledTextProps.fontConfig.fontFamily};
    font-style: ${(prop) => prop.$styledTextProps.fontConfig.fontStyle};
    font-size: ${(prop) => prop.$styledTextProps.fontConfig.fontSize}rem;
    min-height: ${(prop) => prop.$styledTextProps.fontConfig.fontSize};
    color: ${(prop) => prop.$styledTextProps.fontConfig.color};
    font-weight: ${(prop) => prop.$styledTextProps.fontConfig.fontWeight};

    // layout configs
    display: ${(prop) =>
        prop.$styledTextProps.layoutConfig?.display || "block"};
    flex-direction: ${(prop) =>
        prop.$styledTextProps.layoutConfig?.flexDirection || "column"};
    align-items: ${(prop) =>
        prop.$styledTextProps.layoutConfig?.display || "center"};

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
    
    ${(prop) =>
        prop.$styledTextProps.etcConfig?.textShadow &&
        `text-shadow: ${prop.$styledTextProps.etcConfig.textShadow};`}

    ${(prop) =>
        prop.$styledTextProps.etcConfig?.sticky &&
        `
    position: sticky;
    top: 0;
    bottom: auto;
    left: auto;
    right: auto;
  `}
`;
