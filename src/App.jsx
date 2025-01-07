import React from 'react'
import './App.css'
import ListItem from './ListItem'

const faqList = [
  { id:1,
    question: "What is this app about?",
    answer: "This app connects job seekers with employers for quick and easy job posting and hiring."
  },
  {  id:2,
    question: "How do I create an account?",
    answer: "Click on the 'Sign Up' button on the homepage and fill in the required details."
  },
  { id:3,
    question: "Is there a fee to use the app?",
    answer: "The app is free to use for job seekers. Employers may incur fees for posting certain jobs."
  },
  { id:4,
    question: "Can I edit my job postings?",
    answer: "Yes, you can edit your job postings from the 'My Jobs' section in your profile."
  }
];

export default function App() {
  return (
    <div>
     
       {
        faqList.map((dat)=><ListItem dataitem={dat} key={dat.id}/>)
     }
     
    </div>
  )
}
