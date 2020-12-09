import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  background-color: ${props => props.bgColor ? props.bgColor : 'var(--color-primary)'};
  padding: 20px;

  &.faith--card {
    text-transform: uppercase;

    .top {
      text-align: left;
    }

    .middle {
      text-align: left;

      span {
        &:before {
          left: 0;
          width: 100%;
        }
      }

      p {
        line-height: 2rem;
        font-family: "Cera PRO";
      }
    }

    .bottom {
      justify-content: space-between;
      flex-direction: row;

      p {
        width: 100%;
        margin: 0;
        text-align: right;
      }
    }
  }

  @media (max-width: 700px) {
    max-width: 315px;
    max-height: 400px;
  }
`;

export const Top = styled.div.attrs({
  className: 'top'
})`
  text-align: center;
  font-size: 1.2rem;
`;

export const Middle = styled.div.attrs({
  className: 'middle'
})`
  text-align: center;
  span {
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 20px;
    display: inline-block;
    font-size: 1.2rem;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 5%;
      width: 90%;
      height: 2px;
      background-color: #000000;
    }
  }

  p {
    font-size: 2.4rem;
    line-height: 3rem;
  }
`;

export const Bottom = styled.div.attrs({
  className: 'bottom'
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1rem;
    margin: 0 auto 20px;
    width: 120px;
    text-align: center;
  }
`;
