import styled from "styled-components";

const Section = styled.section`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  &.noPadd {
    padding: 0;
  }

  @media screen and (max-width: 991px) {
    padding: 80px 0;

    &.btmSec {
      padding: 80px 0 220px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 60px 0;

    &.btmSec {
      padding: 60px 0 220px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 40px 0;

    &.btmSec {
      padding: 40px 0 220px;
    }
  }
`;

const Div = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export { Section, Div };
