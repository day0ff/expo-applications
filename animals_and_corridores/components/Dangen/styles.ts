import styled from "styled-components/native";

export const DangenStyled = styled.View({});


export const DangenTextStyled = styled.Text(({theme}) => ({
    color: theme.color.text
}));

export const DangenFlatListStyled = styled.FlatList(({theme}) => ({
    color: theme.color.text
}));

export const DangenFlatListItemStyled = styled.View({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    border: "1px solid black",
});

export const DangenFlatListItemTextStyled = styled.Text(({theme}) => ({
    textAlign: 'center',
    color: theme.color.text,
    fontSize: 64
}));