import { Link, Stack } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { ReactNode } from "react";

import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';
import OutletIcon from '@mui/icons-material/Outlet';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FloodIcon from '@mui/icons-material/Flood';
import SchoolIcon from '@mui/icons-material/School';

import Grouping from "./Grouping";
import { quickLinksStyling } from "../Styles";

interface QuickLinkGridProps {
    url: string; // href
    text: string;
    children?: ReactNode;
};

function QuickLink(props: QuickLinkGridProps) {
    const {
        url,
        text,
        children
    } = props;

    return (
        <Grid
            size={{ xs: 12, md: 12 }}
            // color='#ECECEC'
        >
            <Link
                href={url}
                sx={quickLinksStyling}
                alignItems={'center'}
                textAlign={'center'}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    {children} {text}
                </Stack>
            </Link>
        </Grid>
    );
}

export default function QuickLinks() {
    return (
        <Grouping
            groupHeading="Quick Links"
        >
            <QuickLink
                url='https://qldtraffic.qld.gov.au/'
                text='QLD Traffic Road Closures'
            >
                <RemoveRoadIcon color='inherit' sx={{ paddingRight: '5px' }} />
            </QuickLink>
            <QuickLink
                url='http://www.bom.gov.au/products/IDQ65002.shtml'
                text='TROPICAL CYCLONE FORECAST TRACK MAP'
            />

            <QuickLink
                url='https://www.brisbane.qld.gov.au/community-and-safety/community-safety/disasters-and-emergencies/emergency-dashboard'
                text='Brisbane Council Emergency Dashboard'
            >
                <DashboardIcon color='inherit' sx={{ paddingRight: '5px' }} />
            </QuickLink>

            <QuickLink
                url='https://www.brisbane.qld.gov.au/community-and-safety/community-safety/disasters-and-emergencies/creek-flooding-alerts'
                text='Creek Flooding Alerts'
            >
                <FloodIcon color='inherit' sx={{ paddingRight: '5px' }}/>
            </QuickLink>

            <QuickLink
                url='https://www.getready.qld.gov.au/news/tropical-cyclone-alfred-march-2025'
                text='Get Ready Queensland Alfred updates'
            />

            <QuickLink
                url='https://www.getready.qld.gov.au/cyclone-alfred-faqs'
                text="Get Ready Queensland - Alfred FAQ's"
            />

            <QuickLink
                url='https://www.energex.com.au/outages/outage-finder/outage-finder-map/'
                text='Energex Outage Map'
            >
                <OutletIcon color='inherit' sx={{ paddingRight: '5px' }} />
            </QuickLink>

            <QuickLink
                url='https://www.qld.gov.au/community/disasters-emergencies/disasters/resources-translations/local-government-disaster-dashboards'
                text='Local Councils Disaster Dashboard List'
            />
            <QuickLink
                url='http://www.bom.gov.au/cyclone/7dayforecast/'
                text='Alfred 7 day Weather prediction from BOM'
            />
            <QuickLink
                url='https://closures.qld.edu.au/'
                text='List of Schools closed'
            >
                <SchoolIcon color='inherit' sx={{ paddingRight: '5px' }} />
            </QuickLink>
        </Grouping>
    )
}