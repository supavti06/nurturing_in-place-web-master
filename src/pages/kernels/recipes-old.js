import { navigate } from 'gatsby'
import MainFeaturedPost from '../../components/mainFeaturedPost'
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import React from "react"
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid';
import HeroBanner from '../../components/heroBanner'
import TwitterIcon from '@material-ui/icons/Twitter';
import Main from '../../components/main';
import { withStyles } from '@material-ui/core/styles';
import Kernel from "../../components/kernel"
import "react-responsive-modal/styles.css";
import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/kidscomp.jpg'

const styles = theme => ({
    root: {
    //   flexGrow: 1,
    },
    side: {
        height: '50%',
        backgroundColor: 'blue',

    },
    hightlights: {
    },
    p:{
      padding: 20
    },
    modal: {
      padding: 100
    },
    intro: {
      padding: 20,
      // backgroundColor: '#ededed'
      backgroundColor: '#e0f6ff'
    }
});
const nurturingHeroPage = {
  title: 'Family Favorite Recipes',
  description: "Recipes help you use Kernels more effectively by arranging them in a way that you can get the results with your kids you desire",
  image: seoImage,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};
const kernelData = [
  {
    id: 1,
    Title: `Transitioning Into Chore Time`,
    Subheader: `Our little ones have always liked helping out, so this recipe isn’t for them. But if you teens, say Randall and Wanda, well that’s a different story. If these two are playing video games or watching television, you could explode a bomb in the next room and they wouldn’t budge, so forget pleading with them to do laundry or pick vegetables from the garden. Transitioning into Chore Time got much easier for us once we began baking these ingredients together:`,
    Features: [
      `Sight Schedules: Use this simple kernel to set up a schedule for chores.  This gives you a way to begin each day with a plan for what will happen that day.  Establishing a daily routine will reduce conflict and help everyone feel like they are accomplishing things.`,
      `Mystery Motivators. Here is a tested and effective way to motivate our kids.  Every time they get a chore done on the schedule, surprise with a mystery motivator reward.`
      // `Sight Schedules. Follow the three steps found in the Kernels page of this website. Set your family up for success by adding these additional steps: Let everyone know that in the morning, after breakfast, they’ll get to schedule their day. Ask older kids how long they think they’ll need to get each chore done.`,
      // `Mystery Motivators. Follow the four steps found in the Kernels page of this website. Set your family up for success by adding these additional steps: Ask everyone the night before which of the mystery motivators they’d like to add to the mix. Who knows what the app will select??? Add an extra mystery motivator that no one knows about but that you have good reason to believe your kids will love. Surprises can be great fun and really motivating for the next round!`,
    ],
    Endnote: ``,
    Url: '',
    Footer: true,
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
  },
  {
    id: 2,
    Title: `Getting Up in the Morning Recipe`,
    Subheader: `Keisha, our youngest, was never good at getting up, and now that there’s really nowhere to go, she puts up quite a struggle when we say it’s time to get up. We really needed a recipe for helping our lovely Keisha get the day going. This recipe involves just two kernels, though you can add more if you want.`,
    Features: [
      `1) Beat the Timer. Follow the six steps found in the Kernels page of this website. Set your family up for success by adding these additional steps:`,
      `Let everyone know that in the morning, when the alarm sounds, the timer is ticking.`,
      `Ask everyone how many minutes they’d like to get up. Agree on the amount of time they’ll have and then set the timer.`,
      `2) Mystery Motivators. Follow the four steps found in the Kernels page of this website. Set your family up for success by adding these additional steps:`,
      `Ask everyone the night before which of the mystery motivators they’d like to add to the mix. Who knows what the app will select???`,
      `Add an extra mystery motivator that no one knows about but that you have good reason to believe your kids will love. Surprises can be great fun and really motivating for the next round!`,
    ],
    Endnote: ``,
    Url: '',
    Footer: true,
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #eea849, #f46b45)',
  },
  {
    id: 3,
    Title: `Disinfect Is safety (DIS)`,
    Subheader: `In today’s world, disinfecting surfaces that we touch after having been outside is key to keeping everyone safe. It’s not easy to remember all the steps, and sometimes kids don’t want to take the time to do all of them. This recipe is gold for helping everyone continue to DIS, even when they don’t want to. `,
    Features: [
      `1) Banning the Bad Bozos. Follow the four steps found in the Kernels page of this website. Set your family up for success by adding these additional steps:`,
      `Ask everyone before leaving the house, what they should do when they get home to keep themselves and others safe. `,
      `Leave a sign at the front door or at the garage entry to the house reminding anyone entering the house to wash their hands immediately. `,
      `2) PAX Wanna Wanna Wanna (WWW). Follow the three steps found in the Kernels page of this website. `,
      `3) Kudos Notes. Follow the four steps found in the Kernels page of this website. Set your family up for success by adding these additional steps:`,
      `Let your kids know in advance that earned Kudos Notes will sometimes lead to Bonus Bucks. Kids should keep an eye out for Kudos Notes, because they’ll never know where you might put them after they’ve done something that truly delights you. `,
      `Tape Kudo Notes to the wall near where you saw someone doing something important. Don’t forget to write exactly what your kid did that you value. `,
    ],
    Endnote: ``,
    Url: '',
    Footer: true,
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
  },
]
class Recipes extends React.Component {
  state = {
    open: false,
    email: "",
    mainPost: [],
    loading: true
}

