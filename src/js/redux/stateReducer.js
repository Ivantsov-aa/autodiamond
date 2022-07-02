import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

let state = {
    contacts: [
        {
            text: 'Republic of Belarus, Minsk',
            icon: <LocationOnIcon />,
            data: 'Republic of Belarus, Minsk'
        },
        {
            text: '+375259559125',
            icon: <PhoneIcon />,
            data: '+375259559125'
        },
        {
            text: 'pr.minsk.ivantsov@gmail.com',
            icon: <MailIcon />,
            data: 'pr.minsk.ivantsov@gmail.com'
        },
        {
            text: 'github.com/ivantsov-aa',
            icon: <GitHubIcon />,
            data: 'github.com/ivantsov-aa'
        }
    ],
    education: [
        {
            year: '11/2021 - 02/2022',
            text: 'IT-ACADEMY',
            spec: 'React course for web application development'
        },
        {
            year: '11/2020 - 05/2021',
            text: 'IT-SCHOOL MYFREEDOM',
            spec: 'Front-end developer'
        },
        {
            year: '2011 - 2015',
            text: 'BRANCH BNTU "MINSK STATE POLYTECHNICAL COLLEGE"',
            spec: 'Electrical Technician'
        },
        {
            year: '2006 - 2011',
            text: 'STATE EDUCATIONAL INSTITUTION "GYMNASIUM NO. 5 OF MINSK"'
        }
    ],
    hardSkills: [
        {
            text: 'HTML5',
            value: 'html'
        },
        {
            text: 'CSS3/SCSS',
            value: 'css'
        },
        {
            text: 'JavaScript',
            value: 'js'
        },
        {
            text: 'React.js',
            value: 'react'
        },
        {
            text: 'Redux',
            value: 'redux'
        },
        {
            text: 'TypeScript',
            value: 'typescript'
        },
        {
            text: 'Git',
            value: 'git'
        }
    ],
    softSkills: ['Adaptability', 'Teamwork', 'Logical thinking', 'Problem solving', 'Desire to learn', 'Trainability', 'Meeting deadlines'],
    work: [
        {
            title: 'Dyson',
            position: 'Sales promoter',
            responsibilities: 'Promote and sell products company, communicate with clients in order to identify needs and subsequent sale of goods',
            year: '05/2021 - Present'
        },
        {
            title: 'JURA',
            position: 'Sales promoter',
            responsibilities: 'Promote and sell products company, communicate with clients in order to identify needs and subsequent sale of goods',
            year: '04/2020 - 04/2021'
        },
        {
            title: 'Honor',
            position: 'Sales promoter',
            responsibilities: 'Promote and sell products company, communicate with clients in order to identify needs and subsequent sale of goods',
            year: '07/2019 - 04/2020'
        }
    ]
}

const stateReducer = () => {
    return state;
}

export default stateReducer;