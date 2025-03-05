import { Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { paperStyling } from "../Styles";
import { ReactNode } from "react";

interface GroupingProps {
    groupHeading: string;
    children?: ReactNode;
}

const Heading = ({ groupHeading }: GroupingProps) => {
    return (
        <Grid
            size={{ xs: 12, md: 12 }}
        >
            <Typography
                variant="h3"
                id={groupHeading + "Heading"}
                // sx={{ color: '#ECECEC' }}
            >
                {groupHeading}
            </Typography>
        </Grid>
    );
}

export default function Grouping(props: GroupingProps) {

    const {
        groupHeading,
        children
    } = props;

    return (
        <Paper
            elevation={5}
            square={false}
            sx={paperStyling}
        >
            <Grid
                container
                id="QuickLinkGrid"
                spacing={2}
                sx={{ justifyContent: 'left' }}
                // size={{xs: 12, md: 4}}
            >
                <Heading groupHeading={groupHeading} />
                {children}
            </Grid>

            {/* <iframe src="https://www.google.com/maps/d/embed?mid=1O8DXyiUdiO6058LFEIF__lmVfmI54GM&ehbc=2E312F" width="640" height="480"></iframe> */}
        </Paper>
    );
}