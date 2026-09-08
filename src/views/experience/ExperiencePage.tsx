import Experience from './Experience';

const ExperiencePage = () => {
    return (
        <article id="experience" className="container p-3 py-12 m-auto">
            <h1 className="mb-16 section-title transition-header">
                Experience
            </h1>
            <Experience
                title="Cloud Security Engineer"
                company={{
                    name: 'CFX',
                    link: 'https://www.cfxway.com/',
                }}
                date={'Dec 2025 - Present'}
            >
                <li>
                    Utilized Checkmarx SAST/SCA tools to triage and fix PCI
                    related security vulnerabilities across 50 Azure
                    microservices
                </li>
                <li>
                    Migrated 2 million+ user accounts from Oracle to Microsoft
                    Dynamics, supporting 1M+ daily transactions
                </li>
                <li>
                    Led an Azure Policy compliance initiative across 50
                    microservices, covering the .NET 10 upgrade,
                    mTLS/IP-allowlist hardening via Imperva, and migration to
                    AAD-based managed-identity authentication
                </li>
                <li>
                    Reduced technical debt by deprecating legacy codebases and
                    eliminating anti-patterns across production services
                </li>
            </Experience>
            <Experience
                title="Fullstack Software Engineer"
                company={{
                    name: 'GTRI',
                    link: 'https://gtri.gatech.edu/',
                }}
                date={'June 2024 - Dec 2025'}
            >
                <li>
                    Lead software engineer on a team of 7 developers.
                    <ul className="mt-2 mb-4 ml-8 list-disc">
                        <li>
                            Scrum master for the team, leading daily standup
                        </li>
                        <li>
                            Created and executed a year long test plan to create
                            a test suite to assist our dev team in delivering
                            robust software on-time
                        </li>
                        <li>
                            Functional manager for 4 interns whom I mentored and
                            gave tasks to
                        </li>
                    </ul>
                </li>
                <li>
                    Converted many WPF applications to React web applications to
                    allow easier containerization of our deployment stack.
                </li>
                <li>
                    Deployed VMWare ESXi servers to host our software Suite to
                    various clients onsite.
                </li>
                <li>
                    Created automated deployment scripts and CI/CD pipelines for
                    our software suite.
                </li>
            </Experience>
            <Experience
                title="SWE Intern"
                company={{
                    name: 'GTRI',
                    link: 'https://gtri.gatech.edu/',
                }}
                date={'Oct 2022 - June 2024'}
            >
                <li className="pr-4">
                    C# Developer using the .NET framework to create applications
                    for the communication and translation of data across various
                    packet standards.
                </li>
                <li>
                    Created Wireshark Dissectors for many said protocols for
                    debugging our translation applications
                </li>
                <li>Obtained security clearance in December of 2022</li>
            </Experience>
        </article>
    );
};

export default ExperiencePage;
