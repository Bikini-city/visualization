import styled from '@emotion/styled';

export const Container = styled.nav`
  padding: 2rem 0;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6rem;
  height: 100vh;
  position: fixed;
  top: 5rem;
  left: 0;
  z-index: 500;
  background-color: #fff;
  border-right: 2px solid #9e7715;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
