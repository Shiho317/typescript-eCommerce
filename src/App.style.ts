import styled from 'styled-components';

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Prompt&display=swap');
  position: relative;
  color: black;
  box-sizing: border-box;
  font-family: 'Abril Fatface', cursive;
  font-family: 'Prompt', sans-serif;
  

  .header{
    background-color: #e6e6fa;
    width: 100%;
    height: 5rem;
    margin: 0;
    padding: 0;
    background-color: #e6e6fa;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header-logo{
    width: 5rem;
    height: 5rem;
    display: grid;
    align-items: center;
    margin: 0 4rem;
  }

  .header-logo img{
    width: 40px;
    height: 40px;
  }

  .cart-icon{
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    cursor: pointer;
  }

  .main{
    margin-top: 3rem;
  }

  .title{
    font-size: 2rem;
    text-align: center;
  }

`;

