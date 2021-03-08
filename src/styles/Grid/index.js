import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after{
    clear: both;
  }

`;

function getWidthGrid(value) {
  if (!value) return;
  let width = value / 12 * 100;
  return `width: ${width}%;`;
}

export const Column = styled.div`
  float: left;
  min-height: 1px;
  box-sizing: border-box;

  @media only screen and (max-width: 374px) {
    position: absolute;
    ${({mobile}) => mobile && getWidthGrid(mobile)}
  }
  @media only screen and (min-width: 375px) {
    ${({tablet}) => tablet && getWidthGrid(tablet)}
  }
  @media only screen and (min-width: 1000px) {
    ${({desktop}) => desktop && getWidthGrid(desktop)}
  }
  `;


  // width: ${props => (props.grid ? props.grid / 12 * 100 : '8:33')}%;