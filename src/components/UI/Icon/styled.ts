import styled from '@emotion/styled';

interface ContainerProps {
  width: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
`;
