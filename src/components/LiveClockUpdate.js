import React, { useState, useEffect } from 'react';
import './LiveClockUpdate.css';

function LiveClock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    const hours = currentTime.toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(' ')[0];
    const period = currentTime.toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(' ')[1];
    const minutes = currentTime.toLocaleString('en-US', { minute: '2-digit' });
    const seconds = currentTime.toLocaleString('en-US', { second: '2-digit' });

    return (
        <div className="live-clock">
            <div className="live-clock__time">
                <span className="live-clock__hours">{hours}</span>:
                <span className="live-clock__minutes">{minutes}</span>:
                <span className="live-clock__seconds">{seconds}</span>
                <span className="live-clock__period">{period}</span>
            </div>
        </div>
    );
}

export default LiveClock;