  onOpenModal = event => {
    this.setState({ open: true });
  };

  onCloseModal = event => {
    this.setState({ open: false });
  };
  handleInputChange = event => {
    this.state.email = event.target.value
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.email == ""){
        alert("You must enter a valid email address")
    }
    else{
      axios.post('https://nurturinginplace.net:3000/subscribers',
        {
            email: this.state.email
        })
        .then(res => {
          // this.setState({ open: false });
          // alert("You have been successfully subscribed.")
          navigate("/subscription-confirmation")
        })
    }
  }
  componentDidMount(){
    // axios.get(`https://nurturinginplace.net:3000/blog/18`)
    //   .then(res => {
    //     this.setState({
    //       loading: false,
    //       mainPost: res.data,
    //      });
    //   })
}
  componentWillMount() {
    axios.get(`https://nurturinginplace.net:3000/blog/18`)
    .then(res => {
      this.setState({
        loading: false,
        mainPost: res.data.data,
        });
    })
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
  return (
    <Layout>
      <SEO image={seoImage} title="PAX family favorite Recipes | Proven recipes to help your childern stay healthy and happy." />
      <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15, marginBottom: 20}} >
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/kernels">
            Kernels
          </Link>
          <Typography color="textPrimary">Recipes</Typography>
        </Breadcrumbs>
      </div>
        {/* <HeroBanner post={nurturingHeroPage} /> */}
        {/* {!this.state.loading && <MainFeaturedPost post={this.state.mainPost} />} */}
        <HeroBanner post={nurturingHeroPage} />

        {/* <div className={classes.intro}>
          <Typography variant="h2">Introduction to PAX Family Favorite Recipes</Typography>
          <Typography variant="body1">
          Greetings to everyone staying home with kids during the coronavirus crisis.
          “Shelter in place” is the message you and I have been hearing on the news and social media.
          It’s frightening. And hard.
          Some of us are working from home and managing kids at the same time. Others have already lost work and struggle to manage kids at home 24-7 with little money.
          In my family, the kids were immediately both excited and worried. Staying home from school was cool, but not seeing friends or going to ballet and soccer – that upset them. From our balcony, the kids could see how things were changing: across our neighborhood, in the street, everyone looked and acted different. It was scary for the kids, but exciting too.
          Before we knew that this was a global pandemic, it all felt kind of fun. We were getting to spend time with each other. More time to play, relax, and laugh together.
          But soon our kids started getting on each other’s nerves. The teens got bored playing endless rounds of Fortnight, and even the little ones got tired of not knowing what to do with themselves. Whether we knew it or not, all of us were starting to yearn for more structure.

          Sometimes the kids wanted to stay up late because they don’t have to go to school in the morning. We tried to tell them the value of routines, but they didn’t get it.

          We also found ourselves getting tense and raising our voices. Saying “Because I said so” wasn’t helpful with either the teens or the little ones.

          I felt a bit like one those people on stranded on ships, wondering whether we were going to run out of food, toilet paper, and money. How will we manage? How will we hold onto our loving family?

          PAX kernels have been a life raft. They’re super helpful for building structure into our lives because the kernels are so simple and easy to use. But we also found we needed advice for how to put the kernels together as ingredients in larger recipes.
          </Typography>
          </div> */}
     <div style={{paddingBottom: 80}}>

        <Grid container spacing={5}>
          <p className={classes.p}>
          </p>
          <Kernel title="" posts={kernelData}/>
        </Grid>
        </div>

  </Layout>
    )
  }
}

  export default withStyles(styles)(Recipes);
