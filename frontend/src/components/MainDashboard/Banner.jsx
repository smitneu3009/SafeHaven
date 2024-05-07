import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  banner: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px',
    backgroundImage: 'url("src/images/banner.jpg")',
    backgroundSize: 'cover',
    height: '600px',
    marginTop: '50px',
  },
  contentContainer: {
    width: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px'
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  }
}));

const Banner = ({ onExploreCampsClick }) => {
    const classes = useStyles();
  
    return (
      <div className={classes.banner}>
        <div className={classes.contentContainer}>
          <h1>Welcome to SafeHaven</h1>
          <p>Welcome to SafeHaven, your refuge in times of uncertainty. Whether you've traveled far or near, your journey to safety is our priority. Here, you'll find a supportive community, resources to rebuild, and opportunities to thrive. Together, we'll navigate this new chapter with compassion and resilience. Welcome home to SafeHaven.</p>
          <button className={classes.button} onClick={onExploreCampsClick}>Explore Camps</button>
        </div>
      </div>
    );
  };

export default Banner;
