import styled from 'styled-components';

import bg from 'assets/fundo.jpg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: #000;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
    url(${bg}) no-repeat center center fixed;
  background-size: cover;
`;

export const Logo = styled.img`
  width: 72px;
  height: 72px;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 400px;
  padding: 40px;

  input {
    font-size: 15px;
    padding: 15px 20px;
    margin-bottom: 10px;
    border: none;
    border-radius: 7px;
  }

  button {
    background: #e5283e;
    padding: 15px 20px;
    margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    border: none;
    border-radius: 7px;
  }
`;
