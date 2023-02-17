import styled from 'styled-components'

export const MenuContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 3.375rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;

    gap: 2rem;
  }
`
