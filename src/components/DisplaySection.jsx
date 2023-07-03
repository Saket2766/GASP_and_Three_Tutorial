import React from 'react';

function DisplaySection() {

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className='display-section wrapper'>
            <h2 className='title'>New</h2>
            <p className='text'>Brilliant.</p>
            <span className='descriptioon'>
                A display that is upto 2x brighter in the sun
            </span>
            <button className='button'>
                Try Me!
            </button>
            <button className='back-button' onClick={handleTop}>
                TOP
            </button>
        </div>
    );
}

export default DisplaySection;