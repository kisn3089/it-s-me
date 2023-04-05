import React, { useRef, useEffect } from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sub = useRef(null);
  const main = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);

  useEffect(() => {
    gsap.from([sub.current, main.current], {
      scrollTrigger: {
        trigger: sub.current,
        start: 'top bottom',
        end: '+=40%',
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.3,
      ease: 'Expo.inOut',
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(card1.current, {
      scrollTrigger: {
        trigger: card1.current,
        start: 'top bottom',
        end: '+=50%',
        scrub: true,
      },
      opacity: 0,
      x: -100,
      duration: 0.5,
      delay: 0.3,
      ease: 'Expo.inOut',
    });
    gsap.from(card2.current, {
      scrollTrigger: {
        trigger: card1.current,
        start: 'top bottom',
        end: '+=50%',
        scrub: true,
      },
      opacity: 0,
      x: 100,
      duration: 0.5,
      delay: 0.3,
      ease: 'Expo.inOut',
    });
  }, []);

  return (
    <section id="experience">
      <h5 ref={sub}>What Skills I Have</h5>
      <h2 ref={main}>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend" ref={card1}>
          <h3>Skill</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">
                  유지보수를 고려하고 재활용을 위해 Atomic 디자인 패턴으로
                  컴포넌트를 작은 단위로 나누어 개발합니다.
                </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">
                  Canvas 등 Element 요소들의 속성과 기능을 활용할 수 있습니다.
                </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">
                  코드 재활용성을 높이기 위해서 작은 순수 함수들을 쪼개어 만드는
                  함수형 프로그래밍을 선호합니다.
                </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Styled Components</h4>
                <small className="text-light">
                  모든 기기에 대응하는 반응형과 동적 스타일, 원하는 애니메이션을
                  구현할 수 있습니다.
                </small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}
        <div className="experience__backend" ref={card2}>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">
                  타입 체크와 타입 가드를 통해서 컴파일 단계와 런타임 단계에서
                  안전한 개발 환경을 만들고 IDE 자동완성을 통해 휴먼에러를
                  방지합니다.
                </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Query</h4>
                <small className="text-light">
                  데이터를 복잡한 전역 상태 MiddleWare로 저장할 필요없이
                  전역으로 캐시가 되기 때문에 네트워크 최적화에 용이하여
                  사용합니다.
                </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Recoil</h4>
                <small className="text-light">
                  React Query를 사용하면서 전역 상태로 관리해야할 데이터들이
                  줄어들었고 React 스케줄링을 지원하는 등 간단하고 빠르게 구현
                  가능한 Recoil를 주로 사용합니다.
                </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Three.js</h4>
                <small className="text-light">
                  사용자와 더 입체적이고 인터렉티브한 상호작용 경험을 위해
                  꾸준히 학습하고 있습니다.
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
