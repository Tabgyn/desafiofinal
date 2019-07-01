import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 72px;
  background: #0b2031;
  padding: 0 250px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    margin-right: 14px;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.6);

  button {
    font-size: 14px;
    color: #fff;
    opacity: 0.6;
    text-decoration: none;
    background: transparent;
    border: none;
  }
`;

export const OrdersButton = styled.button`
  background: #e5283e;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  color: #fff;
  width: 40px;
  height: 40px;
`;
