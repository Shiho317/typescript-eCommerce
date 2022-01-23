import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  color: black;
  box-sizing: border-box;
  

  .header{
    background-color: #e6e6fa;
    width: 100%;
    height: 5rem;
    margin: 0;
    padding: 0;
    background-color: #e6e6fa;
    display: flex;
    justify-content: space-between;
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
    display: grid;
    align-items: center;
    margin: 0 1rem;
  }

  .main{
    margin-top: 3rem;
  }

  .title{
    font-size: 2rem;
    text-align: center;
  }

`;

