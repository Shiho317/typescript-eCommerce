import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  .image-wrap{
    width: 300px;
    height: 300px;
    background-color: blue;
  }

  img {
    width: 300px;
    height: 300px;
    filter: drop-shadow(25px 25px 0 #00ced1);
    border: 3px solid #f0e68c;
  }

`;