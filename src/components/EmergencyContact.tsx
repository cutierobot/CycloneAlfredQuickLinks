import Grid from '@mui/material/Grid2';
import Grouping from "./Grouping";

interface PhoneLinkProps {
    phone: string;
}

const PhoneLink = ({ phone }: PhoneLinkProps) => {
    return <a href={`tel:${phone}`}>{phone}</a>;
};

interface EmergencyContactItemProps extends PhoneLinkProps {
    phoneText: string;
};

function EmergencyContactItem(props: EmergencyContactItemProps) {
    const {
        phone,
        phoneText
    } = props;

    return (
        <Grid
            size={{ xs: 12, md: 12 }}
            // color='#ECECEC'
        >
            {phoneText} <PhoneLink phone={phone} />
        </Grid>
    );
}

export default function EmergencyContact() {
    return (
        <Grouping
            groupHeading="Emergency Contact"
        >
            <EmergencyContactItem phone={"13 19 62"} phoneText={"Energex fallen powerlines"} />
            <EmergencyContactItem phone={"13 62 62"} phoneText={"Energex Power Outage"} />
            <EmergencyContactItem phone={"132 500"} phoneText={"SES"} />
            <EmergencyContactItem phone={"000"} phoneText={"Police/Fire/Ambulance"} />
            <EmergencyContactItem phone={"112"} phoneText={"Police/Fire/Ambulance mobile"} />
            <EmergencyContactItem phone={"13 14 44"} phoneText={"Policelink (general enquiries)"} />
            <EmergencyContactItem phone={"13 19 40"} phoneText={"Road traffic and travel information"} />
            <EmergencyContactItem phone={"1300 264 625"} phoneText={"RSPCA QLD 24/7 Animal emergencies"} />
            <EmergencyContactItem phone={"1800 333 000"} phoneText={"Crime Stoppers"} />
            <EmergencyContactItem phone={"13 11 26"} phoneText={"Poisons helpline"} />
        </Grouping>
    );
}