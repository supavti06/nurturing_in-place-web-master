import BlogCard from '../../components/blogCard';
import window from 'global'
import ReactPlayer from 'react-player'
import {Box,Typography, Button,TextField,Container, Icon} from '@material-ui/core';
import axios from 'axios';
import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid';
import HeroBanner from '../../components/heroBanner'
import { withStyles } from '@material-ui/core/styles';
import KernelLinks from "../../components/kernelLinks"
import closeButton from '../../images/png/closesymbol.png';
import "react-responsive-modal/styles.css";
import paxtools from '../../images/Pax Tools Verticle.webp';
import "./pax.css"
import video from '../../videos/Kernels4Kids.mp4';
import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

var kernelImage1 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa.jpg'
var kernelImage2 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa1.jpg'
var kernelImage3 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa2.jpg'
var kernelImage4 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa3.jpg'
var kernelImage5 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa4.jpg'
var kernelImage6 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa5.jpg'
var kernelImage7 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa6.jpg'
var kernelImage8 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa7.jpg'
var kernelImage9 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa8.jpg'
var kernelImage10 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa9.jpg'
var kernelImage11 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa10.jpg'
var kernelImage12 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa11.jpg'
var kernelImage13 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa12.jpg'
var kernelImage14 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa13.jpg'
var kernelImage15 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa14.jpg'
var kernelImage16 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa15.jpg'
var kernelImage17 = 'https://nurture-images.s3-us-west-2.amazonaws.com/pixa15.jpg'

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
    image: {
      width: 250,
      height: 'auto',
      margin: 10
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    closeButton: {
      position: "relative",
      marginTop: 49,
      width: 25,
      height: 25,
      display: "none",
      zIndex: 2,
      [theme.breakpoints.up('sm')]: {
        position: "fixed",
        display: "block",
        right: 75,
        bottom: 203,
        marginLeft: 2,
        border: "1px solid black",
      }
    },
    video: {
      position: "fixed",
      zIndex: 2,
      bottom: 0,
      display: "none",
      [theme.breakpoints.up('sm')]: {
        display: "block",
        right: 100,
      }
    },
    videoBlock: {
      height: 0,
      [theme.breakpoints.up('sm')]: {
        paddingTop: 0,
        marginTop: 0,
        height: 285,
        }
      }
});
const nurturingHeroPage = {
  title: 'Kernels For Kids',
  description: "There probably isn’t anything more frustrating than when kids don’t do what you want them to. It can lead to dangerous behavior and as they get older, it can lead to a never-ending cycle of conflict that destroys your relationship. There is a way to break this cycle and get your kids to do what you want at the same time you build a relationship of trust.  You can do this with kernels—simple ways of promoting the behavior you and your child want.",
  image: seoImage,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};
