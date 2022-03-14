import ResumePDF from './resume/ChristopherResume2022.pdf'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://chrimyn234.github.io/cleanfolio/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Christopher Prawira',
  role: 'Software Developer',
  description:
    'I am a motivated software developer who loves keeping myself up to date with new development technologies. My major interest is in Web Development. In my spare time, I build projects mainly using various tools with React.js at the forefront.',
  resume: ResumePDF,
  social: {
    linkedin: 'https://www.linkedin.com/in/christopher-prawira-b7a190158/',
    github: 'https://github.com/chrimyn234',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Scholarmode',
    description:
      'Scholarmode is a chrome-based extension that my team built during MAC Hack Sprint 2021. It is meant to provide a platform for people (mainly students) to come together and share their thoughts and discussions on a particular Youtube video.',
    stack: [
      'Chrome',
      'CORS',
      'Express.js',
      'Material-UI',
      'MongoAtlas',
      'MongoDB',
      'Mongoose',
      'Node.js',
      'oauth',
      'Passport.js',
      'React',
      'Rewire',
      'Slate.js',
      'Styled-Components',
    ],
    livePreview: 'https://devpost.com/software/scholarmode',
  },
  {
    name: 'React-Firebase Live-Queue App',
    description:
      'A live-queue app that allows patients to register themselves and take a queue number for a specialist medical check-up in Jakarta, Indonesia.',
    stack: ['React', 'Chakra-UI', 'Firebase', 'Formik'],
    livePreview: 'https://registrasidoktertaswinprawira.web.app/',
  },
  {
    name: 'Travellow',
    description:
      'A map-centric app that shows nearby restaurants, hotels and attractions. It also shows the awards, reviews and pricing for the specific place.',
    stack: ['Travel Advisor API', 'React', 'Material UI'],
    sourceCode: 'https://github.com/chrimyn234/Travellow',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Chakra UI',
  'Material UI',
  'Express.js',
  'MongoDB',
  'Node.js',
  'Git',
  'Python',
  'Java',
  'PHP',
  'ASP.NET',
  'Android Development (Java/Kotlin)',
  'iOS Development (Swift)', 'and many more tools and frameworks...'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'christopherowenprawira@gmail.com',
}

export { header, about, projects, skills, contact }
