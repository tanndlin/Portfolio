import ReactDOM from 'react-dom';

export const smoothTransition = (updateDOM: () => void) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!(document as any).startViewTransition) {
        updateDOM();
        return;
    }

    (document as any).startViewTransition(() => {
        ReactDOM.flushSync(() => {
            updateDOM();
        });
    });
};