export const kernelData = [
  {
    id: 1,
    Title: "A Powerful Way to Motivate Your Kids",
    title: "A Powerful Way to Motivate Your Kids",
    subheader: "When adults identify and warmly reinforce positive behaviors, children will do more of those actions. On the other hand, if adults pay more attention to mistakes and misbehaviors they will see more of the behaviors they don’t want. With Kudos Notes, you can focus the attention on positive performance. These notes are more powerful than verbal praise. Why? Because children like to keep and show others their Kudo Notes.",
    Features: [
      'Make a list of the behavior you want to see more of from your child – like getting homework done without being told, completing chores on time, or getting along with siblings.',
      'When you notice the behavior, write a Kudos Note! Be sure to include what they did and how it made you feel. Post the note where your child will find it.',
      'Help your child create a collection of Kudo notes to share or read again. Take a picture and share it with family or friends.',
      'Teach and encourage the whole family to write Kudos Notes to show gratitude and appreciation.',
    ],
    Endnote: 'This tested and proven strategy teaches children to receive and give praise for good things in life, something only humans can do. Because Kudos Notes specifically identify a behavior, your action helps the child repeat that behavior. Kudos Notes lift up our attention for the behaviors we want to encourage—creating peace, productivity, health, and happiness for everyone.',
    Footer: true,
    Url: '/kernels/PAX/A-Powerful-Way-to-Motivate-Your-Kids',
    download: require('../../pdf/Kudos Notes.pdf'),
    // Color: '#e6ffd4',
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
    image: kernelImage1
  },
  {
    id: 2,
    Title: "Mystery Motivators: Another Powerful Way to Motivate Your Kids",
    title: "Mystery Motivators: Another Powerful Way to Motivate Your Kids",
    subheader: `"Grandma’s Law" says you can have your dessert when you finish your vegetables. That’s the theory at play when we use Mystery Motivators. These short and simple activities motivate children to perform well, even for tasks they do not enjoy like cleaning up or doing homework. Mystery Motivators are things children are not normally permitted to do.`,
    Features: [
      'Pick several free, fun, active prizes the children may enjoy that will serve as Mystery Motivators. Consider taking funny pictures, having a quick dance party, or make paper airplanes.',
      'Write each prize idea on a slip of paper. Store them in a special jar, bag, hat, or use the Mystery Motivators feature on the PAX Tools App. Ask children to use their imagination with simple fun that does not cost money Then add them to the PAX Tools App.',
      'Draw a prize as a reward when the child has performed well. Make it appear randomly selected, even if you have a specific one in mind.',
      'Do the prize along with the child. Prizes done together are the most fun and motivating—that cost nothing, yet builds imagination for things without batteries.',
    ],
    Endnote: 'This tested and proven strategy jump starts motivation for completing tasks and positive behavior by harnessing the brain’s natural reward-seeking instinct. Mystery Motivators help children’s understanding of cause and effect, while creating more peace, productivity, health, and happiness for everyone!',
    Footer: true,
    Url: '/kernels/PAX/Mystery-Motivators:-Another-Powerful-Way-to-Motivate-Your-Kids',
    download: require('../../pdf/Mystery Motivators.pdf'),
    // Color: '#e6ffd4',
    Color: 'linear-gradient(to bottom, #eea849, #f46b45)',
    image: kernelImage2
  },
{
    id: 3,
    Title: "Random Sticks: A Fair Way to Make Decisions That Reduces Arguments",
    title: "Random Sticks: A Fair Way to Make Decisions That Reduces Arguments",
    subheader: `Sometimes, when children are tired or cranky they say things like, "That's not fair!" They may complain that you are playing favorites. You can increase the peace by using Random Sticks to decide who gets to do fun things like pick the video game, or to do chores like taking out the trash or walking the dog.`,
    Features: [
      `Write the name of all the kids and even the adults on individual popsicle-sticks (even slips of paper) and place them in a cup. Or, use the free PAX Tools app feature, '"Random Sticks". The App is great, because people almost always have their phone nearby.`,
      `Instead of choosing or taking turns, pick a stick, read the name, and return it to the cup. The App resets automatically.`,
      'Draw a prize as a reward when the child has performed well. Make it appear randomly selected, even if you  have a specific one in mind.',
      `Let the children pick the stick sometimes. This shows just how “fair” it is. Sometimes, you may need to secretly pick a particular child – like taking out the trash after dark.', ‘Compliment everyone for being a good sporteven when they don’t get picked.`
    ],
    Endnote: 'This family tested and proven strategy improves children’s cooperation, by removing the sense of favoritism by adults. Best of all, random calling stops whining, “that’s not fair!” And, it increases the peace, productivity, health, and happiness around home.',
    Footer: true,
    Url: '/kernels/PAX/Random-Sticks:-A-Fair-Way-to-Make-Decisions-That-Reduces-Arguments',
    download: require('../../pdf/Random Sticks.pdf'),
    // Color: '#e6ffd4',
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
    image: kernelImage17

  },

{
    id: 4,
    Title: "Shared Vision: How to Arrive at Clear Expectations That Your Child Buys Into",
    title: "Shared Vision: How to Arrive at Clear Expectations That Your Child Buys Into",
    subheader: 'Often, children aren’t on the same page as adults about expectations. This can lead to frustration and arguments. The solution? A shared Vision makes expectations clear and prevents conflict. Please watch this video to help use shared vision. The free PAX Tools App helps create a shared vision for daily activities.',
    Features: [
      'Before the upcoming activity, ask the child, “What do we need to see, hear, feel and do MORE of -- to make sure this activity goes well?”',
      'Also ask, “What do we need to see, hear, feel, and do LESS of to make sure it goes well?”',
      `Encourage children to be thoughtful, with questions: "Would throwing things be helpful or hurtful to our family?" This builds self-regulation.` ,
      `Prompt children to give MORE examples wanted actions, out numbering the LESS. For example, "Would MORE quiet voices and helping each other? when we’re on the phone? A long list of "don'ts" can trigger children to misbehave.`,
      `Practice first if needed. For example, ask the child to practice different volumes and help choose what “quiet” voice would be best for all. Praise the developing skills—not just perfection.`,
      `Before an activity, review the Shared Vision. During the activity, compliment children when they exhibit the MORE behaviors. Offer quiet reminders about the LESS behaviors.`,
      'Talk with your child about how it went after the activity. “What did we do well?” And, “What do we want to work on for the next time?”',
      'Make sure to pick a Mystery Motivator from the PAX Tools App to celebrate success.',
    ],
    Endnote: 'Shared vision is a tested & proven strategy that reduces conflict and frustration by ensuring adults and children are on the same page with expectations before, during, and after an activity. When adults and children have a Shared Vision, it creates peace, productivity, health, & happiness for everyone.',
    Footer: true,
    Url: '/kernels/PAX/Shared-Vision:-How-to-Arrive-at-Clear-Expectations-That-Your-Child-Buys-Into',
    download: require('../../pdf/Shared Vision.pdf'),
    // Color: '#e6ffd4',
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
    image: kernelImage4
  },

 {
    id: 5,
    Title: "Feeling Footsteps: A Simple Way to Get Grounded in Tough Times",
    title: "Feeling Footsteps: A Simple Way to Get Grounded in Tough Times",
    subheader: 'You may not know how much more you can take of challenges like friends getting ill and schools being closed. But you are mightier than you know. Here’s a daily practice that can put you in touch with power you didn’t know you had. Here’s how:',
    Features: [
      'Go outdoors somewhere that you can be alone. Take off your shoes. Close your eyes.',
      'Stand in place for a moment with your eyes closed getting your balance.',
      'Slowly turn in a circle for 15 seconds and come to a halt. Once again, get your balance.',
      'Now walk for 60 seconds keeping your eyes closed. No matter what your bare feet encounter, keep your eyes closed. If you butt up against an obstacle, turn away and continue walking.',
      'After 60 seconds, open your eyes and look back on the surfaces you were able to walk without shoes or sight… you are mightier than you imagine!'
    ],
    Endnote: 'This is an evidence-based kernel about willingness to experience all that life offers. It is based on Acceptance and Commitment Training. There is good evidence that acceptance of challenging sensations, emotions, and memories can improve our resilience and overall experience of life itself.  PAX means peace, productivity, health and happiness.',
    Url: '/kernels/PAX/Feeling-Footsteps:-A-Simple-Way-to-Get-Grounded-in-Tough-Times',
    Footer: true,
    // download: require('../../pdf/PAX Breaks.pdf'),
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #eea849, #f46b45)',
    image: kernelImage5
  },

  {

    id: 6,
    Title: "Your Family Shield: Help Your Family Come Together Around the Best in Your Family",
    title: "Your Family Shield: Help Your Family Come Together Around the Best in Your Family",
    subheader: 'When you’ve created this, it protects everything you care for. It’s your flag, your purpose statement, your family crest. It encourages family connection and personal meaning. To design your family shield or one just for you if you’d like, try this:',
    Features: [
      'On a large oaktag sheet, draw two connected half circles at the top of the page. From their point of connection, draw a straight line to the lower part of the paper. Connect the outer edges of the half circles to the lower end of the vertical line with two long, arcing lines. Draw two horizontal lines across the shield to form six sections.',
      'Make a few copies of this. Frame and hang one. Draw it again on tee shirts and take a photo with everyone wearing it. Even when you are not wearing the tee, your family shield will be there in your hearts, protecting your connection with each other.',
  'Now, in each of the open sections, draw something that you love doing with others, something that makes all of you laugh, a memory of a time you or someone in the family did something important, a time you were scared but did great things, a drawing of yourselves, a drawing of your home.' ],
    Endnote: 'This is an evidence-based perspective-taking kernel based on Acceptance and Commitment Training. Research has shown that clearly saying what you care about makes it likely that you’ll act with purpose and meaning at times when it will make a difference. PAX means peace, productivity, health and happiness.',
    Url: '/kernels/PAX/Your-Family-Shield:-Help-Your-Family-Come-Together-Around-the-Best-in-Your-Family',
    Footer: true,
    // download: require('../../pdf/PAX Breaks.pdf'),
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
    image: kernelImage6

  },
  {
    id: 7,
    Title: "The Present Moment for Kids: Introducing Your Kids to Mindfulness",
    title: "The Present Moment for Kids: Introducing Your Kids to Mindfulness",
    subheader: 'Instructions: This strategy can be used with children and teens, with support based on their age.',
    Features: [
      'Three-to-five times a day, please stop whatever you and the children are doing—preferably in different spots at home, in different rooms, outside or wherever.',
      'Ask young people to eyes, ears, nose, taste and touch. Have them linger on their senses counting slowly. Now prompt them to notice how that changes in their body and mind.',
      'This simple exercise creates more PAX in yourself and others around you.',
      'PAX means four important aspects for all people of every age: Peace, Productivity, Health and Happiness.'],
    Endnote: 'This is an evidence-based perspective-taking kernel based on Acceptance and Commitment Training. Research has shown that clearly saying what you care about makes it likely that you’ll act with purpose and meaning at times when it will make a difference. PAX means peace, productivity, health and happiness.',
    Url: '/kernels/PAX/The-Present-Moment-for-Kids:-Introducing-Your-Kids-to-Mindfulness',
    Footer: true,
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
    image: kernelImage7
  },
  {
    id: 8,
    Title: "Present Moment for Parents: Increasing Your Patience and Your Appreciation of Your Child",
    title: "Present Moment for Parents: Increasing Your Patience and Your Appreciation of Your Child",
    subheader: `If we are having trouble with one of your kids, you may find yourself having mostly negative thoughts about him or her.  This kernel helps you to step back and pay attention to your child in a calm and peaceful way. By paying attention to what you like about your child, you will bring out those qualities.`,
    Features: [
      'Look at 5 things your child is wearing',
      'Listen to 4 sounds your child is making',
      'Smell 3 things near your child',
      'Taste 2 things your child has recently tasted',
      'Touch 1 thing your child has recently touched',
    ],
    Endnote: 'This simple exercise creates more PAX in yourself and others around you. PAX means four important aspects of life: Pease, Productivity, Health, and happiness. Please visit www.paxis.org for more info',
    Url: '/kernels/PAX/Present-Moment-for-Parents:-Increasing-Your-Patience-and-Your-Appreciation-of-Your-Child',
    Footer: true,
    // download: require('../../pdf/Present Moment Kernel.pdf'),
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
    image: kernelImage8

  },
  {
    id: 9,
    Title: "Banning the Bad Bozos: Reducing Young Children’s Fear",
    title: "Banning the Bad Bozos: Reducing Young Children’s Fear",
    subheader: 'Everyone loves our good friend, Bozo the Clown. Good Bozo makes us laugh. But bad Bozos are out there too. They make us sick. Smart families ban the bad Bozos from their homes. In the morning, young kids can be asked to help you look around for signs of bad Bozos. If there are no signs of bad Bozos having entered the house, the disinfecting worked!',
    Features: [
      'Put on a pair of kitchen gloves to protect your hands.',
      'Use a disinfectant to spray down surfaces that anyone who went outside has touched after returning to the house.',
      'Carefully remove kitchen gloves from the inside out and leave them in the sun to dry.',
      'Ask everyone when you see them coming in to immediately go to the sink and wash their hands with warm water and soap for at least 20 seconds, making sure to scrub all fingers, thumbs, and fingernails.',
    ],
    Endnote: 'This evidence-based kernel is powerful because anyone banning the Bozos is a family hero. We need everyone in our families to be heroes, and this kernel is a great way to enlist new heroes among all our kids, even the young ones.',
    Url: '/kernels/PAX/Banning-the-Bad-Bozos:-Reducing-Young-Childrens-Fear',
    Footer: true,
    // download: require('../../pdf/Present Moment Kernel.pdf'),
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
    image: kernelImage9
  },

  {
    id: 10,
    Title: 'Wanna Wanna Wanna: Getting Up the Motivation For Doing Unpleasant, but Necessary Things',
    title: 'Wanna Wanna Wanna: Getting Up the Motivation For Doing Unpleasant, but Necessary Things',
    subheader: 'Sometimes things you know you ought to do are a pain in the neck. For example, following all the steps for DIS (Disinfecting Is Safety) is a lot of work that you may not wanna do. PAX WWW is a way of playfully making the irritation of having to do something fun, even when it is also irritating. To use WWW:',
    Features: [
      'Ask kids to say the name of the task or chore they don’t wanna do.',
      'Now ask them to say the name of the chore out loud, very loud, as many times as they can for 20 seconds.',
      'Ask everyone to observe their faces. Is there anyone who’s not smiling? We doubt it.',
    ],
    Endnote: 'This kernel helps uncover the unworkability of our rigid rules and creates fun in otherwise challenging situations. Asking kids to notice the changes on their faces does not take away any of their irritation with having to do chores, but it sure does add a bit of fun into the mix, thus creating PAX: peace, productivity, health, and happiness for all!',
    Url: '/kernels/PAX/Wanna-Wanna-Wanna:-Getting-Up-the-Motivation-For-Doing-Unpleasant-but-Necessary-Things',
    Footer: true,
    // download: require('../../pdf/Present Moment Kernel.pdf'),
    Color: 'linear-gradient(to bottom, #eea849, #f46b45)',
    image: kernelImage10

  },
  {
    id: 11,
    Title: 'Better Safe Than Sorry: Taking Advice with a Grain of Salt',
    title: 'Better Safe Than Sorry: Taking Advice with a Grain of Salt',
    subheader: 'How do you know if a family member is giving you good advice? Imagine you were in the back yard and you saw a wall of haze approaching. How would you know if it was a cool fog or dangerous smoke? If you’ve never been in a fire, your mind might tell you it’s just fog. But if it turned out to be smoke and you didn’t run, you could get sick or injured. At home, family members sometimes warn about dangers you can’t see and yet, they may turn out to be right. Learn to heed safety warnings before deciding to believe your mind. Here’s how:',
    Features: [
      'When someone gives you safety advice you don’t think is true, say, “I don’t think that’s true, but I don’t know for sure.”',
      'Then, ask an adult. If there are no adults around or it’s an adult telling you, say, “My mind is telling me not to believe you, but better safe than sorry.” ',
      'Follow their advice now and watch what happens. Later, you can ask others if this was the best choice.',
    ],
    Endnote: 'This is an evidence-based perspective-taking kernel based on Acceptance and Commitment Training. Noticing that your mind tells you to believe things that you don’t know for sure about is part of psychological flexibility, a skillset that is important for creating PAX in the home. ',
    Url: '/kernels/PAX/Better-Safe-Than-Sorry:-Taking-Advice-with-a-Grain-of-Salt',
    Footer: true,
    // download: require('../../pdf/Present Moment Kernel.pdf'),
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
    image: kernelImage11

  },
  {
    id: 12,
    Title: 'Walking the Walk',
    title: 'Walking the Walk',
    subheader: 'You know what you care about, but sometimes you feel stopped in your tracks. How do you get yourself in motion? Here’s a family activity that can get everyone walking on the balance beam of a life worth living:',
    Features: [
      'On an open stretch of living room floor, lay out 15 feet of 2” masking or duct tape. ',
      'On the tape, use colored markers to write out things that you care about, things that you like doing as a family, things that are important to your future life, things you want to do in the future. ',
      'Using index cards, write out some of the nastier things that you say to yourself or that you’ve heard others say. Go ahead – just for this exercise, it’s okay to write these things. “You’re no good,” “You’ll never do that,” “You failed last time” are examples of things that you might write on the index cards. ',
      'Shuffle the cards and give each person in the family one. ',
      'Take turns standing on one end of the balance beam and walking slowly from one end to the other. ',
      'Family members take turns laying out their index cards on the floor beside the balance beam. When walking the walk, read everything written on the balance beam and what’s on the index cards. For those who don’t read, others can read what’s written while others encourage the walker to be mighty and continue walking the walk. ',
    ],
    Endnote: 'This is an evidence-based perspective-taking kernel based on Acceptance and Commitment Training. Getting your feet moving in line with your values is part of psychological flexibility, a skillset that is important for generating PAX in the home. ',
    Url: '/kernels/PAX/Walking-the-Walk',
    Footer: true,
    // download: require('../../pdf/Present Moment Kernel.pdf'),
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
    image: kernelImage12

  },
  {
    id: 13,
    Title: 'Grandma’s Eyes: Learning to See Others the Way a Loving Grandma Does',
    title: 'Grandma’s Eyes: Learning to See Others the Way a Loving Grandma Does',
    subheader: 'Seeing yourself and others as being set in their ways or unable to change can limit your ability to be effective at finding peace and good will in the home. When you notice yourself seeing a family member – or even yourself – in a very fixed way, a great tool is to zoom out and look at them from the eyes of a loving grandma. Grandma will see them in relation to you and other children over her long lifetime of experience. She’ll see changes that are subtle even when you do not see them. To use Grandma’s Eyes:',
    Features: [
      'Sit still for a moment. If you can, close your eyes. Picture a loving grandma in front of you. See her skin, smell her perfume, hear the rhythm of her voice.',
      'Imagine you are looking from behind her eyeballs at you and at your family members. See the family from her point of view. ',
      'Now imagine that you’ve asked her, “Is this just the way I am?” or said to her, “Maybe that’s just the way he is. Maybe he can’t help himself.” What will loving grandma say?',
      'Take a moment now to write out the things that in your mind’s eye you’ve heard grandma say. Place this in an envelope and leave it somewhere safe so that when you notice you are losing perspective you can reread grandma’s words. ',
    ],
    Endnote: 'This is an evidence-based perspective-taking kernel based on Acceptance and Commitment Training. Being able to see yourself and others in different ways is part of psychological flexibility, a skillset that is important for generating PAX in the home.',
    Url: '/kernels/PAX/Grandmas-Eyes:-Learning-to-See-Others-the-Way-a-Loving-Grandma-Does',
    Footer: true,
    // download: require('../../pdf/Present Moment Kernel.pdf'),
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
    image: kernelImage13

  },
  {
    id: 14,
    Title: 'Sight Schedules: Turn Your Chaotic Family Day into a Comfortable Schedule',
    title: 'Sight Schedules: Turn Your Chaotic Family Day into a Comfortable Schedule',
    subheader: `Trouble getting kids to complete their chores? Sight Schedules are fun to make with the kids and they improve follow through because they give just the right amount of control over to your kids. Instead of pleading, try a PAX Sight Schedule.`,
    Features: [
      `Right after breakfast, calmly announce it’s time to draw the day’s PAX Sight Schedule.`,
      `List out the day's chores, games, exercise, and meals on a sheet of paper. Ask your kids to order their day's events from start to finish. Offer to
      help them make good choices so that they get to do the most fun
      activities after completing the less desirable ones.`,
      `Now, break out crayons, markers, and a giant sheet of oaktag paper.
      Rally everyone's creative juices to design the day's Sight Schedule
      and the post it someplace central for all to see.`,
    ],
    Endnote: `This evidence-based strategy allows kids the opportunity to schedule their chores in a
    way that works for them. Use PAX Sight Schedules to promote delayed gratification and
    healthy decision-making. This simple tool increases your children's
    peace, productivity, health, and happiness – even during tough times.`,
    Url: '/kernels/PAX/Sight-Schedules:-Turn-Your-Chaotic-Family-Day-into-a-Comfortable-Schedule',
    Footer: true,
    // download: require('../../pdf/Present Moment Kernel.pdf'),
    Color: 'linear-gradient(to bottom, #eea849, #f46b45)',
    image: kernelImage14

  },
  {
    id: 15,
    Title: `Seeing Ash When It’s Ash: Stepping Back to See Things Differently`,
    title: `Seeing Ash When It’s Ash: Stepping Back to See Things Differently`,
    subheader: `Being close-minded is like living near a mountain and seeing ash fall from the sky. The mountain environment gets heavy snowfall every winter, and this peak has never been an active volcano. After a freak volcanic eruption, a close-minded person sees ash in the air and says, “That’s just snow and that’s that.” This kind of rigid thinking can be harmful when you begin to think things have to be the way you think they’ve always been. Responding to our families during COVID-19 requires we see things in new ways. If you catch yourself saying things should be a certain way and everyone is supposed to do it just so, notice how it makes you feel. If this kind of approach is not producing PAX in your home, try Seeing Ash When its Ash. Here’s how:`,
    Features: [
      `When things are getting heated, listen to yourself. Do you hear yourself saying things like, “They can’t do that; it’s against the rule,” or, “I should do more work; I have to catch up”? `,
      'If so, thank your mind for alerting you to the rules that usually work. ',
      'Now ask yourself, “Is this a rule that’s important for health and safety in this situation?” ',
      'If it is, find little things that you and others are doing right, and write a Kudo Note. Keep writing Kudo Notes for the little things – they’ll add up and lead to bigger things.',
      'If your rule is not important for health and safety in this situation, repeat this: “GOTTA! GOTTA! GOTTA!” as fast as you can for 30 seconds. When you finish, look to see if anything about your demand upon yourself or others is changing. ',
    ],
    Endnote: 'This is an evidence-based perspective-taking kernel based on Acceptance and Commitment Training. There is good evidence that word repetition like this for at least 30 seconds can soften the glue that holds close-minded thoughts close to unhelpful demands upon yourself and others.',
    Url: '/kernels/PAX/Seeing-Ash-When-Its-Ash:-Stepping-Back-to-See-Things-Differently',
    Footer: true,
    // download: require('../../pdf/Present Moment Kernel.pdf'),
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
    image: kernelImage15
  },
  {
    id: 16,
    Title: `A Magical Way to Get Kids Moving Quickly`,
    title: `A Magical Way to Get Kids Moving Quickly`,
    subheader: `Are your children struggling to finish tasks on time – or at all? Try playing Beat The Timer to help children learn to block out distractions and stay on task until they finish.`,
    Features: [
      `Pick an activity that causes conflict or often goes unfinished – like cleaning up the bedroom.`,
      `Provide clear instructions for the upcoming activity or task.`,
      `Ask how long it usually takes to complete and set an optimistic goal to beat this time. Playfully challenge the children to Beat the Timer.`,
      `Set a timer and begin. Be sure it is visible throughout the activity or let your children know how much time they have left.`,
      `Cheer them on along the way by providing specific praise. “You are doing a great job picking up all the toys!” “I see you are working really hard on that!”`,
      `When the timer goes off, praise the child if they beat the timer or for their effort if they came close. Reflect on how they could do even better next time.`,
    ],
    Endnote: `This tested and proven strategy uses reduced allocated time to improve efficiency and reduce conflict. A clock ticking down enhances focus and helps us avoid distractions, just like focusing in a video game or the final seconds of the big game. Beat the timer helps children and adults get things done without frustration, increasing the peace, productivity, health, and happiness for everyone.`,
    Url: '/kernels/PAX/A-Magical-Way-to-Get-Kids-Moving-Quickly',
    Footer: true,
    download: require('../../pdf/Beat The Timer.pdf'),
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
    image: kernelImage16
  },


]
class Kernels extends React.Component {
  state = {
    open: false,
    email: "",
    show: true
}
  closeVideo = event => {
    this.setState({show: false})
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   if(this.state.email == ""){
  //       alert("You must enter a valid email address")
  //   }
  //   else{
  //     axios.post('https://nurturinginplace.net:3000/subscribers',
  //       {
  //           email: this.state.email
  //       })
  //       .then(res => {
  //         this.setState({ open: false });
  //         alert("You have been successfully subscribed.")
  //       })
  //   }
  // }
  // componentDidMount(){
  //   this.setState({
  //     open: true
  //   })
  // }
  render() {
    // const { open } = this.state;
    const { classes } = this.props;
    const width = window.innerWidth;
    // let player;
    // if(!this.state.show){
    //   player = <></>
    // }
    // else if (width > 500) {

    //   player =  <React.Fragment>
    //               <img src={closeButton} onClick={this.closeVideo} className={classes.closeButton} alt="close button"></img>
    //               <ReactPlayer height={254} width={450} className={classes.video} url={video} playing={true} controls={true} />
    //             </React.Fragment>
    // }
    // else {
    //   player =  <React.Fragment>
    //               <img src={closeButton} onClick={this.closeVideo} className={classes.closeButton} alt="close button"></img>
    //               <ReactPlayer height='100%' width='100%' className={classes.video} url={video} playing={true} controls={true} />
    //             </React.Fragment>
    // }
    return (
    <Layout>
      <SEO image={seoImage} title="PAX Kernels | simple activities for parents to help promote healthy and happy kids" />
      <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15, marginBottom: 20}} >
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/kernels">
            Kernels
          </Link>
          <Typography color="textPrimary">PAX</Typography>
        </Breadcrumbs>
      </div>
      <HeroBanner post={nurturingHeroPage} />
      <div>
        <Grid container spacing={0} >
          {/* <p className={classes.p}>
          </p> */}
            {kernelData.map(document => (
            <Grid className={classes.row} item xs={12} md={6}>
              <BlogCard pathPrefix="/kernels/PAX/" key={document.id} node={document} path=""></BlogCard>
            </Grid>
            ))
            }


        </Grid>
      </div>
        {/* {player} */}
      <div>
      {/* <Grid md={12} className={classes.videoBlock}>
      </Grid> */}
      <Container className='svg-bg' style={{ marginTop: 50, padding: 20, minHeight: 250}}>
      <Grid container spacing={5}  justify="center" >
        <Grid item sx sm={6}>
          <Box
          display="flex"
          width='100%'
          minHeight={200}
          paddingBottom={5}
          paddingTop={5}
          marginBottom={2}
          alignItems="center"
          justifyContent="center"
          flexDirection='column'>
          <Box mb={2}>
          <Typography style={{textDecoration: 'none'}} variant='h4'>Want more??</Typography>
            </Box>
            <Box style={{borderRadius:'10px' ,  margin: 'auto', padding: '5px 20px 5px 20px',background: 'linear-gradient(45deg, #846aad 30%, #ad6a90 90%)'}}>
              <a style={{textDecoration: 'none', color: 'white'}} href="https://www.paxtools.org/pax-tools-app"  ><Typography variant="overline">Download the app</Typography></a>
            </Box>
            <Box mt={2}>
              <a style={{margin: 'auto',color: 'purple'}} href="../../pdf/Pax Tools User Guide.pdf" download><Typography variant='body1'>Claim Your Manual</Typography></a>
            </Box>
          </Box>
        </Grid>
        <Grid item sx sm={6} align="center" >
          <div className={classes.image}>
            <img
                className={classes.img}
                src={paxtools} />
          </div>
        </Grid>
        </Grid>
      </Container>
      </div>
  </Layout>
    )
  }
}

  export default withStyles(styles)(Kernels);
