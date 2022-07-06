## IT'S ME
## Using Three.js React Portfolio (2week)
### Update
```
2022.07.06
업데이트 내용
- 로딩동안 스크롤 lock
- 모바일(iphone13 pro) 기준 반응형 스크롤이 맨아래일시 네비바가 푸터를 가리지 않게 수정
```
### Deployment Vercel: https://portfolio-hist.vercel.app/

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
#### Three.js
```
- 지구를 만들고 지구 자전속도로 +=x
- Stars 속성을 통해 별을 생성
```
  ![earth](https://user-images.githubusercontent.com/96061695/177530925-7f18d3c9-e3b4-4117-8f98-018e15a4ebc4.png)

#### PDF
```
- PDF를 링크로 변환하여 다운로드 없이 볼 수 있게 구현
```
  ![pdf](https://user-images.githubusercontent.com/96061695/177530973-f270844b-c704-4944-91e3-f81b6acf64d1.png)
#### Portfolio
```
- Data 형식으로 작성한후 map으로 구현
```
    
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
#### Navibar
```
- 최상단 스크롤에서 내리기 시작하면 아래에서 올라오게 구현
- 최상단 스크롤일시 네비바 사라지게 구현
- 스크롤 위치에 따라 클래스 Active
- 최하단 스크롤시 네비바가 푸터를 가리지 않게 조금 위로 이동
```
#### Contact
```
- Form Submit -> Gmail로 연동되어 알림 구현
- Naver Send Message -> 로그인시 메일 보내기창에 받을 사람에 내 메일 적힘, 비로그인시 로그인창으로 이동
```
    
 ![contact1](https://user-images.githubusercontent.com/96061695/177531078-4728c1e2-01da-4e30-a8cd-c1deae3958bf.png)
 ![conatct3](https://user-images.githubusercontent.com/96061695/177531107-424f9432-026f-4d4e-b861-04a4b5a0529c.png)
 ![contact2](https://user-images.githubusercontent.com/96061695/177531138-2915df71-1d41-479a-8396-243c54f0be86.jpg)
 ![contact45](https://user-images.githubusercontent.com/96061695/177531152-e1dbcf57-b796-4697-8fbc-4457222141a6.png)
 ![login2](https://user-images.githubusercontent.com/96061695/177531197-e47bb151-c7d2-41de-980d-dac06e3d06f7.png)
 ![login1](https://user-images.githubusercontent.com/96061695/177531236-4b2b216e-3ea6-4ef7-ba1b-532658dd5a83.png)
### 개선사항
```
- 특정 클래스가 보일시 스크롤 이벤트 구현 (지금은 300 < window.scrollY 이런식으로 구현)
- Three.js 지구 초기 축소에서 시작하여 확대되는걸로 애니메이션 구현하고 싶었는데 실패 조금더 하면 할 수 있을것 같다.
- 사진이 입자 단위로 잘라져 있다가 모아지는 형태의 애니메이션 구현
```
```
- 멀티캠퍼스 교육때 진행했던 프로젝트는 교육이 끝나면서 네이버 서버가 종료되므로 배포가 되지 않아 PDF로 대체하였습니다.
```
### Next
- React Router 이용하여 정적인 상품 소개 사이트 구축








