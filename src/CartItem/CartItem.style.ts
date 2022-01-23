import styled from 'styled-components';

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Prompt&display=swap');
  width: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr 0.2fr;
  align-items: center;
  margin: 2rem 0;
  font-family: 'Abril Fatface', cursive;
  font-family: 'Prompt', sans-serif;

  .contents-wrap h3{
    text-align: center;
  }

  .information{
    display: block;
  }

  .add-btn,
  .remove-btn{
    background-color: #e6e6fa;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .add-btn:hover,
  .remove-btn:hover{
    background-color: gray;
  }

  .cart-btn{
    display: flex;
    justify-content: space-evenly;
  }

  .img-wrap{
    width: 130px;
    height: 130px;
    margin: 0 auto;
    background-color: blue;
  }

  img{
    width: 130px;
    height: 130px;
    border: 3px solid #dcdcdc;
  }

  .trash-icon{
    cursor: pointer;
  }

`;