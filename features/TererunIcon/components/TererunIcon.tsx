import type { NextPage } from 'next'
import React, {useEffect, useState} from "react";

import styles from "../styles/TererunIconStyle.module.css";

import tererunNoEyesImage from "../../../public/images/tererun_no_eyes.png";
import tererunAnimatedEyes from "../../../public/images/tererun_animated_eyes.gif";

const TererunIcon: NextPage = () => {
    const [location, setLocation] = useState({
        left: 0,
        top: 0
    });

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            const calcX: number = (e.pageX / (window.innerWidth / 2) - 1) * 3;
            const calcY: number = (e.pageY / (window.innerHeight / 2) - 1) * 3;
            setLocation({
                left: calcX,
                top: calcY
            });
        });
    });

    return (
        <div className={styles.tererunIconWrapper}>
            <img className={styles.tererunNoEyesIcon} src={tererunNoEyesImage.src} />
            <img
                className={styles.tererunAnimatedEyes}
                style={{
                    left: location.left,
                    top: location.top
                }}
                src={tererunAnimatedEyes.src}
            />
        </div>
    )
}

export default TererunIcon;
