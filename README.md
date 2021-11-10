# Cart App

무신사 과제<br/>
리액트(create-react-app)로 달력 어플리케이션 입니다.<br/>

## 스크립트

개발 모드 실행

### `yarn start`

프로덕션 빌드

### `yarn build`

<br/><br/>

## 구성

### src 디렉토리 구조

디렉토리 구조는 다음과 같이 정의하였습니다.

- App.jsx<br/>
  어플리케이션의 시작점 입니다.
  <br/>

- components<br/>
  아토믹 디자인을 참고하여 디렉토리 구조를 작성하였습니다. (atoms, moledules, organisms)
  <br/>

- style<br/>
  글로벌 스타일 관련 코드가 정의되어 있습니다.
  <br/>

- containers<br/>
  상태 관리를 위한 컴포넌트가 정의되어 있습니다.
  <br/>

- context<br/>
  스케쥴 관련 상태 관리를 위한 코드가 정의되어 있습니다.
  <br/>

- utils<br/>
  공통 함수가 정의되어 있습니다.
  <br/>

```
src /
├─ components/
│  ├─ atoms
│  ├─ molecules
│  ├─ organisms
│
├─ pages/
├─ context/
├─ style/
├─ utils/
│  ├─ utils.js
├─ App.jsx
```

<br/><br/>

## 주요 설치 패키지

- node-sass, classnames
  css module을 위한 패키지

- moment
  날짜 관련 객체를 다루기 위한 패키지
