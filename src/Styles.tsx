import { Theme } from "@mui/material";

export const paperStyling = (theme: Theme) => ({
    // ...theme.typography.button,
    color: theme.palette.primary.main,
    padding: 5,
    height: '100%'
}) as const;


export const quickLinksStyling = () => ({
    // ...theme.components?.MuiLink,
    // color: theme.palette.text
    // padding: 5,
    textDecoration: 'underline',
    underline: 'always',
}) as const;
