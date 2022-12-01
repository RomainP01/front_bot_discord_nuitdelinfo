import { Grid, Typography } from "@mui/material"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { DocumentData, Firestore } from "firebase/firestore/lite"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from 'react'
import { getMessages } from '../queries/getMessages'
interface MessagesPageProps {
    db: Firestore
}

export const MessagesPage = ({ db }: MessagesPageProps) => {
    const { t } = useTranslation()
    const [messages, setMessages] = useState<DocumentData[]>()
    useEffect(() => {
        const getMessagesFirebase = async () => {
            const result = await getMessages(db);
            setMessages(result);
        };
        getMessagesFirebase();
    }, []);
    return (
        <Grid container item xs={12} md={12} justifyContent="center">
            <Grid container item xs={12} md={12} alignItems="center" justifyContent="center" style={{ marginBottom: '10vh' }}>
                <Grid item xs={10} md={6}>
                    <Typography variant="h2" textAlign="center" >Messages</Typography>
                    <Typography variant="h4" textAlign="center" >{t("messages.subtitle")}</Typography>
                </Grid>
            </Grid>
            {messages && messages.map(message => {
                return (
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {message.author}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {message.value}
                            </Typography>

                        </CardContent>

                    </Card>
                )
            })}
        </Grid>
    )
}