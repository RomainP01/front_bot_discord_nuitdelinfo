import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Grid } from '@mui/material';
export const BannerLogoComponent = () => {
    return (
        <Grid container item xs={12} md={12} direction="row" justifyContent="space-evenly">
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <FacebookIcon />
        </Grid>
    )
}