import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #f12993;
  color: white;
  width: 50px;
  padding: 10px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #f484f4;
  }
`;

const Test: React.FC = () => {
  return <StyledButton>Click!</StyledButton>;
};

export default Test;
