Outline variant:

there will be 6 stages.

Default:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--text-disabled, #93A1AE);
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledWrap = styled.div`
    align-self: stretch;
    height: 54px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 1px var(--components-textfield-outline, rgba(147, 161, 174, 0.20)) solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledTextField = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

export const Textfield = () => {
    return (
        <StyledTextField>
            <StyledWrap>
                <StyledValue>Label</StyledValue>
                <StyledEndadornment />
            </StyledWrap>
        </StyledTextField>
    );
};

Filled:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--text-primary, #1F2933);
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledMasklabel = styled.div`
    width: 36px;
    height: 2px;
    left: 0px;
    top: 5px;
    position: absolute;
    background: var(--background-paper, white);
`;

const StyledLabelspan = styled.span`
    color: var(--text-secondary, #657686);
    font-size: 12px;
    font-family: Public Sans;
    font-weight: 600;
    line-height: 12px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledLabelfocus = styled.div`
    padding-left: 2px;
    padding-right: 2px;
    left: 14px;
    top: -5px;
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const StyledWrap = styled.div`
    align-self: stretch;
    height: 54px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 1px var(--components-textfield-outline, rgba(147, 161, 174, 0.20)) solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledTextField = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

export const Textfield = () => {
    return (
        <StyledTextField>
            <StyledWrap>
                <StyledValue>Value</StyledValue>
                <StyledLabelfocus>
                    <StyledMasklabel />
                    <StyledLabel>Label</StyledLabel>
                </StyledLabelfocus>
                <StyledEndadornment />
            </StyledWrap>
        </StyledTextField>
    );
};

Hovered when Filled:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--text-primary, #1F2933);
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledMasklabel = styled.div`
    width: 36px;
    height: 2px;
    left: 0px;
    top: 5px;
    position: absolute;
    background: var(--background-paper, white);
`;

const StyledLabelspan = styled.span`
    color: var(--text-secondary, #657686);
    font-size: 12px;
    font-family: Public Sans;
    font-weight: 600;
    line-height: 12px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledLabelfocus = styled.div`
    padding-left: 2px;
    padding-right: 2px;
    left: 14px;
    top: -5px;
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const StyledWrap = styled.div`
    align-self: stretch;
    height: 54px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 1px var(--text-primary, #1F2933) solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledTextField = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

export const Textfield = () => {
    return (
        <StyledTextField>
            <StyledWrap>
                <StyledValue>Hovered</StyledValue>
                <StyledLabelfocus>
                    <StyledMasklabel />
                    <StyledLabel>Label</StyledLabel>
                </StyledLabelfocus>
                <StyledEndadornment />
            </StyledWrap>
        </StyledTextField>
    );
};

Typing:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--text-primary, #1F2933);
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledMasklabel = styled.div`
    width: 36px;
    height: 2px;
    left: 0px;
    top: 5px;
    position: absolute;
    background: var(--background-paper, white);
`;

const StyledLabelspan = styled.span`
    color: var(--text-primary, #1F2933);
    font-size: 12px;
    font-family: Public Sans;
    font-weight: 600;
    line-height: 12px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledLabelfocus = styled.div`
    padding-left: 2px;
    padding-right: 2px;
    left: 14px;
    top: -5px;
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const StyledWrap = styled.div`
    align-self: stretch;
    height: 54px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 2px var(--text-primary, #1F2933) solid;
    outline-offset: -2px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledTextField = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

export const Textfield = () => {
    return (
        <StyledTextField>
            <StyledWrap>
                <StyledValue>Focused |</StyledValue>
                <StyledLabelfocus>
                    <StyledMasklabel />
                    <StyledLabel>Label</StyledLabel>
                </StyledLabelfocus>
                <StyledEndadornment />
            </StyledWrap>
        </StyledTextField>
    );
};

Incorrect:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--text-primary, #1F2933);
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledMasklabel = styled.div`
    width: 36px;
    height: 2px;
    left: 0px;
    top: 5px;
    position: absolute;
    background: var(--background-paper, white);
`;

const StyledLabelspan = styled.span`
    color: var(--error-main, #FF5833);
    font-size: 12px;
    font-family: Public Sans;
    font-weight: 600;
    line-height: 12px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledLabelfocus = styled.div`
    padding-left: 2px;
    padding-right: 2px;
    left: 14px;
    top: -5px;
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const StyledWrap = styled.div`
    align-self: stretch;
    height: 54px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 2px var(--error-main, #FF5833) solid;
    outline-offset: -2px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledTextField = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

export const Textfield = () => {
    return (
        <StyledTextField>
            <StyledWrap>
                <StyledValue>Incorrect</StyledValue>
                <StyledLabelfocus>
                    <StyledMasklabel />
                    <StyledLabel>Label</StyledLabel>
                </StyledLabelfocus>
                <StyledEndadornment />
            </StyledWrap>
        </StyledTextField>
    );
};

Disabled:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--action-disabled, rgba(145, 158, 171, 0.80));
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledMasklabel = styled.div`
    width: 36px;
    height: 2px;
    left: 0px;
    top: 5px;
    position: absolute;
    background: var(--background-paper, white);
`;

const StyledLabelspan = styled.span`
    color: var(--action-disabled, rgba(145, 158, 171, 0.80));
    font-size: 12px;
    font-family: Public Sans;
    font-weight: 600;
    line-height: 12px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledLabelfocus = styled.div`
    padding-left: 2px;
    padding-right: 2px;
    left: 14px;
    top: -5px;
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const StyledWrap = styled.div`
    align-self: stretch;
    height: 54px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 1px var(--action-disabled-bgcolor, rgba(147, 161, 174, 0.20)) solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledTextField = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

export const Textfield = () => {
    return (
        <StyledTextField>
            <StyledWrap>
                <StyledValue>Disabled</StyledValue>
                <StyledLabelfocus>
                    <StyledMasklabel />
                    <StyledLabel>Label</StyledLabel>
                </StyledLabelfocus>
                <StyledEndadornment />
            </StyledWrap>
        </StyledTextField>
    );
};

There are two sizes:
Medium:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--text-disabled, #93A1AE);
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledWrap = styled.div`
    align-self: stretch;
    height: 54px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 1px var(--components-textfield-outline, rgba(147, 161, 174, 0.20)) solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledTextField = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

export const Textfield = () => {
    return (
        <StyledTextField>
            <StyledWrap>
                <StyledValue>Medium</StyledValue>
                <StyledEndadornment />
            </StyledWrap>
        </StyledTextField>
    );
};

Small:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--text-disabled, #93A1AE);
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 0px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledWrap = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 1px var(--components-textfield-outline, rgba(147, 161, 174, 0.20)) solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

export const Wrap = () => {
    return (
        <StyledWrap>
            <StyledValue>Small</StyledValue>
            <StyledEndadornment />
        </StyledWrap>
    );
};

There are also variant for helptext
Default:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--text-disabled, #93A1AE);
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledPrimaryshape = styled.div`
    width: 13.33px;
    height: 13.33px;
    left: 1.33px;
    top: 1.33px;
    position: absolute;
    background: var(--text-secondary, #657686);
`;

const StyledHelpertextspan = styled.span`
    color: var(--text-secondary, #657686);
    font-size: 12px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 18px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledIconssolidicsolarinfocirclebold = styled.div`
    width: 16px;
    height: 16px;
    position: relative;
    overflow: hidden;
`;

const StyledWrap = styled.div`
    align-self: stretch;
    height: 54px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 1px var(--components-textfield-outline, rgba(147, 161, 174, 0.20)) solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledHelpertext = styled.div`
    align-self: stretch;
    padding-top: 8px;
    padding-left: 12px;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    display: inline-flex;
`;

const StyledTextField = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

export const Textfield = () => {
    return (
        <StyledTextField>
            <StyledWrap>
                <StyledValue>Label</StyledValue>
                <StyledEndadornment />
            </StyledWrap>
            <StyledHelpertext>
                <StyledIconssolidicsolarinfocirclebold>
                    <StyledPrimaryshape />
                </StyledIconssolidicsolarinfocirclebold>
                <StyledHelpertext>Caption text, description, notification</StyledHelpertext>
            </StyledHelpertext>
        </StyledTextField>
    );
};

Helptext - Error:
import React from "react";
import styled from "styled-components";

const StyledValuespan = styled.span`
    color: var(--text-primary, #1F2933);
    font-size: 15px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
`;

const StyledMasklabel = styled.div`
    width: 36px;
    height: 2px;
    left: 0px;
    top: 5px;
    position: absolute;
    background: var(--background-paper, white);
`;

const StyledLabelspan = styled.span`
    color: var(--error-main, #FF5833);
    font-size: 12px;
    font-family: Public Sans;
    font-weight: 600;
    line-height: 12px;
    word-wrap: break-word;
`;

const StyledPrimaryshape = styled.div`
    width: 13.33px;
    height: 12px;
    left: 1.33px;
    top: 2px;
    position: absolute;
    background: var(--error-main, #FF5833);
`;

const StyledHelpertextspan = styled.span`
    color: var(--error-main, #FF5833);
    font-size: 12px;
    font-family: Public Sans;
    font-weight: 400;
    line-height: 18px;
    word-wrap: break-word;
`;

const StyledEndadornment = styled.div`
    height: 40px;
    left: 320px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledLabelfocus = styled.div`
    padding-left: 2px;
    padding-right: 2px;
    left: 14px;
    top: -5px;
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const StyledIconssolidicsolardangertrianglebold = styled.div`
    width: 16px;
    height: 16px;
    position: relative;
    overflow: hidden;
`;

const StyledWrap = styled.div`
    align-self: stretch;
    height: 54px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
    border-radius: 8px;
    outline: 2px var(--error-main, #FF5833) solid;
    outline-offset: -2px;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
`;

const StyledHelpertext = styled.div`
    align-self: stretch;
    padding-top: 8px;
    padding-left: 12px;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    display: inline-flex;
`;

const StyledTextField = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

export const Textfield = () => {
    return (
        <StyledTextField>
            <StyledWrap>
                <StyledValue>Incorrect</StyledValue>
                <StyledLabelfocus>
                    <StyledMasklabel />
                    <StyledLabel>Label</StyledLabel>
                </StyledLabelfocus>
                <StyledEndadornment />
            </StyledWrap>
            <StyledHelpertext>
                <StyledIconssolidicsolardangertrianglebold>
                    <StyledPrimaryshape />
                </StyledIconssolidicsolardangertrianglebold>
                <StyledHelpertext>Caption text, description, notification</StyledHelpertext>
            </StyledHelpertext>
        </StyledTextField>
    );
};