import React from 'react';
import CodeIcon from './icons/CodeIcon';
import HomeIcon from './icons/HomeIcon';
import WorkIcon from './icons/WorkIcon';
import ProgressBar from './ProgressBar';

interface Props {
    scrollHeight: number;
}

const Tracker = (props: Props) => {
    const { scrollHeight } = props;

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

    React.useEffect(() => {
        if (!trackers) return;

        let flag = false;

        const sections = [experienceHeight, projectsHeight, homeHeight];
        sections.forEach((section, i) => {
            const index = sections.length - 1 - i;

            if (scrollHeight > section - window.innerHeight / 2 && !flag) {
                trackers![index].classList.add('active');
                flag = true;
            } else {
                trackers![index].classList.remove('active');
            }
        });
    }, [scrollHeight]);
    return (
        <div className="fixed top-1/4 ml-10 flex w-[24px] h-[136px] gap-1">
            <ProgressBar
                percent={
                    (scrollHeight /
                        (document.body.scrollHeight - window.innerHeight)) *
                    100
                }
                direction="vertical"
            />

            <ul id="tracker" className="flex flex-col justify-center gap-8">
                <li>
                    <HomeIcon />
                </li>
                <li>
                    <CodeIcon />
                </li>
                <li>
                    <WorkIcon />
                </li>
            </ul>
        </div>
    );
};

export default Tracker;
