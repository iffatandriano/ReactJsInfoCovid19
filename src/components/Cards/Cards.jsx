import React from 'react';
import './Cards.css';
import CountUp from 'react-countup';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="card infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Positif</Typography>
                        <Typography varaint="5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Jumlah pasien positif Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Sembuh</Typography>
                        <Typography varaint="5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Jumlah pasien sembuh dari Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Meninggal</Typography>
                        <Typography varaint="5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                color="red"
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Jumlah pasien meninggal dari Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;