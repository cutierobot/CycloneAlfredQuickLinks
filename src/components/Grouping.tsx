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
            className="GroupingPaper"
        >
            <Grid
                container
                className="GroupingGrid"
                spacing={2}
                sx={{ justifyContent: 'left' }}
            >
                <Heading groupHeading={groupHeading} />
                {children}
            </Grid>
        </Paper>
    );
}