/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Meghana Muppasani",
  title: "Hi all, I'm Meghana Muppasani",
  subTitle: emoji(
    "A passionate Software Developer 🚀 and lifelong learner, passionate about building scalable web applications and solving real-world problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kO8iJEvcuyX45F6xrxV8ZAtTXDIacA46/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MeghanaMuppasani",
  linkedin: "https://www.linkedin.com/in/meghana-muppasani/",
  gmail: "meghanamuppasani@gmail.com",
  gitlab: "https://gitlab.com/meghanamuppasani",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
title: "What I Do",

subTitle: "Full Stack Developer with a passion for building scalable web applications, solving real-world problems, and continuously learning modern technologies.",

skills: [
  emoji("⚡ Build responsive and user-friendly web applications using modern frontend technologies"),
  emoji("⚡ Develop secure and scalable backend services with REST APIs and database integration"),
  emoji("⚡ Deploy and manage applications using cloud platforms such as AWS, and Vercel")
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lakireddy Bali Reddy College of Engineering",
      logo: "https://th.bing.com/th/id/R.99ddd0dae795b39d41e95b2b6dac85d6?rik=c0bEfn%2fvvdYqyg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-xvksKCnIQ98%2fU_XfxrYx_9I%2fAAAAAAAAACw%2f81V3Z0XBs68%2fs1600%2fLakireddy%252BBalireddy%252BCollege(LBRCE)%252B%252BLogo.jpg&ehk=dn0p7d6GOCSLXj05M8laCFfNBN7Pngf0d2JPuUh32xE%3d&risl=&pid=ImgRaw&r=0",
      subHeader: "Bachelors of Technology (Computer Science and Engineering)",
      duration: "September 2022 - April 2026",
      desc: "Building a strong foundation in computer science through hands-on projects, programming, and emerging technologies.",
      descBullets: ["Computer Science and Engineering student.",
"Maintaining a CGPA of 8.81 while actively participating in technical projects and internships."
      ]
    },
    {
      schoolName: "Narayana Junior College",
      logo: "https://tse4.mm.bing.net/th/id/OIP.6s2CAxfP7yFApX0xksXzpQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      subHeader: "Intermediate (PMC Stream)",
      duration: "September 2020 - April 2022",
      desc: "Pursued the PMC stream, gaining a solid understanding of mathematics and science while developing analytical and critical thinking skills.",
      descBullets: [
        "Qualified in JEE Mains and EAMCET-AP Entrance tests"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning/Data Science",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud/Databases",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analytics Intern",
      company: "DataValley Inc.",
      companylogo: "https://tse2.mm.bing.net/th/id/OIP.WCRzmB5KIq-NF2SDTig5BAHaHa?r=0&w=900&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
      date: "Dec 2025 – Mar 2026",
  desc: "Worked on AI-driven data analytics solutions by collecting, processing, and analyzing large datasets to extract meaningful business insights using Python and machine learning techniques.",
  descBullets: [
    "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) using Python, Pandas, and NumPy.",
    "Built interactive dashboards and visualizations with Power BI and Matplotlib to support data-driven decision making.",
    "Applied machine learning algorithms for predictive analytics and evaluated model performance using Scikit-learn."
  ]
    },
    {
      role: "AI & Machine Learning Intern",
      companylogo : "https://tse4.mm.bing.net/th/id/OIP.7kfQR0VGuucL3hpI_NkJ8wHaHD?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      company: "APSSDC-IBM (Remote)",
  date: "May 2023 – Jun 2023",
  desc: "Built machine learning models using Python and Scikit-learn to analyze datasets and derive meaningful insights.",
  descBullets: [
    "Performed data preprocessing, feature engineering, and exploratory data analysis (EDA).",
    "Developed and evaluated machine learning models using Scikit-learn.",
    "Visualized data trends and model performance using Matplotlib and Pandas."
  ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false,
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS I WORKED ON TO LEARN AND CODE",
  projects: [
    {
      image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
      projectName: "FitNess",
      projectDesc:
"Developed a responsive fitness web application featuring workout plans, diet guidance, and an intuitive user interface.",
        //  you can add extra buttons here.
    },
    {
      image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/deepfake-freepik-1701780437.jpg",
      projectName: "Deepfake Detection in Twitter Using Linguistic Embeddings",
      projectDesc:
"Developed a deep learning model for detecting deepfake text on Twitter using linguistic embeddings and natural language processing techniques.",
        //  you can add extra buttons here.
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Amazon Certified Cloud Practitioner",
      subtitle:
        "Successfully Completed the Cloud Practitioner Certification and gained knowledge on cloud systems.",
      image: "https://freepnglogo.com/images/all_img/amazon-web-services-logo-d111.png",
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View my Certification",
          url: "https://drive.google.com/file/d/1myVWrOTVlLIt2LgrTIp3fLIQwP1rZXiB/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Servicenow Certified System Adminstrator",
      subtitle:
        "Successfully Completed System Adminstrator Certification powered by Servicenow",
      image: "https://1000logos.net/wp-content/uploads/2021/09/ServiceNow-Logo-2048x1288.png",
      imageAlt: "Servicenow Logo",
      footerLink: [
        {
          name: "View My Certification",
          url: "https://drive.google.com/file/d/1rsi6l4LopB_r2qdi6zQuihluZt4ZrQ1p/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Android Developer Virtual Internship",
      subtitle: "Completed Certifcation from AICTE and Google for Android App Development",
      image: "https://freepnglogo.com/images/all_img/google-g-logo-85b2.png",
      imageAlt: "Google Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1t1aiefdPtxU9PW7qGsJ38voyNL8NOB_c/view?usp=sharing"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Research",
  subtitle:
    "With Love for Developing cool stuff, I love to write what I have learnt.",
  displayMediumBlogs: false, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://ieeexplore.ieee.org/abstract/document/11483693",
      title: "Deepfake Text Detection on Twitter Using Linguistic Embeddings and Deep Learning",
      description:
        "The increasing use of deepfake text postings on social networking sites, specifically Twitter, has introduced a major threat because of the ability to spread misinformation, automated propaganda, and deceptive online activities. the paper introduces a deep leaning-based solution to detect deepfake text using linguistic embeddings and sophisticated classifiers."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9347202879",
  email_address: "meghanamuppasani@gmail.com"
};


const podcastSection = {
  display: false
};

const talkSection = {
  display: false
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  podcastSection,
  talkSection ,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
