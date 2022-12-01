import { Grid, Typography } from "@mui/material"
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Firestore } from "firebase/firestore/lite"
import { useTranslation } from "react-i18next"
interface DocumentationPageProps {
    db: Firestore
}
const createData = (
    commandName: string,
    commandDescription: string,
    commandArgs: string,
) => {
    return { commandName, commandDescription, commandArgs };
}


export const DocumentationPage = ({ db }: DocumentationPageProps) => {
    const { t } = useTranslation()
    const rows = [
        createData('!ping', t("documentation.pingDescription"), t("documentation.noargs")),
        createData('!changeTheme', t("documentation.changeThemeDescription"), t("documentation.changeThemeArgs")),
        createData('!currentTheme', t("documentation.currentThemeDescription"), t("documentation.noargs")),
        createData('!changeLanguage', t("documentation.changeLanguageDescription"), t("documentation.changeLanguageArgs")),
        createData('!currentLanguage', t("documentation.currentLanguageDescription"), t("documentation.noargs")),
        createData('!changeHomepageBanner', t("documentation.changeHomepageBannerDescription"), t("documentation.changeHomepageBannerArgs")),
    ];
    return (
        <Grid container item xs={12} md={12} justifyContent="center">
            <Grid container item xs={12} md={12} alignItems="center" justifyContent="center" style={{ marginBottom: '10vh' }}>
                <Grid item xs={10} md={6}>
                    <Typography variant="h2" textAlign="center" >Documentation</Typography>
                    <Typography variant="h4" textAlign="center" >{t("documentation.subtitle")}</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={10} md={10} justifyContent="center">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{t("documentation.pingDescription")}</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Arguments</TableCell></TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.commandName}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.commandName}
                                    </TableCell>
                                    <TableCell align="right">{row.commandDescription}</TableCell>
                                    <TableCell align="right">{row.commandArgs}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid >
    )
}