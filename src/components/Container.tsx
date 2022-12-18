import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    return (
        <div className="w-full flex flex-row lg:px-64 sm:px-16">
            <main className="w-full">{props.children}</main>
        </div>
    );
};

export default Container;
