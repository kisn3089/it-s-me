## IT'S ME
## Using Three.js React Portfolio (2week)
### Update
```
2022.07.06
업데이트 내용
- 로딩동안 스크롤 lock
- 모바일(iphone13 pro) 기준 반응형 스크롤이 맨아래일시 네비바가 푸터를 가리지 않게 수정
```
### Deployment Vercel: https://portfolio-p21cqb2ka-kisn3089.vercel.app/

### Technology
- React
  - hooks ( useState, useRef, useEffect )
  - React icons
- Three.js
  - useFrame, useLoader
  - sphereGeometry
  - meshPhongMaterial
  - meshStandardMaterial
- Canvas
  - OrbitControls
  - ambientLight
  - Stars
  - pointLight
- Animation: GSAP
  - Timeline
  - ScrollTrigger
### 구현
- Three.js
  - 지구를 만들고 지구 자전속도로 +=x
  - Stars 속성을 통해 별을 생성
    ![](C:/Users/InSung/Desktop/earth.png)
- PDF
  - PDF를 링크로 변환하여 다운로드 없이 볼 수 있게 구현
  ![](C:/Users/InSung/Desktop/pdf.png)
- Portfolio
  - Data 형식으로 작성한후 map으로 구현
```javascript
      const data = [
      {
          id: 1,
          image: its,
          title: 'IT.S ME Using Three.js React Portfolio',
          github: 'https://github.com/kisn3089/it-s-me',
          demo: 'https://portfolio-hist.vercel.app/'
      }]
    
      
      {data.map(({id, image, title, github, demo}) => {
          return (
              <article key={id} className='portfolio__items' ref={refs}>
                 <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                 </div>
                 <h3>{title}</h3>
                 <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live PDF</a>
                 </div>
              </article>
          )
      })}
```
- Navibar
  - 최상단 스크롤에서 내리기 시작하면 아래에서 올라오게 구현
  - 최상단 스크롤일시 네비바 사라지게 구현
  - 스크롤 위치에 따라 클래스 Active
  - 최하단 스크롤시 네비바가 푸터를 가리지 않게 조금 위로 이동
- Contact
  - Form Submit -> Gmail로 연동되어 알림 구현
  ![](C:/Users/InSung/Desktop/contact1.png)
  ![](C:/Users/InSung/Desktop/conatct3.png)
  ![](C:/Users/InSung/Desktop/contact2.jpg)
  ![](C:/Users/InSung/Desktop/contact45.png)
  - Naver Send Message -> 로그인시 메일 보내기창에 받을 사람에 내 메일 적힘, <br />비로그인시 로그인창으로 이동
  
  ![](C:/Users/InSung/Desktop/login2.png)
  ![](C:/Users/InSung/Desktop/login1.png)

### 개선사항
```
- 특정 클래스가 보일시 스크롤 이벤트 구현 (지금은 300 < window.scrollY 이런식으로 구현)
- Three.js 지구 초기 축소에서 시작하여 확대되는걸로 애니메이션 구현하고 싶었는데 실패 조금더 하면 할 수 있을것 같다.
- 사진이 입자 단위로 잘라져 있다가 모아지는 형태의 애니메이션 구현
```
- 멀티캠퍼스 교육때 진행했던 프로젝트는 교육이 끝나면서 네이버 서버가 종료되므로 배포가 되지 않아 PDF로 대체하였습니다.
### Next
- React Router 이용하여 정적인 상품 소개 사이트 구축








