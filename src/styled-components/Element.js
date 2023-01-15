import styled from "styled-components";

const P = styled.p`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  transition: all 0.3s ease-in-out;
`;

const H1 = styled.h1`
  font-family: var(--poppins-semi);
  font-size: var(--font-24);
  color: ${(props) => props.color};
  line-height: 38px;
  text-transform: uppercase;
  margin-bottom: 8px;
  transition: all 0.3s ease-in-out;
`;

const H2 = styled.h2`
  font-family: var(--nunito-bold);
  font-size: var(--font-34);
  color: ${(props) => props.color};
  line-height: 48px;
  transition: all 0.3s ease-in-out;
`;

const H3 = styled.h3`
  font-family: var(--nunito-bold);
  font-size: var(--font-18);
  color: ${(props) => props.color};
  line-height: 24px;
  transition: all 0.3s ease-in-out;
`;

const H4 = styled.h4`
  color: ${(props) => props.color};
  font-family: var(--poppins-semi);
  font-size: var(--font-18);
  line-height: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
`;

const Button = styled.a`
  padding: ${(props) => props.padding};
  display: inline-block;
  font-family: var(--poppins-med);
  font-size: var(--font-18);
  color: ${(props) => props.color};
  text-transform: uppercase;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.border};
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background-color: var(--blue-hover-clr);
    border-color: var(--blue-hover-clr);
  }
  &.orange {
    color: #fff;
    background-color: var(--blue-hover-clr);
    border-color: var(--blue-hover-clr);
  }
`;

export { P, H1, H2, H3, H4, Button };
