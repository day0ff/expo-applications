import styled from "styled-components/native";

import Star from 'assets/star-fill.svg';

export const TextStyled = styled.Text(({theme}) => ({
    color: theme.color.accent,
    fontSize: theme.fontSize.huge,
    lineHeight: theme.lineHeight.huge,
}));

export const ContainerStyled = styled.View(({theme}) => ({
    flex: 1,
    backgroundColor: theme.isLaptop ? theme.color.primary : theme.color.background,
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StarStyled = styled(Star)`
  color: ${({theme}) => theme.color.primary}
`;
