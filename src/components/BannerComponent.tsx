import { Grid } from "@mui/material"
import { BannerLogoComponent } from "./BannerLogoComponent"
export const BannerComponent = () => {
    return (
        <Grid container xs={12} md={12} direction="row" alignItems="center">
            <Grid item xs={0} md={3}>
            </Grid>
            <Grid container item xs={12} md={6} direction="row" justifyContent="center">

            </Grid>
            <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <BannerLogoComponent />
            </Grid>
        </Grid>
    )
}