import React from 'react';


const Container = (props) => {
    return (
        <div className='w-full flex flex-row lg:px-64 sm:px-16'>
            <main className='w-full'>
                {props.children}
            </main>
        </div>
    )
}

export default Container