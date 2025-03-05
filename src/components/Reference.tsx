import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Link, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface ReferenceProps {
    referenceText: string;
    referenceURL: string;
}

export default function Reference(props: ReferenceProps) {
    const {
        referenceText,
        referenceURL
    } = props

    return (
        <Paper
            elevation={0}
            square={false}
            sx={{
                backgroundColor: '#ffcb0036',
                padding: 1,
                display: 'inline',
                width: '100%',
                border: 'solid orange'
            }}
        >
            <Grid
                container
                id="QuickLinkGrid"
                spacing={1}
                sx={{ justifyContent: 'left' }}
            >
                <Grid size={1} color={'orange'} >
                    <HelpCenterIcon />
                </Grid>

                <Grid size={10} >
                    {referenceText} <Link href={referenceURL} sx={{ color: 'blue' }}>here</Link>
                </Grid>
            </Grid>
        </Paper>
    );
}