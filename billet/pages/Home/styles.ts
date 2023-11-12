import {makeStyles} from "system/makeStyles";

export const useStyles =  makeStyles((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.isLaptop ? theme.color.primary : theme.color.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.color.accent,
        fontSize: theme.fontSize.huge,
        lineHeight: theme.lineHeight.huge,
    },
    star: {
        color: theme.color.primary
    }
}));
