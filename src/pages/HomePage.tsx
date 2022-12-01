import { Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { Firestore } from "firebase/firestore/lite"
import { getHomepageBanner } from "../queries/getHomepageBanner"
interface HomePageProps {
    db: Firestore
}
export const HomePage = ({ db }: HomePageProps) => {
    const { t } = useTranslation()
    const [homepageBanner, setHomepageBanner] = useState()
    useEffect(() => {
        const getHomepageBannerFirebase = async () => {
            const result = await getHomepageBanner(db);
            setHomepageBanner(result);
        };
        getHomepageBannerFirebase();
    }, []);
    return (
        <Grid container item xs={12} md={12} justifyContent="center">
            <Grid container item xs={12} md={12} justifyContent="center" alignItems="center" style={{ marginTop: '10vh', marginBottom: '10vh', height: '50vh', backgroundColor: 'RGBA(0,0,0,0.40)', overflow: 'hidden' }}>
                <img src={homepageBanner} style={{ width: '100%', zIndex: -1 }} />
                <Typography variant='h4' align="center" style={{ zIndex: 2, color: 'white', position: 'absolute' }} >{t("homepage.welcometitle")} <br />
                    – <br />
                    {t("homepage.welcomesubtitle")}</Typography>
            </Grid>
            <Grid container item xs={12} md={12} alignItems="center" justifyContent="center" style={{ marginBottom: '10vh' }}>
                <Grid item xs={10} md={6}>
                    <Typography variant="h4" textAlign="center" >{t("homepage.firstparagraph")}</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} md={12} justifyContent="center">
                <Grid item xs={10} md={6}>
                    <Typography variant="h6" textAlign="center" style={{ marginBottom: '2vh' }}>{t("homepage.secondparagraph")}<br />   </Typography>

                    <Typography variant="h6" textAlign="center">{t("homepage.thirdparagraph")}</Typography>
                </Grid>
            </Grid>
        </Grid >
    )
}