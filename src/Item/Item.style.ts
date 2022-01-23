import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 3rem auto;

  .image-wrap{
    width: 300px;
    height: 300px;
    background-color: blue;
  }

  img {
    width: 300px;
    height: 300px;
    filter: drop-shadow(25px 25px 0 #e6e6fa);
    border: 3px solid #dcdcdc;
  }

  .details{
    margin-top: 2rem;
    height: 13rem;
    width: 70%;
  }

  .details p{
    color: gray;
  }

  .add-button{
    color: white;
    background-color: #e6e6fa;
    border: none;
    padding: 1rem 2rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }

  .add-button:hover{
    background-color: gray;
  }
`;
