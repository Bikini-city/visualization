import styled from '@emotion/styled';

interface SpeciesCircleProps {
  color: string;
}

export const Container = styled.div`
  position: fixed;
  top: 8rem;
  left: 9rem;
  width: 40rem;
  height: 36rem;
  z-index: 1000;
  padding: 1.2rem;
  border: 2px solid #9e7715;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2.4rem;
`;

export const SubTitle = styled.h3`
  margin: 0;
  margin-top: 2rem;
  font-size: 1.6rem;
`;

export const DateWrapper = styled.div`
  gap: 1rem;
  margin: 0.7rem 0;
  display: flex;
  align-items: center;
`;

export const InputBox = styled.input`
  width: 15px;
  height: 15px;
  margin: 0;
`;

export const InputLabel = styled.label`
  font-size: 1.4rem;
`;

export const InputText = styled.input`
  height: 2.4rem;
  border: 1px solid #9e7715;
`;

export const SpeciesWrapper = styled.div`
  margin: 1rem 0;
`;

export const SpeciesSelect = styled.select`
  width: 10rem;
  height: 2.4rem;
  border: 1px solid #9e7715;
`;

export const SpeciesOption = styled.option``;

export const SpeciesList = styled.ul`
  padding: 0;
  margin-top: 1rem;

  gap: 1.5rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Species = styled.li`
  display: flex;
  align-items: center;
`;

export const SpeciesCircle = styled.div<SpeciesCircleProps>`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.color};
`;

export const SpeciesTitle = styled.h4`
  margin: 0;
  font-size: 1.4rem;
`;

export const ResultWrapper = styled.div``;
