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
                    Triaged and fixed PCI-related security vulnerabilities
                    across 50 Azure microservices using Checkmarx SAST/SCA
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
                    Lead software engineer on a team of 7 developers
                    <ul className="mt-2 mb-4 ml-8 list-disc">
                        <li>Served as Scrum Master, running daily standups</li>
                        <li>
                            Designed and executed a year-long test plan,
                            building a test suite that helped the team ship
                            reliable software on time
                        </li>
                        <li>
                            Managed and mentored 4 interns, scoping and
                            assigning their work
                        </li>
                    </ul>
                </li>
                <li>
                    Migrated WPF desktop applications to React web apps, making
                    the deployment stack easier to containerize
                </li>
                <li>
                    Deployed VMware ESXi servers to host our software suite
                    on-site for clients
                </li>
                <li>
                    Built automated deployment scripts and CI/CD pipelines for
                    our software suite
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
                    Built C#/.NET applications that translate and relay data
                    between multiple packet standards
                </li>
                <li>
                    Wrote Wireshark dissectors for these protocols to debug our
                    translation applications
                </li>
                <li>Obtained a security clearance in December 2022</li>
            </Experience>
        </article>
    );
};

export default ExperiencePage;
