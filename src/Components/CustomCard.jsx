import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@mui/material";

const style = {
    root: {
        width: 'auto',
        height: 250,
        backgroundColor: '#ffffff',
        padding: 0
    },
    pos: {
        marginBottom: 12,
        marginTop: 10
    },
    categoryTyp: {
        color: '#7d8887',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
};

function CustomCard(props) {
    const {details} = props;
    console.log(details, 'details');

    return (
        <Card style={style.root}
              variant="outlined">
            <CardContent style={{
                paddingTop: 0, minHeight: 150, paddingBottom: 0
            }}>
                <Grid container style={{display: 'flex'}}>
                    <Grid item xs={1} style={{
                        height: 250,
                        background: "green",
                        marginBottom: 10
                    }}/>
                    <Grid item xs={9}>
                        <Typography variant="h6" component="h2"
                                    style={{color: "green", fontSize: '1rem'}}>
                            {details.published_at}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body2" component="p"
                            style={style.categoryTyp}>
                    {details.published_at} {details.published_at && "/ " + details.published_at}
                </Typography>
                <Typography style={style.pos} color="textSecondary">
                    {details.published_at}
                </Typography>
            </CardContent>
            <CardActions style={style.cardActions}>
            </CardActions>
        </Card>
    );
}

export default CustomCard;
