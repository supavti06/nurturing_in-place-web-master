import Link from '@material-ui/core/Link';
import {Box, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from "react"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
var homeImage1 = 'https://nurture-images.s3-us-west-2.amazonaws.com/familytogethernew2.png';
var homeImage2 = 'https://nurture-images.s3-us-west-2.amazonaws.com/familytogethernew.png';
var homeImage3 = 'https://nurture-images.s3-us-west-2.amazonaws.com/familytogethernew3.png';

const styles = theme => ({
    root: {

    },
    button: {
        // background: '#FD0083',
        background: '#5fe387',
        padding: 20,
        borderRadius: '50px',
        // border: '3px solid #FD0083',
        border: '3px solid #5fe387',
        // color: 'white',

        color: 'black',
        '&:hover': {
        color: 'white',

            textDecoration: 'none',
            background: 'none',
            border: '3px solid white'
        }
    },
    imageContainer: {
        // left: 0,
        // paddingTop: 100,
        backgroundColor: "#00596B",
    },
    carouselImage: {
        minHeight: 450,
        maxHeight: 650,
        paddingTop: 200,
        // width: 530,
        // height: "100%",
        objectFit: "cover",
        backgroundColor: "#00596B",
        [theme.breakpoints.up('md')]: {
            paddingTop: 0,
            paddingLeft: 540,
            // marginBottom: 100,
                objectFit: "cover",
            // paddingLeft: 0,
        },
    },
    heading: {
        textAlign: "left",
        fontSize: 32,
        marginRight: 10,
        lineHeight: 1.1,
        [theme.breakpoints.up('md')]: {
            fontSize: 44,
            lineHeight: 1.2,
        },
    },
    subheading: {
        textAlign: "left",
        fontSize: 18,
        lineHeight: 1.2,
        marginRight: 30,
        marginTop: 3,
        [theme.breakpoints.up('md')]: {
            marginTop: 20,
            fontSize: 24,
            lineHeight: 1.2,
        },
    },
    link: {
        textAlign: "left",
        fontSize: 20,
        margin: "1rem",
        [theme.breakpoints.up('md')]: {
            fontSize: 30,
            marginTop: 10,
        },
    },
    headingContainer: {
        left: "7%",
        width: "100%",
        top: 20,
        color: "white",
        position: 'absolute',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            top: 130,
            width: "36%",
        },
    }
})

class HomeCarousel extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* dynamicHeight={false} */}
                <Carousel showStatus={false} dynamicHeight={true} interval={4000} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <div className={classes.imageContainer}>
                            <img className={classes.carouselImage} src={homeImage1} alt="happy family"/>
                        </div>
                        <div className={classes.headingContainer}>
                            <Typography variant="h3" className={classes.heading} color="inherit">
                                Nurturing In Place
                            </Typography>
                            <Typography variant="h5" className={classes.subheading} color="inherit">
                                Your guide to staying happy and healthy during the pandemic
                            </Typography>
                            <Box textAlign="left" lineHeight={7} >
                                <Link variant="button" className={classes.button} href={`/takingcare/Nurturing-In-Place`}>
                                    Learn More
                                </Link>
                            </Box>

                        </div>
                    </div>
                    <div>
                        <div className={classes.imageContainer}>
                            <img className={classes.carouselImage} src={homeImage2} alt="family taking a selfie"/>
                        </div>
                        <div className={classes.headingContainer}>
                            <Typography variant="h3" className={classes.heading} color="inherit" gutterBottom>
                                Kernels For Kids
                            </Typography>
                            <Typography variant="h5" className={classes.subheading} color="inherit">
                                How to get your kids to do the things that you want them to do
                            </Typography>
                            <Box textAlign="left" lineHeight={7} >
                                <Link variant="button" className={classes.button} href={`/kernels`}>
                                    Learn More
                                </Link>
                            </Box>
                        </div>
                    </div>
                    <div>
                        <div className={classes.imageContainer}>
                            <img className={classes.carouselImage} src={homeImage3} alt="another happy family "/>
                        </div>
                        <div className={classes.headingContainer}>
                            <Typography variant="h5" className={classes.heading} color="inherit" gutterBottom>
                                Useful resources for parents
                            </Typography>
                            <Typography variant="h5" className={classes.subheading} color="inherit">
                                Informative evidence-based parenting tips you can use
                            </Typography>
                            <Box textAlign="left" lineHeight={7} >
                                <Link variant="button" className={classes.button} href={`/other`}>
                                    Learn More
                                </Link>
                            </Box>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default withStyles(styles)(HomeCarousel);