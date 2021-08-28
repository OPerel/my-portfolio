import * as React from "react";
import { useScrollContext } from "../components/ScrollingProvider";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";

const data = {
    "basics": {
      "name": "Ori Perelman",
      "label": "Web Developer",
      "image": "https://avatars.githubusercontent.com/u/42510547?v=4",
      "email": "oriperelman@gmail.com",
      "phone": "",
      "url": "https://www.oriperelman.com",
      "summary": "I'm a self taught full stack web developer.\nIn previous years I devoted my time to learning philosophy. I Found great interest in subjects ranging from political and social theory to mathematical logic.\nAfter graduating Summa Com Laude an MA in political philosophy I decided it's time to take a path change. As I always loved logic, and found myself getting curious about programming, I decided to give it a shot.\nI fell in love almost instantly! I found great satisfaction in designing and building working applications, the more complex they are the greater the satisfaction.\nToday I'm working at a small start up called Flowbiz. I feel ready to face the next challenge on my path. So please read ahead and let me know if you like what you see. \n   ",
      "profiles": [
        {
          "network": "gitconnected",
          "username": "OPerel",
          "url": "https://gitconnected.com/OPerel"
        },
        {
          "network": "GitHub",
          "username": "OPerel",
          "url": "https://github.com/OPerel"
        }
      ],
      "headline": "oriperelman@gmail.com",
      "blog": null,
      "yearsOfExperience": 3,
      "username": "OPerel",
      "locationAsString": "Israel",
      "region": "Israel",
      "karma": 21,
      "id": "59a750ed-501a-468f-81c4-a50229f8e124",
      "followers": 7,
      "following": 7,
      "picture": "https://avatars.githubusercontent.com/u/42510547?v=4",
      "website": "https://www.oriperelman.com"
    },
    "skills": [
      {
        "name": "React",
        "level": "Advanced",
        "keywords": [
          "front"
        ],
        "rating": 4,
        "yearsOfExperience": null
      },
      {
        "name": "JavaScript",
        "level": "Advanced",
        "keywords": [
          "front"
        ],
        "rating": 4,
        "yearsOfExperience": null
      },
      {
        "name": "TypeScript",
        "level": "Advanced",
        "keywords": [

        ],
        "rating": 4,
        "yearsOfExperience": null
      },
      {
        "name": "Vue",
        "level": "Intermediate",
        "keywords": [
          "front"
        ],
        "rating": 3,
        "yearsOfExperience": null
      },
      {
        "name": "NodeJS",
        "level": "Intermediate",
        "keywords": [
          "back"
        ],
        "rating": 3,
        "yearsOfExperience": null
      },
      {
        "name": "HTML5",
        "level": "Advanced",
        "keywords": [
          "front"
        ],
        "rating": 4,
        "yearsOfExperience": null
      },
      {
        "name": "CSS3",
        "level": "Advanced",
        "keywords": [
          "front"
        ],
        "rating": 4,
        "yearsOfExperience": null
      },
      {
        "name": "Express.JS",
        "level": "Intermediate",
        "keywords": [
          "back"
        ],
        "rating": 3,
        "yearsOfExperience": null
      },
      {
        "name": "MongoDB",
        "level": "Intermediate",
        "keywords": [
          "dbs"
        ],
        "rating": 3,
        "yearsOfExperience": null
      },
      {
        "name": "PostgresQL",
        "level": "Intermediate",
        "keywords": [
          "dbs"
        ],
        "rating": 3,
        "yearsOfExperience": null
      }
    ],
    "projects": [
      {
        "name": "israelmm",
        "description": "IsraelMM is an operator of the Israeli government's circular economy project aimed to help various industries to reuse and recycle their raw materials.\nThe app utilizes data collected by our materials marketplace platform. It implements algorithms to sort materials into different categories, compare supply vs. demand, and finally visualize the data in a meaningful way. ",
        "url": "",
        "highlights": [

        ],
        "keywords": [

        ],
        "roles": "Freelance",
        "startDate": "",
        "endDate": "",
        "entity": "",
        "type": "",
        "displayName": "IsraelMM",
        "website": "",
        "summary": "Data analysis tool to sort, compare and visualize.",
        "primaryLanguage": "",
        "languages": [
          "Javascript",
          "CSS",
          "HTML"
        ],
        "libraries": [
          "Express.JS",
          "Okta",
          "React",
          "react-vis",
          "PostgresQL"
        ],
        "githubUrl": "",
        "repositoryUrl": "",
        "start": {
          "year": null,
          "month": null,
          "day": null
        },
        "end": {
          "year": null,
          "month": null,
          "day": null
        },
        "images": [

        ],
        "videos": [

        ]
      },
      {
        "name": "pomegranate_pantry",
        "description": "An application to manage household grocery shopping in a communal way, in order to save money and decrease traveling and plastic wrappers.\nThe app is build using Ionic and React, and uses Firebase to handle all backend needs including authentication and DB. Sign in with Google is also implemented.\nA new technology I learned for this project is RxJS. ",
        "url": "https://rimons-pantry-staging.netlify.app",
        "highlights": [

        ],
        "keywords": [

        ],
        "roles": "Personal Project",
        "startDate": "",
        "endDate": "",
        "entity": "",
        "type": "",
        "displayName": "Pomegranate's Pantry",
        "website": "https://rimons-pantry-staging.netlify.app",
        "summary": "Communal grocery shopping app",
        "primaryLanguage": "TypeScript",
        "languages": [
          "TypeScript",
          "Batchfile",
          "HTML",
          "JavaScript",
          "CSS"
        ],
        "libraries": [
          "RxJS",
          "React",
          "Ionic",
          "Firebase"
        ],
        "githubUrl": "https://github.com/OPerel/pomegranate_pantry",
        "repositoryUrl": "https://github.com/OPerel/pomegranate_pantry",
        "start": {
          "year": null,
          "month": null,
          "day": null
        },
        "end": {
          "year": null,
          "month": null,
          "day": null
        },
        "images": [
          {
            "resolutions": {
              "micro": {
                "url": "https://project-images.gitconnectedcontent.com/7a479c51-28b0-49cb-b7ef-96743488fa8b-micro",
                "size": 623,
                "width": 32,
                "height": 13
              },
              "thumbnail": {
                "url": "https://project-images.gitconnectedcontent.com/7a479c51-28b0-49cb-b7ef-96743488fa8b-thumbnail",
                "size": 2881,
                "width": 224,
                "height": 94
              },
              "mobile": {
                "url": "https://project-images.gitconnectedcontent.com/7a479c51-28b0-49cb-b7ef-96743488fa8b-mobile",
                "size": 6752,
                "width": 600,
                "height": 251
              },
              "desktop": {
                "url": "https://project-images.gitconnectedcontent.com/7a479c51-28b0-49cb-b7ef-96743488fa8b-desktop",
                "size": 13886,
                "width": 1200,
                "height": 502
              }
            }
          }
        ],
        "videos": [

        ]
      },
      {
        "name": "gatsby-parallax-blog",
        "description": "A blog made with Gatsby and Markdown. This is my first attempt with parallax animations which I always loved, using `React Scroll Parallax`. \nThe rest of the layout and styles are implemented using `Styled Components` which was fun to learn and a useful technology to have in my toolbox.    ",
        "url": "https://gatsby-parallax-blog.netlify.com/",
        "highlights": [

        ],
        "keywords": [

        ],
        "roles": "Personal Project",
        "startDate": "",
        "endDate": "",
        "entity": "",
        "type": "",
        "displayName": "Parallax Blog ",
        "website": "https://gatsby-parallax-blog.netlify.com/",
        "summary": "A simple parallax blog.",
        "primaryLanguage": "JavaScript",
        "languages": [
          "JavaScript"
        ],
        "libraries": [
          "Styled Components",
          "React Scroll Parallax",
          "Gatsby"
        ],
        "githubUrl": "https://github.com/OPerel/gatsby-parallax-blog",
        "repositoryUrl": "https://github.com/OPerel/gatsby-parallax-blog",
        "start": {
          "year": null,
          "month": null,
          "day": null
        },
        "end": {
          "year": null,
          "month": null,
          "day": null
        },
        "images": [
          {
            "resolutions": {
              "micro": {
                "url": "https://project-images.gitconnectedcontent.com/d7843bd9-7d81-4b01-8d91-f7387bb99d44-micro",
                "size": 713,
                "width": 32,
                "height": 15
              },
              "thumbnail": {
                "url": "https://project-images.gitconnectedcontent.com/d7843bd9-7d81-4b01-8d91-f7387bb99d44-thumbnail",
                "size": 7067,
                "width": 224,
                "height": 106
              },
              "mobile": {
                "url": "https://project-images.gitconnectedcontent.com/d7843bd9-7d81-4b01-8d91-f7387bb99d44-mobile",
                "size": 31570,
                "width": 600,
                "height": 285
              },
              "desktop": {
                "url": "https://project-images.gitconnectedcontent.com/d7843bd9-7d81-4b01-8d91-f7387bb99d44-desktop",
                "size": 94991,
                "width": 1200,
                "height": 570
              }
            }
          }
        ],
        "videos": [

        ]
      },
      {
        "name": "wage-calculator",
        "description": "Purely  client side application made with Ionic and StencilJS. A wage calculator that implements an algorithm which takes in various parameters about college professors and calculates prospective wage differences before and after signing a new contract with their college. ",
        "url": "https://wage-calculator.netlify.app",
        "highlights": [

        ],
        "keywords": [

        ],
        "roles": "Volunteer",
        "startDate": "",
        "endDate": "",
        "entity": "",
        "type": "",
        "displayName": "Wage Calculator",
        "website": "https://wage-calculator.netlify.app",
        "summary": "A wage calculator made for Koach LaOvdim (Power to the Workers) organization.",
        "primaryLanguage": "TypeScript",
        "languages": [
          "CSS",
          "TypeScript",
          "HTML"
        ],
        "libraries": [
          "StencilJS",
          "Ionic"
        ],
        "githubUrl": "https://github.com/OPerel/wage-calculator",
        "repositoryUrl": "https://github.com/OPerel/wage-calculator",
        "start": {
          "year": null,
          "month": null,
          "day": null
        },
        "end": {
          "year": null,
          "month": null,
          "day": null
        },
        "images": [
          {
            "resolutions": {
              "micro": {
                "url": "https://project-images.gitconnectedcontent.com/e08e3a8b-e717-4c86-ba47-1797b6802b37-micro",
                "size": 436,
                "width": 32,
                "height": 11
              },
              "thumbnail": {
                "url": "https://project-images.gitconnectedcontent.com/e08e3a8b-e717-4c86-ba47-1797b6802b37-thumbnail",
                "size": 2665,
                "width": 224,
                "height": 76
              },
              "mobile": {
                "url": "https://project-images.gitconnectedcontent.com/e08e3a8b-e717-4c86-ba47-1797b6802b37-mobile",
                "size": 6649,
                "width": 600,
                "height": 203
              },
              "desktop": {
                "url": "https://project-images.gitconnectedcontent.com/e08e3a8b-e717-4c86-ba47-1797b6802b37-desktop",
                "size": 14435,
                "width": 1200,
                "height": 406
              }
            }
          }
        ],
        "videos": [

        ]
      },
      {
        "name": "new_agra_site",
        "description": "A Gatsby static website for Agra Planning and Consulting LTD. Contentful is used as a CMS. This is one of my first projects, which taught me a lot about deploying a live site, SEO, performance and more.  ",
        "url": "https://www.agraconsulting.co.il",
        "highlights": [

        ],
        "keywords": [

        ],
        "roles": "Freelance",
        "startDate": "",
        "endDate": "",
        "entity": "",
        "type": "",
        "displayName": "Agra",
        "website": "https://www.agraconsulting.co.il",
        "summary": "The official website for Agra Planning & Consulting LTD.",
        "primaryLanguage": "JavaScript",
        "languages": [
          "JavaScript",
          "CSS"
        ],
        "libraries": [
          "Contentful",
          "Gatsby"
        ],
        "githubUrl": "https://github.com/OPerel/new_agra_site",
        "repositoryUrl": "https://github.com/OPerel/new_agra_site",
        "start": {
          "year": null,
          "month": null,
          "day": null
        },
        "end": {
          "year": null,
          "month": null,
          "day": null
        },
        "images": [
          {
            "resolutions": {
              "micro": {
                "url": "https://project-images.gitconnectedcontent.com/9f4d92a6-b902-4576-b85e-972ca19cd89f-micro",
                "size": 1283,
                "width": 32,
                "height": 15
              },
              "thumbnail": {
                "url": "https://project-images.gitconnectedcontent.com/9f4d92a6-b902-4576-b85e-972ca19cd89f-thumbnail",
                "size": 12030,
                "width": 224,
                "height": 105
              },
              "mobile": {
                "url": "https://project-images.gitconnectedcontent.com/9f4d92a6-b902-4576-b85e-972ca19cd89f-mobile",
                "size": 56130,
                "width": 600,
                "height": 282
              },
              "desktop": {
                "url": "https://project-images.gitconnectedcontent.com/9f4d92a6-b902-4576-b85e-972ca19cd89f-desktop",
                "size": 157694,
                "width": 1200,
                "height": 563
              }
            }
          }
        ],
        "videos": [

        ]
      },
      {
        "name": "memory_game",
        "description": "",
        "url": "",
        "highlights": [

        ],
        "keywords": [

        ],
        "roles": "Personal Project",
        "startDate": "",
        "endDate": "",
        "entity": "",
        "type": "",
        "displayName": "Memory Game",
        "website": "",
        "summary": "A simple memory game using Create React App",
        "primaryLanguage": "JavaScript",
        "languages": [
          "JavaScript",
          "HTML",
          "CSS"
        ],
        "libraries": [
          "React",
          "Deck of Cards API",
          "Recoil"
        ],
        "githubUrl": "https://github.com/OPerel/memory_game",
        "repositoryUrl": "https://github.com/OPerel/memory_game",
        "start": {
          "year": null,
          "month": null,
          "day": null
        },
        "end": {
          "year": null,
          "month": null,
          "day": null
        },
        "images": [

        ],
        "videos": [

        ]
      },
      {
        "name": "markdowntables",
        "description": "",
        "url": "https://modest-lamport-f281ff.netlify.com/",
        "highlights": [

        ],
        "keywords": [

        ],
        "roles": "Personal Project",
        "startDate": "",
        "endDate": "",
        "entity": "",
        "type": "",
        "displayName": "markdowntables",
        "website": "https://modest-lamport-f281ff.netlify.com/",
        "summary": "Create a Markdown table tool",
        "primaryLanguage": "TypeScript",
        "languages": [
          "CSS",
          "TypeScript",
          "HTML"
        ],
        "libraries": [
          "StencilJS"
        ],
        "githubUrl": "https://github.com/OPerel/markdowntables",
        "repositoryUrl": "https://github.com/OPerel/markdowntables",
        "start": {
          "year": null,
          "month": null,
          "day": null
        },
        "end": {
          "year": null,
          "month": null,
          "day": null
        },
        "images": [

        ],
        "videos": [

        ]
      },
      {
        "name": "markdown-preview",
        "description": "",
        "url": "",
        "highlights": [

        ],
        "keywords": [

        ],
        "roles": "Personal Project",
        "startDate": "",
        "endDate": "",
        "entity": "",
        "type": "",
        "displayName": "markdown-preview",
        "website": "",
        "summary": "Render Markdown to HTML",
        "primaryLanguage": "TypeScript",
        "languages": [
          "HTML",
          "TypeScript",
          "CSS"
        ],
        "libraries": [
          "Mark",
          "React"
        ],
        "githubUrl": "https://github.com/OPerel/markdown-preview",
        "repositoryUrl": "https://github.com/OPerel/markdown-preview",
        "start": {
          "year": null,
          "month": null,
          "day": null
        },
        "end": {
          "year": null,
          "month": null,
          "day": null
        },
        "images": [

        ],
        "videos": [

        ]
      },
      {
        "name": "hackathon-corona",
        "description": "I built 4 of these staters:\n- https://github.com/wonderfloyd/Hackathon-Corona/tree/master/Ionic_Angular_Chatroom\n- https://github.com/wonderfloyd/Hackathon-Corona/tree/master/Quasar_Firebase_Todo_App\n- https://github.com/wonderfloyd/Hackathon-Corona/tree/master/nextjs-website\n- https://github.com/wonderfloyd/Hackathon-Corona/tree/master/nextjs_mongodb_auth0_user_n_admin\n",
        "url": "",
        "highlights": [

        ],
        "keywords": [

        ],
        "roles": "Work",
        "startDate": "",
        "endDate": "",
        "entity": "",
        "type": "",
        "displayName": "Hackathon-Corona",
        "website": "",
        "summary": "A collection of app starters",
        "primaryLanguage": "JavaScript",
        "languages": [
          "JavaScript",
          "CSS",
          "SCSS",
          "HTML",
          "TypeScript"
        ],
        "libraries": [
          "Auth0",
          "MongoDB",
          "Ionic - Angular",
          "Firebase",
          "Next",
          "Quasar (Vue)"
        ],
        "githubUrl": "https://github.com/wonderfloyd/Hackathon-Corona",
        "repositoryUrl": "https://github.com/wonderfloyd/Hackathon-Corona",
        "start": {
          "year": null,
          "month": null,
          "day": null
        },
        "end": {
          "year": null,
          "month": null,
          "day": null
        },
        "images": [

        ],
        "videos": [

        ]
      }
    ],
    "work": [
      {
        "name": "Flowbiz",
        "location": "Tel Aviv",
        "description": "",
        "position": "Full Stack Web Developer",
        "url": "",
        "startDate": "2019-08-01",
        "endDate": "",
        "summary": "As a full stack developer I took on tasks that span across our tech stack and activities",
        "highlights": [
          " Boost performance and improved code readability and organization by migrating our front end wizard\napplication from AngularJS to React, using a TDD approach.",
          "Reduced development time by automating tests generation from JSON data files to Protractor tests.",
          "Ensured quality code delivery by creating CI/CD pipelines from development trough staging, to\ndevelopment.",
          "Ensured high standard development and code writing according to best practices by creating a number\nof customized application starters, using a range of various technologies, and including all the different\nlayers of the needed stack such as state management, authentication, testing, documentation generation,\nand style libraries."
        ],
        "isCurrentRole": true,
        "start": {
          "year": 2019,
          "month": 8
        },
        "end": {

        },
        "company": "Flowbiz",
        "website": ""
      },
      {
        "name": "IsraelMM",
        "location": "Tel Aviv",
        "description": "",
        "position": "Freelance Web developer",
        "url": "https://www.israelmm.org.il/",
        "startDate": "2019-01-01",
        "endDate": "",
        "summary": " A governmental funded project to enhance circular economy in various industries throughout Israel.",
        "highlights": [
          "Designed, developed and maintained a full stack application to analyze, visualize, and manage data",
          "The app proved itself as key in winning in the project's pilot year between four contesting franchisers.",
          "App build using NodeJS (Express), React and PostgreSQL stack."
        ],
        "isCurrentRole": true,
        "start": {
          "year": 2019,
          "month": 1
        },
        "end": {

        },
        "company": "IsraelMM",
        "website": "https://www.israelmm.org.il/"
      }
    ],
    "publications": [

    ],
    "education": [
      {
        "institution": "Zero To Matsery",
        "url": "https://zerotomastery.io/academy/",
        "area": "Web Developmant",
        "studyType": "",
        "startDate": "",
        "endDate": "",
        "score": "",
        "courses": [

        ],
        "description": "",
        "activities": "",
        "start": {
          "year": null,
          "month": null
        },
        "end": {
          "year": null,
          "month": null
        },
        "website": "https://zerotomastery.io/academy/",
        "gpa": ""
      },
      {
        "institution": "Tel Aviv University",
        "url": "",
        "area": "Philosophy",
        "studyType": "MA",
        "startDate": "",
        "endDate": "",
        "score": "96",
        "courses": [

        ],
        "description": "Graduated summa cum laude, with a perfect score on my thesis paper. Majored in political theory and philosophical and mathematical logic.",
        "activities": "",
        "start": {
          "year": null,
          "month": null
        },
        "end": {
          "year": null,
          "month": null
        },
        "website": "",
        "gpa": "96"
      }
    ],
    "volunteer": [

    ],
    "awards": [

    ],
    "languages": [
      {
        "language": "Hebrew",
        "fluency": "Native"
      },
      {
        "language": "English",
        "fluency": "Fluent"
      }
    ],
    "interests": [

    ],
    "references": [

    ],
    "certificates": [
      {
        "name": "Complete Web Developer 2020",
        "issuer": "Zero To Mastery",
        "date": "2020-01-06",
        "url": "https://www.udemy.com/certificate/UC-PWZF2VII/",
        "summary": "",
        "fullDate": {
          "year": 2020,
          "month": 1,
          "day": 6
        },
        "website": "https://www.udemy.com/certificate/UC-PWZF2VII/"
      }
    ],
    "meta": {
      "note": "This is a combined version of the old and new JSON Resume API to provide maximum compatibility. You will notice duplicated values in different fields.",
      "canonical": "https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
      "version": "v1.0.0",
      "lastModified": "2020-12-29T15:53:00"
    }
  }

const IndexPage = () => {

  const { position: { currentPage } } = useScrollContext();

  const getAnimeClass = (pageIdx) => {
    if (currentPage > pageIdx) {
      return 'over';
    }
    if (currentPage < pageIdx) {
      return 'under';
    }
    return 'on';
  }

  return (
    <div>
      <Header />
      <main>
        <Home
          animeClass={getAnimeClass(0)}
          name={"Ori Perelman"}
          label={"Web Developer"}
        />
        <About
          animeClass={getAnimeClass(1)}
          summary={data.basics.summary}
        />
        <Portfolio
          animeClass={getAnimeClass(2)}
          projects={data.projects}
        />
        <Skills
          animeClass={getAnimeClass(3)}
          skills={data.skills}
          work={data.work}
        />
      </main>
      <Footer />

      {/*<arrow-nav currentPage={currentPage} />*/}
    </div>
  )
}

export default IndexPage
