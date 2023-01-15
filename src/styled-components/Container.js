import styled from "styled-components";

const Section = styled.section`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
`;

const Div = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export { Section, Div };
