import { useEffect, useRef } from 'react';
import slide1 from "../assets/slide1.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/icon4.png";
import i5 from "../assets/icon5.png";
import i6 from "../assets/icon6.png";
import i7 from "../assets/icon7.png";
import i8 from "../assets/icon8.png";
import i9 from "../assets/icon9.png";
import i10 from "../assets/icon10.png";

const logos = [slide1, i3, i4, i5, i6, i7, i8, i9, i10];

const SponsorLogos = () => {
    return (
        <div className="sponsor-container">
            <div className="sponsor-scroll">
                <div className="logo-group">
                    {logos.map((logo, index) => (
                        <img 
                            key={`logo-${index}`} 
                            src={logo} 
                            alt={`Sponsor ${index + 1}`}
                        />
                    ))}
                    {logos.map((logo, index) => (
                        <img 
                            key={`logo-repeat-${index}`} 
                            src={logo} 
                            alt={`Sponsor ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SponsorLogos;