import type { NextPage } from 'next'
import React, {useEffect, useState} from "react";

import styles from "../styles/TererunIconStyle.module.css";

import Image from "next/image";

import tererunNoEyesImage from "../../../public/images/tererun_no_eyes.png";
import tererunAnimatedEyes from "../../../public/images/tererun_animated_eyes.gif";

const TererunIcon: NextPage = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const calcX: number = (e.pageX / (window.innerWidth / 2) - 1) * 3;
      const calcY: number = (e.pageY / (window.innerHeight / 2) - 1) * 3;
      setLeft(calcX);
      setTop(calcY);
    });
  });

  return (
      <div className="tererun-icon-wrapper">
          <img className={styles.tererunNoEyesIcon} src={tererunNoEyesImage.src} />
          <img
              className={styles.tererunAnimatedEyes}
              style={{
                left: left,
                top: top
              }}
              src={tererunAnimatedEyes.src}
          />
        </div>
  )
}

export default TererunIcon;
