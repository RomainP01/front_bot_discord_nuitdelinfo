import { Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"


export const HomePage = () => {
    const { t } = useTranslation()
    return (
        <Grid>
            <Typography>{t("homepage.welcome")}</Typography>
        </Grid>
    )
}