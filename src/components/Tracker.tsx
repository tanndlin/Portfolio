import React from 'react';
import CodeIcon from './icons/CodeIcon';
import HomeIcon from './icons/HomeIcon';
import WorkIcon from './icons/WorkIcon';

const Tracker = () => {
    const [homeHeight, setHomeHeight] = React.useState(0);
    const [projectsHeight, setProjectsHeight] = React.useState(0);
    const [experienceHeight, setExperienceHeight] = React.useState(0);

    const [trackers = [], setTrackers] = React.useState<HTMLLIElement[] | null>(
        null
    );

    //Calculate the sections
    React.useEffect(() => {
        const homeRect = document
            .getElementById('home')!
            .getBoundingClientRect();
        setHomeHeight(homeRect.top);

        const projectsRect = document
            .getElementById('projects')!
            .getBoundingClientRect();
        setProjectsHeight(projectsRect.top);

        const experienceRect = document
            .getElementById('experience')!
            .getBoundingClientRect();
        setExperienceHeight(experienceRect.top);

        setTrackers(Array.from(document.querySelectorAll('#tracker li')));
    }, []);

    return (
        <div className="fixed top-1/4 ml-10 flex w-[24px] h-[136px] gap-1">
            <ul id="tracker" className="flex flex-col justify-center gap-8">
                <li>
                    <a href="#home">
                        <HomeIcon />
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <CodeIcon />
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        <WorkIcon />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Tracker;
