"use client";

import React from "react";
import styled from "styled-components";
import { weddingConfig } from "../../config/wedding-config";
import { FontConfig } from "../../types/wedding";
import { StyledP } from "../styledElements/p";

const InvitationSection = () => {
    const { invitation } = weddingConfig;

    const hasGroomFather = Boolean(
        invitation.groom.father && invitation.groom.father.text.trim() !== ""
    );
    const hasGroomMother = Boolean(
        invitation.groom.mother && invitation.groom.mother.text.trim() !== ""
    );
    const hasGroomParents = hasGroomFather || hasGroomMother;

    const hasBrideFather = Boolean(
        invitation.bride.father && invitation.bride.father.text.trim() !== ""
    );
    const hasBrideMother = Boolean(
        invitation.bride.mother && invitation.bride.mother.text.trim() !== ""
    );
    const hasBrideParents = hasBrideFather || hasBrideMother;

    const getParentsText = (
        father: string,
        mother: string,
        hasFather: boolean,
        hasMother: boolean
    ): string => {
        if (hasFather && hasMother) {
            return `${father} · ${mother}`;
        } else if (hasFather) {
            return father;
        } else if (hasMother) {
            return mother;
        }
        return "";
    };

    const groomParentsText = getParentsText(
        invitation.groom.father.text || "",
        invitation.groom.mother.text || "",
        hasGroomFather,
        hasGroomMother
    );

    const brideParentsText = getParentsText(
        invitation.bride.father.text || "",
        invitation.bride.mother.text || "",
        hasBrideFather,
        hasBrideMother
    );

    return (
        <InvitationSectionContainer
            $bgColor={weddingConfig.invitation.sectionBackgroundColor}
        >
            <StyledP $styledTextProps={invitation.message}>
                {invitation.message.text}
            </StyledP>

            <CoupleContainer>
                <CoupleInfo>
                    {hasGroomParents ? (
                        <StyledP $styledTextProps={invitation.groom.father}>
                            {groomParentsText}
                            <ParentLabel
                                $fontConfig={invitation.groom.label.fontConfig}
                            >
                                의 {invitation.groom.label.text || "아들"}
                            </ParentLabel>
                        </StyledP>
                    ) : (
                        <StyledP $styledTextProps={invitation.groom.name}>
                            <ParentLabel
                                $fontConfig={invitation.groom.label.fontConfig}
                            >
                                신랑
                            </ParentLabel>
                        </StyledP>
                    )}
                    <StyledP $styledTextProps={invitation.groom.name}>
                        {invitation.groom.name.text}
                    </StyledP>
                </CoupleInfo>

                <CoupleInfo>
                    {hasBrideParents ? (
                        <StyledP $styledTextProps={invitation.bride.father}>
                            {brideParentsText}
                            <ParentLabel
                                $fontConfig={invitation.bride.label.fontConfig}
                            >
                                의 {invitation.bride.label.text || "딸"}
                            </ParentLabel>
                        </StyledP>
                    ) : (
                        <StyledP $styledTextProps={invitation.bride.name}>
                            <ParentLabel
                                $fontConfig={invitation.bride.label.fontConfig}
                            >
                                신부
                            </ParentLabel>
                        </StyledP>
                    )}
                    <StyledP $styledTextProps={invitation.bride.name}>
                        {invitation.bride.name.text}
                    </StyledP>
                </CoupleInfo>
            </CoupleContainer>
        </InvitationSectionContainer>
    );
};

const InvitationSectionContainer = styled.section<{
    $bgColor: string;
}>`
    padding: 4rem 1.5rem;
    text-align: center;
    background-color: ${(props) => props.$bgColor};
`;

const CoupleContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    @media (min-width: 768px) {
        gap: 4rem;
    }
`;

const CoupleInfo = styled.div`
    text-align: center;
`;

const ParentLabel = styled.span<{ $fontConfig: FontConfig }>`
    font
    -family: ${(prop) => prop.$fontConfig.fontFamily}, "Times New Roman",
        serif;
    font-style: ${(prop) => prop.$fontConfig.fontStyle};
    font-size: ${(prop) => prop.$fontConfig.fontSize}rem;
    min-height: ${(prop) => prop.$fontConfig.fontSize};
    color: ${(prop) => prop.$fontConfig.color};

    margin-left: 0.25rem;
`;

export default InvitationSection;
