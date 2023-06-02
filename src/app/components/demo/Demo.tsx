


"use client";

import { Card, Grid } from "@mui/material";
import Bar from "../charts/Bar";
import BarStack from "../charts/BarStack";
import Doughnut from "../charts/Doughnut";


export default function Demo() {

    const drawerWidth = 140;
    return (

        <Grid container spacing={2}>
            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12}>
                <Card variant="outlined">
                    <Doughnut></Doughnut>
                </Card>
            </Grid>
            <Grid item xs={8}>
                <Card variant="outlined">
                    <Bar></Bar>
                </Card>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={12}>
                <Card variant="outlined">
                    <BarStack></BarStack>
                </Card>
            </Grid>
        </Grid>

    )
}
