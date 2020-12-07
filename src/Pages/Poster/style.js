import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AreaSVG = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  .top {
    transform: translateY(-30px) scale3d(3, 3, 3);
  }

  .bottom {
    transform: scale3d(3, 3, 3);
  }
`;

export const Text = styled.p`
  font-size: 3rem;
  margin-top: 50px;
`;