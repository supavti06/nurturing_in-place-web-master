
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

// const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
//   // Query for article nodes to use in creating pages.
//   resolve(graphql(request).then(result => {
//       if (result.errors) {
//         reject(result.errors)
//       }
//       return result;
//     })
//   )
// });

// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions }) => {
  const { createPage } = actions;

const info = [{ id: 12,  title: 'Nurturing In Place', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/familymain.jpg'},
{ id:25, title: 'When Life Hands You Lemons', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/sadwoman2.jpg'},
{ id:21, title: 'The Zen of Handwashing', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/handwashing.jpg'},
{ id:23, title: 'Learning to Be Kind to Yourself', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/familycomp2.jpg'},
{ id: 24, title: 'A Rough Day', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/unhappyimagery.jpg'},
{ id: 19, title: 'When You Are Completely Overwhelmed: Doing the Next Small Thing', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/sadwoman.jpg'},
{ id: 18, title: 'PAX Family Favorite Recipes', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/kidscomp.jpg'},
{ id: 27, title: 'Letting Go of Perfect', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/family1.jpg'},
{ id: 22 , title: 'Dear Parents, You Don’t Have to be Perfect', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/fatherandson.jpg'},
{id: 38 , title: 'Watching the Leaves Settle', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/child.jpg'},
{id: 39 , title: 'Finding Time to Love Our Kids', image: 'https://nurture-images.s3-us-west-2.amazonaws.com/happyboy.jpg'},
]

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

const kernelData = [
  {
    id: 1,
    Title: "A Powerful Way to Motivate Your Kids",
    Subheader: "When adults identify and warmly reinforce positive behaviors, children will do more of those actions. On the other hand, if adults pay more attention to mistakes and misbehaviors they will see more of the behaviors they don’t want. With Kudos Notes, you can focus the attention on positive performance. These notes are more powerful than verbal praise. Why? Because children like to keep and show others their Kudo Notes.",
    Image: kernelImage1
  },
  {
    id: 2,
    Title: "Mystery Motivators: Another Powerful Way to Motivate Your Kids",
    Subheader: `"Grandma’s Law" says you can have your dessert when you finish your vegetables. That’s the theory at play when we use Mystery Motivators. These short and simple activities motivate children to perform well, even for tasks they do not enjoy like cleaning up or doing homework. Mystery Motivators are things children are not normally permitted to do.`,
    Image: kernelImage2
  },
{
    id: 3,
    Title: "Random Sticks: A Fair Way to Make Decisions That Reduces Arguments",
    Subheader: `Sometimes, when children are tired or cranky they say things like, "That's not fair!" They may complain that you are playing favorites. You can increase the peace by using Random Sticks to decide who gets to do fun things like pick the video game, or to do chores like taking out the trash or walking the dog.`,
    Image: kernelImage3
  },
  {
    id: 4,
    Title: "Shared Vision: How to Arrive at Clear Expectations That Your Child Buys Into",
    Subheader: 'Often, children aren’t on the same page as adults about expectations. This can lead to frustration and arguments. The solution? A shared Vision makes expectations clear and prevents conflict. Please watch this video to help use shared vision. The free PAX Tools App helps create a shared vision for daily activities.',
    Image: kernelImage4
  },
 {
    id: 5,
    Title: "Feeling Footsteps: A Simple Way to Get Grounded in Tough Times",
    Subheader: 'You may not know how much more you can take of challenges like friends getting ill and schools being closed. But you are mightier than you know. Here’s a daily practice that can put you in touch with power you didn’t know you had. Here’s how:',
    Image: kernelImage5
  },
  {
    id: 6,
    Title: "Your Family Shield: Help Your Family Come Together Around the Best in Your Family",
    Subheader: 'When you’ve created this, it protects everything you care for. It’s your flag, your purpose statement, your family crest. It encourages family connection and personal meaning. To design your family shield or one just for you if you’d like, try this:',
    Image: kernelImage6
  },
  {
    id: 7,
    Title: "The Present Moment for Kids: Introducing Your Kids to Mindfulness",
    Subheader: 'Instructions: This strategy can be used with children and teens, with support based on their age.',
    Image: kernelImage7
  },
  {
    id: 8,
    Title: "Present Moment for Parents: Increasing Your Patience and Your Appreciation of Your Child",
    Subheader: `If we are having trouble with one of your kids, you may find yourself having mostly negative thoughts about him or her.  This kernel helps you to step back and pay attention to your child in a calm and peaceful way. By paying attention to what you like about your child, you will bring out those qualities.`,
    Image: kernelImage8
  },
  {
    id: 9,
    Title: "Banning the Bad Bozos: Reducing Young Children’s Fear",
    Subheader: 'Everyone loves our good friend, Bozo the Clown. Good Bozo makes us laugh. But bad Bozos are out there too. They make us sick. Smart families ban the bad Bozos from their homes. In the morning, young kids can be asked to help you look around for signs of bad Bozos. If there are no signs of bad Bozos having entered the house, the disinfecting worked!',
    Image: kernelImage9
  },
  {
    id: 10,
    Title: 'Wanna Wanna Wanna: Getting Up the Motivation For Doing Unpleasant, but Necessary Things',
    Subheader: 'Sometimes things you know you ought to do are a pain in the neck. For example, following all the steps for DIS (Disinfecting Is Safety) is a lot of work that you may not wanna do. PAX WWW is a way of playfully making the irritation of having to do something fun, even when it is also irritating. To use WWW:',
    Image: kernelImage10
  },
  {
    id: 11,
    Title: 'Better Safe Than Sorry: Taking Advice with a Grain of Salt',
    Subheader: 'How do you know if a family member is giving you good advice? Imagine you were in the back yard and you saw a wall of haze approaching. How would you know if it was a cool fog or dangerous smoke? If you’ve never been in a fire, your mind might tell you it’s just fog. But if it turned out to be smoke and you didn’t run, you could get sick or injured. At home, family members sometimes warn about dangers you can’t see and yet, they may turn out to be right. Learn to heed safety warnings before deciding to believe your mind. Here’s how:',
    Image: kernelImage11
  },
  {
    id: 12,
    Title: 'Walking the Walk',
    Subheader: 'You know what you care about, but sometimes you feel stopped in your tracks. How do you get yourself in motion? Here’s a family activity that can get everyone walking on the balance beam of a life worth living:',
    Image: kernelImage12
  },
  {
    id: 13,
    Title: 'Grandma’s Eyes: Learning to See Others the Way a Loving Grandma Does',
    Subheader: 'Seeing yourself and others as being set in their ways or unable to change can limit your ability to be effective at finding peace and good will in the home. When you notice yourself seeing a family member – or even yourself – in a very fixed way, a great tool is to zoom out and look at them from the eyes of a loving grandma. Grandma will see them in relation to you and other children over her long lifetime of experience. She’ll see changes that are subtle even when you do not see them. To use Grandma’s Eyes:',
    Image: kernelImage13
  },
  {
    id: 14,
    Title: 'Sight Schedules: Turn Your Chaotic Family Day into a Comfortable Schedule',
    Subheader: `Trouble getting kids to complete their chores? Sight Schedules are fun to make with the kids and they improve follow through because they give just the right amount of control over to your kids. Instead of pleading, try a PAX Sight Schedule.`,
    Image: kernelImage14

  },
  {
    id: 15,
    Title: `Seeing Ash When It’s Ash: Stepping Back to See Things Differently`,
    Subheader: `Being close-minded is like living near a mountain and seeing ash fall from the sky. The mountain environment gets heavy snowfall every winter, and this peak has never been an active volcano. After a freak volcanic eruption, a close-minded person sees ash in the air and says, “That’s just snow and that’s that.” This kind of rigid thinking can be harmful when you begin to think things have to be the way you think they’ve always been. Responding to our families during COVID-19 requires we see things in new ways. If you catch yourself saying things should be a certain way and everyone is supposed to do it just so, notice how it makes you feel. If this kind of approach is not producing PAX in your home, try Seeing Ash When its Ash. Here’s how:`,
    Image: kernelImage15
  },
  {
    id: 16,
    Title: `A Magical Way to Get Kids Moving Quickly`,
    Subheader: `Are your children struggling to finish tasks on time – or at all? Try playing Beat The Timer to help children learn to block out distractions and stay on task until they finish.`,
    Image: kernelImage16
  }]

    for (let index = 0; index < info.length; index++) {
      pathTitle = "/takingcare/" +  info[index].title.replace(/,/g,'');
      pathTitle = pathTitle.replace(/\s/g, '-');
      pathTitle = pathTitle.replace(/\’/gi,'');
      pathTitle = pathTitle.replace(/\'/gi,'');
      // console.log(pathTitle)
      createPage({
          path: pathTitle,
          component: path.resolve(`src/templates/blog.js`),
          context: {
              id: info[index].id,
              title: info[index].title,
              image: info[index].image
          },
      })
    }
    for (let index = 0; index < kernelData.length; index++) {
      pathTitle = "/kernels/PAX/" +  kernelData[index].Title.replace(/,/g,'');
      pathTitle = pathTitle.replace(/\s/g, '-');
      pathTitle = pathTitle.replace(/\’/gi,'');
      pathTitle = pathTitle.replace(/\'/gi,'');
      console.log(pathTitle)
      createPage({
        path: pathTitle,
        component: path.resolve(`src/templates/kernel.js`),
        context: {
          id: index,
          title: kernelData[index].Title,
          image: kernelData[index].Image

        },
      })
    }
    for (let index = 1; index < 20; index++) {
      createPage({
        path: `/recipes/${index}`,
        component: path.resolve(`src/templates/recipe.js`),
        context: {
          id: index,
        },
      })
    }


}

//   const getUsers = makeRequest(graphql, `
//     {
//       allStrapiUser {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//     `).then(result => {
//     // Create pages for each user.
//     result.data.allStrapiUser.edges.forEach(({ node }) => {
//       createPage({
//         path: `/users/${node.id}`,
//         component: path.resolve(`src/templates/user.js`),
//         context: {
//           id: node.id,
//         },
//       })
//     })
//   });

//   const getCategories = makeRequest(graphql, `
//     {
//       allStrapiCategory {
//         edges {
//             node {
//                 Name
//             }
//         }
//       }
//     }
//     `).then(result => {
//     // Create pages for each article.
//     result.data.allStrapiCategory.edges.forEach(({ node }) => {
//       createPage({
//         path: `categories/${node.Name}`,
//         component: path.resolve(`src/templates/category.js`),
//         context: {
//           Name: node.Name,
//         },
//       })
//     })
//   });


//   // Queries for articles and authors nodes to use in creating pages.
//   return Promise.all([
//     getBlogs,
//     getUsers,
//     getCategories
//   ])
// };