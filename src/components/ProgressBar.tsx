import React from 'react';

interface Props {
    percent: number;
    direction: 'horizontal' | 'vertical';
}

const ProgressBar = (props: Props) => {
    const { percent, direction } = props;

    const percentToInt = Math.floor(percent);
    const progress = percentToInt + '%';

    const horizontalStyle = {
        width: progress,
        height: '2px',
    };

    const verticalStyle = {
        width: '2px',
        height: progress,
    };

    return (
        <div className="progressBar w-full h-full relative">
            <div
                style={
                    direction === 'horizontal' ? horizontalStyle : verticalStyle
                }
                className="bg-white rounded-md"
            ></div>
        </div>
    );
};

export default ProgressBar;
