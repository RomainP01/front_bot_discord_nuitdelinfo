import { Grid } from "@mui/material";
import { Firestore } from "firebase/firestore/lite";
import { Component, ReactNode } from "react";
import { BannerComponent } from "../components/BannerComponent";
import { HeaderComponent } from "../components/HeaderComponent";

export const addHeaderToComponent = (Children: any, db: Firestore) => {
    return class extends Component {
        render() {
            return (
                <Grid>
                    <BannerComponent />
                    <HeaderComponent />
                    <Children db={db} />
                </Grid>
            );
        }
    };
};
