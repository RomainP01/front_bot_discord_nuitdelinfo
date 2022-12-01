import GitHub from '@mui/icons-material/GitHub';
import { Grid } from '@mui/material';
export const BannerLogoComponent = () => {
    return (
        <Grid container item xs={12} md={12} direction="row" justifyContent="space-evenly">
            <a href="https://github.com/RomainP01/bot_discord_nuitdelinfo"><GitHub /></a>
            <a href="https://github.com/RomainP01/front_bot_discord_nuitdelinfo"><GitHub /></a>
        </Grid>
    )
}