import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    return (
        <div className="flex flex-row flex-1 w-full lg:px-64 sm:px-16">
            <main className="flex-1 w-full my-auto">{props.children}</main>
        </div>
    );
};

export default Container;
