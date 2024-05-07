import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    banner: {
        padding: theme.spacing(2),
        // backgroundColor: theme.palette.primary.main,
        backgroundColor: '#76ABAE',
        color: theme.palette.primary.contrastText,
        textAlign: 'center',
        marginTop: theme.spacing(8),
        maxWidth: '60%',
        margin: '0 auto',
        height: 200, // Set height to 200px
        display: 'flex', // Use flexbox for centering
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
    },
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: '#222831',
    },
}));

const SignupBanner = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Typography variant="h5">Get Started!</Typography>
            <Typography variant="body1">Login or sign up to access our services! Chat with our administratator or other fellow refugees. You can also send queries for any help you need!</Typography>
            <Button component={Link} to="/login" variant="contained" color="secondary" className={classes.button}>
                Login or Sign Up!
            </Button>
        </div>
    );
}

export default SignupBanner;
