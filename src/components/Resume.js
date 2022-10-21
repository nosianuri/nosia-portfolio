import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: '#233'
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: 'absolute'
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)":{
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

function Resume() {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant='h4' align='center' className={classes.heading}>
                    working experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2020</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            web design
                        </Typography>
                        <Typography variant='body1' align='center' style={{color: "tomato"}}>
                            From - Udacity
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{color: "tan"}}>
                        As a web designer i have enough knowledge on visual design,UX,graphic design,web design software,HTML and CSS.
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2020</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                        html & css
                        </Typography>
                        <Typography variant='body1' align='center' style={{color: "tomato"}}>
                            From - Coursera
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{color: "tan"}}>
                        HTML and CSS are two basic building blocks which every beginner’s coding journey in frontend starts with these.
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2021</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            javascript full stack
                        </Typography>
                        <Typography variant='body1' align='center' style={{color: "tomato"}}>
                        From - Coursera
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{color: "tan"}}>
                        JavaScript is an awesome programming language, with a lot of use cases and potentiality.JavaScript full stack development offers an easy, cost and time saving solution for crafting robust websites.
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2022</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            react | redux
                        </Typography>
                        <Typography variant='body1' align='center' style={{color: "tomato"}}>
                        From - Programming Hero
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{color: "tan"}}>
                        React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model.
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}> 2021 - 2022 </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            mern stack
                        </Typography>
                        <Typography variant='body1' align='center' style={{color: "tomato"}}>
                        From - Programming Hero
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{color: "tan"}}>
                        MERN Stack is a technology that is a user-friendly full-stack JavaScript framework for building applications and dynamic websites. MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. 
                        </Typography>
                    </Box>
                    
                </Box>
            </Box>
        </>
    )
}

export default Resume;