import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  cursor: pointer;
  margin: 0.2rem 2rem 0.2rem 0;
  &:hover {
    color: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  }
  &:focus {
    outline: none;
  }
`;
