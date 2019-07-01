import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #eceef3;
  overflow: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 730px;
  padding: 30px 0;
  margin: 0 auto;

  h1 {
    font-size: 18px;
    color: #333;
  }
`;

export const OrdersList = styled.ul`
  list-style: none;
`;

export const OrderItem = styled.li`
  display: flex;
  flex-direction: column;

  width: 100%;
  background: #fff;
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);

  p {
    font-size: 18px;
    color: #0b2031;

    &.obs {
      font-size: 14px;
      color: #706e7b;

      strong {
        color: #706e7b;
      }
    }
  }

  span {
    font-size: 11px;
    color: #706e7b;
    line-height: 14px;
    margin: 5px 0;
  }

  strong {
    font-size: 16px;
    color: #0b2031;
    line-height: 14px;
  }
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  list-style: none;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin: 20px 0;
  padding: 15px 0 0;
  width: 100%;
`;

export const ItemDetail = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px 15px;
  margin-right: 15px;
  margin-bottom: 15px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 13px;
      color: #0b2031;
    }

    span {
      font-size: 11px;
      color: #706e7b;
    }
  }
`;
