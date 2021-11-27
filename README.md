
  # 원티드 백엔드 프리온보딩 7차 과제 - 카닥

</br>
</br>
</br>
</br>
</br>
</br>

## 🎤 소개

이 레포지토리는 [원티드 프리온보딩 백엔드 코스](https://www.wanted.co.kr/events/pre_onboarding_course_4) 7차 과제를 위해 만들어졌습니다. 

-   일정 : 2021년 11월 22일(월) 오후 5시 ~ 11월 29일(월) 오전 10시

<br>
<br>


## 🧑🏻‍💻 About Me

### 이동훈

- [**github**](https://github.com/dongjay00)
- [**과제 회고**](https://velog.io/@dongjay00/%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%9D%BC%EA%B3%B1%EB%B2%88%EC%A7%B8-%EA%B3%BC%EC%A0%9C-%ED%9A%8C%EA%B3%A0)

<br>
<br>
<br>

## 📕 과제 내용

### [필수 포함 사항]

- README 작성
  - 프로젝트 빌드, 자세한 실행 방법 명시
  - 구현 방법과 이유에 대한 간략한 설명
  - **서버 구조 및 디자인 패턴에 대한 개략적인 설명**
  - 완료된 시스템이 배포된 서버의 주소
  - 해당 과제를 진행하면서 회고 내용 블로그 포스팅
- Swagger나 Postman을 이용하여 API 테스트 가능하도록 구현

</br>

### [개발 요구사항]

😁 **카닥에서 실제로 사용하는 프레임워크를 토대로 타이어 API를 설계 및 구현합니다.**


- 데이터베이스 환경은 별도로 제공하지 않습니다. **RDB중 원하는 방식을 선택**하면 되며, sqlite3 같은 별도의 설치없이 이용 가능한 in-memory DB도 좋으며, 가능하다면 Docker로 준비하셔도 됩니다.
- 단, 결과 제출 시 **README.md** 파일에 실행 방법을 완벽히 서술하여 DB를 포함하여 전체적인 서버를 구동하는데 문제없도록 해야합니다.
- 데이터베이스 관련처리는 raw query가 아닌 **ORM을 이용하여 구현**합니다.
- Response Codes API를 성공적으로 호출할 경우 200번 코드를 반환하고, 그 외의 경우에는 아래의 코드로 반환합니다.

<br/>

:heavy_check_mark: **API 목록**

- 사용자 생성 API (회원가입, 로그인)
- 사용자가 소유한 타이어 정보를 저장하는 API
- 사용자가 소유한 타이어 정보 조회 API

</br>
</br>

## 📕 모델링

</br>

![cddb](https://user-images.githubusercontent.com/68373235/143689186-c941cdf3-74d5-41d5-a986-ff906430ba49.JPG)

</br>
</br>

## 📕 작업 과정

- Node.js, express, Sequelize(Sqlite3)를 이용하여 Api를 구현하였습니다.
- **개인 과제이지만 협업을 하고 있다는 마인드로 작업했습니다.**
  - 팀 프로젝트 때처럼, 이슈 관리에 신경을 썼습니다.
  - 커밋 컨벤션, Git Flow를 지켜가며 작업했습니다.

- Service, Controller 등의 계층 분리를 통해 코드의 가독성을 높였습니다.
- 리팩토링을 통해 가독성을 높이고, 유지보수를 편하게 하기 위해 노력 했습니다.


</br>
</br>

## 💡 구현 기능

### [ 사용자 생성 API ]

- ID / Password로 사용자를 생성하는 API를 구현했습니다.
- 로그인 시, 인증 토큰을 발급하도록 구현했습니다.

<br>

### [ 사용자가 소유한 타이어 정보를 저장하는 API ]

- 자동차 차종 ID(trimID)를 이용하여 사용자가 소유한 자동차 정보를 저장합니다.
  - 자동차 정보는 https://dev.mycar.cardoc.co.kr/v1/trim/ 에서 받아옵니다.

- 한번에 최대 5건까지의 요청을 받을 수 있도록 했습니다.
  - 5건이 넘는 요청을 받을 시, **RequestOverflowError**라는 커스텀 에러를 반환합니다.


<br>

### [ 사용자가 소유한 타이어 정보 조회 API ]

- 현재 로그인한 사용자의 모든 타이어 정보를 조회합니다.

<br>

### [ 에러 핸들링 ]

- 과제에 명시된 응답 코드를 준수하였습니다.
- 자바스크립트 자체 내장 Error 클래스를 상속 받아서, 커스텀 에러를 생성해서 관리했습니다.

<br>
<br>

## 📕 서버 구조 및 디자인 패턴에 대한 개략적인 설명

</br>

- 기본적으로 요청 - 응답 과정에서 다음과 같은 흐름을 타게 된다.

  - req :arrow_right: app :arrow_right: routes :arrow_right: controllers :arrow_right: services :arrow_right: controllers :arrow_right: res

  - express에서 지원하는 middleware로 파트들을 연결한다.

- 로그인 시 인증 토큰이 Cookie를 통해 자동 전송된다. 인증 과정은 각 컨트롤러에서 일일히 검증할 필요 없이, 검증이 필요한 루트에서만 middleware/Auth.js를 통해 검증된다.

- Cardoc의 Api로 데이터를 받아오는 파트는 jobs/cardocApiJobs.js로 따로 분리했다.

</br>
</br>

## ➕ 정리 노트

> 과제를 해결하기 위해 고민했던 흔적과, 정리한 내용들이 담긴 공간입니다.

[노션 정리 노트](https://general-viola-ee5.notion.site/6a91b1a2cf3a4b95bad15c6b855a5e69)

<br>
<br>

## 🛠 실행 방법

- 레포지토리를 clone 받거나, 압축을 해제한 후 npm install을 통해 환경 셋팅을 진행합니다.
- npm start를 통해 서버를 구동합니다.
- src 폴더에 .env 파일을 설정해서, 환경변수를 설정합니다.
- npm start로 서버를 구동시키고, npm test를 입력하면 단위 테스트가 가능합니다.
- [.env설정 노션 링크](https://general-viola-ee5.notion.site/6a91b1a2cf3a4b95bad15c6b855a5e69)
  - 링크 내 환경변수 탭을 확인하시면 됩니다.



</br>
</br>


## 🗂 과제 확인 및 평가 API 명세서

- Postman을 활용하여 API 작동 테스트를 진행했습니다. 
- __배포된 서버 주소__ 및 자세한 API 명세는 아래에서 확인 가능합니다.
- [🗂 API Description Link](https://documenter.getpostman.com/view/12972525/UVJbJdvx)
- [![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/12972525/UVJbJdvx) 을 클릭하여 웹브라우저 혹은 Postman 클라이언트에 콜렉션이 로드되면
  1. Variables 탭에서 서버 Host와 Port를 지정합니다. (기본값이 지정되어 있습니다.)
  2. 그후 우측 상단의 Run 버튼을 눌러 RUN ORDER 화면에 진입한 뒤 Run \[Collection Name\]을 클릭하면, 이상적인 상황에서의 테스트가 진행됩니다.

  3. 요청마다 여러 이상적이지 않은 상황의 테스트에 대한 예시가 있습니다.</br>

</br>
</br>


## 😎 컨벤션 설정

- [👏🏻 협업을 위한 코드 컨벤션 설정하기](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

- [👏🏻 Prettier, ESLint, Airbnb Style Guide로 코드 컨벤션  설정하기](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0?category=911197)

- [👏🏻 협업을 위한 git 커밋 컨벤션 설정하기](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0?category=911197)

- [👏🏻 협업을 위한 Git Flow 설정하기](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-Git-Flow-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0?category=911197)

- [👏🏻 협업을 위한 Git 명령어 가이드](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-Git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EA%B0%80%EC%9D%B4%EB%93%9C?category=911197) 

</br>
</br>


## 🛠 Dependencies

</br>

<div align=center>
<img src="https://user-images.githubusercontent.com/68373235/143690312-7e8f2331-bc8f-4957-8743-ecbbc13301db.JPG" height=850>
</div>

</br>
</br>


## 🌲 File Tree

</br>


```
📦src
 ┣ 📂bin
 ┃ ┗ 📜www.js
 ┣ 📂configs
 ┃ ┣ 📜secretKey.js
 ┃ ┣ 📜db.js
 ┃ ┗ 📜index.js
 ┣ 📂controllers
 ┃ ┣ 📜userController.js
 ┃ ┣ 📜tireController.js
 ┃ ┗ 📜trimController.js
 ┣ 📂globals
 ┃ ┣ 📜index.js
 ┃ ┣ 📜responseMessage.js
 ┃ ┣ 📜routes.js
 ┃ ┗ 📜statusCode.js
 ┣ 📂jobs
 ┃ ┗ 📜cardocApiJobs.js
 ┣ 📂libs
 ┃ ┣ 📜encryption.js
 ┃ ┣ 📜jwt.js
 ┃ ┗ 📜trimLibs.js
 ┣ 📂middlewares
 ┃ ┗ 📜auth.js
 ┣ 📂models
 ┃ ┣ 📜tire.js
 ┃ ┣ 📜trim.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜user.js
 ┣ 📂routes
 ┃ ┣ 📜globalRouter.js
 ┃ ┣ 📜tireRouter.js
 ┃ ┣ 📜trimRouter.js
 ┃ ┣ 📜userRouter.js
 ┃ ┗ 📜index.js
 ┣ 📂services
 ┃ ┣ 📜tireService.js
 ┃ ┣ 📜trimService.js
 ┃ ┗ 📜userService.js
 ┣ 📂test
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┣ 📜postTrim.json
 ┃ ┃ ┃ ┣ 📜signup.json
 ┃ ┃ ┃ ┗ 📜token.json
 ┃ ┗ 📂unit
 ┃ ┃ ┗ 📂controllers
 ┃ ┃ ┃ ┣ 📂tireController
 ┃ ┃ ┃ ┃ ┗ 📜getTire.test.js
 ┃ ┃ ┃ ┣ 📂trimController
 ┃ ┃ ┃ ┃ ┗ 📜postTrim.test.js
 ┃ ┃ ┃ ┗ 📂userController
 ┃ ┃ ┃ ┃ ┣ 📜postToken.test.js
 ┃ ┃ ┃ ┃ ┗ 📜postUser.test.js
 ┣ 📂utils
 ┃ ┣ 📂errors
 ┃ ┃ ┣ 📜commonError.js
 ┃ ┃ ┣ 📜tireError.js
 ┃ ┃ ┣ 📜tokenError.js
 ┃ ┃ ┣ 📜trimError.js
 ┃ ┃ ┣ 📜userError.js
 ┃ ┃ ┗ 📜errors.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜logger.js
 ┃ ┗ 📜resFormatter.js
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.json
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┗ 📜package.json

```

