import type { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container = (props: ContainerProps) => {
    return (
        <div className="flex flex-row flex-1 w-full max-w-5xl mx-auto px-6 max-sm:px-4">
            <main className="flex-1 w-full">{props.children}</main>
        </div>
    );
};

export default Container;
