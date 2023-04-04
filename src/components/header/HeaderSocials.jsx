import React, { useRef, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import gsap from 'gsap';

const HeaderSocials = ({ timeline }) => {
  const social = useRef(null);
  useEffect(() => {
    gsap.from(social.current, {
      duration: 0.7,
      delay: 4.5,
      x: -20,
      opacity: 0,
    });
  }, []);

  return (
    <div className="header__socials" ref={social}>
      {/* a / target 은 새로운 탭에서 열기 */}
      <a
        href="https://github.com/kisn3089"
        target="_blank"
        style={{ marginBottom: '-7px' }}>
        <BsGithub />
      </a>
      <a href="https://velog.io/@his" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/img/velog2.ico`}
          style={{
            width: '17px',
            borderRadius: '100%',
            backgroundColor: '#4db5ff',
          }}
        />
      </a>
      <a href="https://zep.us/play/yOvJR5" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/img/zep.png`}
          style={{
            width: '17px',
            borderRadius: '100%',
            backgroundColor: '#4db5ff',
            color: '#111',
          }}
        />
      </a>
    </div>
  );
};

export default HeaderSocials;
