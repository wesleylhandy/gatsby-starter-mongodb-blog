import React from "react"
import styled from "@emotion/styled"

const H1 = styled.h1`
  font-family: "komika_title-axis_regular", sans-serif;
  font-weight: 400;
  font-style: normal;
`
export const PrimaryHeading = ({children, style = {}}) => (
    <H1 style={style}>{children}</H1>
)

const H2 = styled.h2`
  font-family: "komika_title-regular", sans-serif;
  font-weight: 400;
  font-style: normal;
`
export const SubHeading = ({children, style = {}}) => (
    <H2 style={style}>{children}</H2>
)

const H3 = styled.h3`
  font-family: "komika_title-regular", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 5px 0;
  &:after {
    content: '';
    height: 5px;
    width: 100%;
    background: linear-gradient(to left, #61dafb, rebeccapurple, #61dafb, rebeccapurple, #61dafb, rebeccapurple);
    display:block;
    margin-bottom: 30px;
  }
`
export const TertiaryHeading = ({children, style = {}}) => (
    <H3 style={style}>{children}</H3>
)

const H4 = styled.h4`
  font-family: "komika_title-regular", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 5px 0 20px 0;
`
export const QuartenaryHeading = ({children, style = {}}) => (
    <H4 style={style}>{children}</H4>
)