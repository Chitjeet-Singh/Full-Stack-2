import React, { useMemo } from 'react';
import './SpaceBackground.css';

const SpaceBackground = () => {
    // Generate random box-shadows for stars to avoid thousands of DOM elements
    const generateStars = (n) => {
        let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
        for (let i = 2; i <= n; i++) {
            value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
        }
        return value;
    };

    const stars1 = useMemo(() => generateStars(700), []);
    const stars2 = useMemo(() => generateStars(200), []);
    const stars3 = useMemo(() => generateStars(100), []);

    return (
        <div className="space-background">
            <div className="stars" style={{ boxShadow: stars1 }}></div>
            <div className="stars2" style={{ boxShadow: stars2 }}></div>
            <div className="stars3" style={{ boxShadow: stars3 }}></div>

            <div className="asteroid asteroid-1"></div>
            <div className="asteroid asteroid-2"></div>
            <div className="asteroid asteroid-3"></div>
        </div>
    );
};

export default SpaceBackground;
