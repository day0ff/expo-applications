import styled from "styled-components/native";

export const ExampleStyled = styled.View({
    flex: 1
});

export const ExampleTextStyled = styled.Text(({theme}) => ({
    color: theme.color.text
}));
