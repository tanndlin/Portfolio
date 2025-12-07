import budgie from '../../img/budgie.png';
import dynamiCalcImg from '../../img/dynamiCalc-ss.png';
import lionImg from '../../img/lion.png';
import noteTakerImg from '../../img/note-taker-ss.png';
import Project from './Project';
import * as Tech from './Technologies';

function ProjectsPage() {
    return (
        <article id="projects" className="container flex-1 w-full m-auto">
            <h1 className="mb-24 text-4xl transition-header">
                Personal Projects
            </h1>
            <div className="flex flex-col gap-32">
                <Project
                    title="TanScript"
                    overview="A compiled programming language built from scratch using TypeScript"
                    githubLink="https://github.com/tanndlin/tanscript"
                    technologies={[<Tech.TypeScriptTech />]}
                    img={
                        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
                    }
                >
                    <p>
                        <b>Key features:</b>
                    </p>
                    <ul className="list-disc">
                        <li className="ml-4">
                            Compiles to AMD64 instruction set
                        </li>
                        <li className="ml-4">
                            Functions and lambdas that can be passed around as
                            first class citizens.
                        </li>
                        <li className="ml-4">
                            Signals implementation that allows for easy event
                            driven mathematics using a dependency graph models
                            to update variables only as needed.
                        </li>
                        <li className="ml-4">
                            Full support for all math operators, and nested
                            expressions with parenthesis.
                        </li>
                        <li className="ml-4">Support for strings</li>
                        <li className="ml-4">
                            Support for objects which can have methods and
                            properties
                        </li>
                    </ul>
                </Project>

                <Project
                    title="CPPRayTracer"
                    overview="A ray tracer with no dependencies built in C++"
                    githubLink="https://github.com/tanndlin/CPPRayTracer"
                    technologies={[<Tech.CPPTech />, <Tech.RustTech />]}
                    img={
                        'https://github.com/tanndlin/CPPRayTracer/blob/master/image.jpg?raw=true'
                    }
                >
                    <p>
                        <b>Key features:</b>
                    </p>
                    <ul className="list-disc">
                        <li className="ml-4">
                            Uses Bounding Volume Hierarchy (BVH) to speed up to
                            cull faces to speed up rendering.
                        </li>
                        <li className="ml-4">
                            A custom ThreadPool implementaion to allow for
                            parallel rendering of tiles to speed up rendering.
                        </li>
                        <li className="ml-4">
                            Ability to load and render .obj files with support
                            for image textures in the .mtl format
                        </li>
                    </ul>
                </Project>

                <Project
                    title="Budgie"
                    link="https://budgie.tanndlin.com"
                    githubLink="https://github.com/tanndlin/Budgie"
                    img={budgie}
                    technologies={[
                        <Tech.ReactTech />,
                        <Tech.FirebaseTech />,
                        <Tech.FlutterTech />,
                        <Tech.ExpressTech />,
                    ]}
                >
                    <p>
                        A budget tracker app that allows users to keep track of
                        recurring bills, grocery budgets, and one time expenses.
                        I was the lead front end eningeer for the website and
                        helped oversee the development of the expressJS API.
                    </p>
                </Project>

                <Project
                    title="Note Taker"
                    overview="A note taking app that utilizes markdown to render styled notes"
                    githubLink="https://github.com/tanndlin/NoteTaker"
                    link="https://notetaker.tanndlin.com"
                    img={noteTakerImg}
                    technologies={[<Tech.ReactTech />, <Tech.TypeScriptTech />]}
                >
                    <ul className="list-disc">
                        <li className="ml-4">
                            Takes advantage of hyperlinks to quickly reference
                            other notes, and allows for easy navigation between
                            related notes
                        </li>
                        <li className="ml-4">
                            Graph feature to visualize the relationships between
                            notes.
                        </li>
                        <li className="ml-4">
                            Stores and displays notes in file system tree
                            structure for easy organization
                        </li>
                    </ul>
                </Project>

                <Project
                    title="DynamiCalc"
                    githubLink="https://github.com/tanndlin/DynamiCalc"
                    link="https://dynamicalc.tanndlin.com"
                    technologies={[<Tech.ReactTech />, <Tech.TypeScriptTech />]}
                    img={dynamiCalcImg}
                >
                    <p>
                        Most calculators have static variables that do not
                        change after being set. DynamiCalc allows users to
                        create dynamic variables that change as the user inputs
                        new values.
                    </p>
                </Project>

                <Project
                    title="Lion"
                    githubLink="https://github.com/cs-discord-at-ucf/lion"
                    img={lionImg}
                    technologies={[
                        <Tech.TypeScriptTech />,
                        <Tech.DiscordTech />,
                        <Tech.MongoDBTech />,
                        <Tech.DockerTech />,
                    ]}
                >
                    <p>
                        Lead Developer of Lion, a discord bot developed in
                        TypeScript with over 30 contributors. Helps manage the
                        UCF CS Discord, making the life of the average user and
                        moderator easier, serving <b>14,000+</b> users.
                    </p>
                </Project>
            </div>
        </article>
    );
}

export default ProjectsPage;
