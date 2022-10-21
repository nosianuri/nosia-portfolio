import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import Navbar from './Navbar';
import project1 from "../assets/html-css-javascript-lg.jpg";
import project2 from "../assets/javascript-fullstack.jpg";
import project3 from "../assets/react-redux.jpg";
import project4 from "../assets/mern-stack.jpg";

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
})

function Portfolio() {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='center'>
                {/* project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt='Project 1'
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                   ZOOMLA
                                </Typography>
                                <Typography variant="body2" color='textSecondary' component="p">
                                Implemented wonderful video conference and realtime video and chat application site with React. Added user information for helping to chat each other easily. Applied meeting schedule for making any specific meeting time.

                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Github
                                </Button>
                                <Button size='small' color='primary' href="https://zoomla.vercel.app/">
                                Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
                {/* project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt='Project 2'
                                height="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    TRAVEL GURU
                                </Typography>
                                <Typography variant="body2" color='textSecondary' component="p">
                                Implemented wonderful travel site with React.Added Guider information for helping tour and safety. Applied map to find location or interesting place.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                Github
                                </Button>
                                <Button size='small' color='primary' href="https://travel-master-c95cb.web.app/">
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
                {/* project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt='Project 3'
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    GYMCLUB
                                </Typography>
                                <Typography variant="body2" color='textSecondary' component="p">
                                I've collected the best examples of gym websites, web design concepts and ideas.Best gym website freelance services online. Outsource the gym website project and get it quickly done and delivered remotely online.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                Github
                                </Button>
                                <Button size='small' color='primary' href="https://fitness-club-4ecbc.web.app/">
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
                {/* project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt='Project 4'
                                height="140"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    PRADA
                                </Typography>
                                <Typography variant="body2" color='textSecondary' component="p">
                                These website is implement with HTML, CSS & JavaScript code. It's a wonderful online selling platform. All products are custom with their catagories. 
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                Github
                                </Button>
                                <Button size='small' color='primary' href="https://prada-shop-3xlq.vercel.app/">
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Portfolio;