import React from 'react';

type Props = {
    text: string
}

function Spinner(props: Props) {
    return (
        <div className='text-center'>
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p data-testid="spinner-text">{props.text}</p>
        </div>
    )
}

 export default Spinner;