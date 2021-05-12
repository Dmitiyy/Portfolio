import FirstPhoto from '../../assets/images/project_1.jpg';
import SecondPhoto from '../../assets/images/project_2.jpg';
import ThirdPhoto from '../../assets/images/project_3.jpg';
import FourthPhoto from '../../assets/images/project_4.jpg';

const projects = [
    {
        title: 'Money Heist', 
        photo: FirstPhoto, 
        descr: 'The project was developed based on the series Money Heist. The main idea is a full review of this series, where you can watch the plot, the number of episodes, the rating of these episodes, the actors playing the main roles in this series. Where a person can look at this series from the other side. I spent one week implementing this project.',
        link: 'https://dmi-t-d.000webhostapp.com/', 
        id: Math.floor(Math.random() * 123445)
    },
    {
        title: 'Meetups', 
        photo: SecondPhoto, 
        descr: 'The project is a complete meeting service. You can go to this site, register there, and then create appointments, search for new ones, join others. On this project, I spent a whole month on its implementation. The project was developed at Vue.js', 
        link: 'https://meetups-d.netlify.app/', 
        id: Math.floor(Math.random() * 123445)
    },
    {
        title: 'Web-base', 
        photo: ThirdPhoto, 
        descr: 'This site is an indicator of the Web-base company. You can also see the advantages of this company on this site, its calling and why it is worth choosing this particular company. I spent one week of my time on this project. Go to see more details.', 
        link: 'https://web-base-shock.000webhostapp.com/', 
        id: Math.floor(Math.random() * 123445)
    },
    {
        title: 'Selectpad', 
        photo: FourthPhoto, 
        descr: 'This project i created for other people, because there are a lot of different situations related to accordions in your website. You dont want to spend your time with that, if you have problems like that, my library only for you. Try to generate your accordion in the official website!',
        link: 'https://selectpad.netlify.app/', 
        id: Math.floor(Math.random() * 123445)
    },
];

export default projects;
