### Samyang Winwin

## Description

삼양 관리사원(이하 회사)과 대리점 고객(이하 고객) 간 데이터 관리를 위한 Web-view 형식의 어플리케이션입니다.

## Environment

갤럭시 기종을 사용하는 40~60대 고객을 중심으로, 안드로이드 환경에서 최적화 될 수 있도록 구현합니다.

## Prerequisite

아래와 같은 프레임워크 및 패키지를 사용합니다.

1. Frontend (ReactJS)

- axios
- styled-components
- React Hooks (useState, useEffect, useContext etc.)

2. Backend (NodeJS, Express, MongoDB)

- CORS
- JSON Web Token
- Nodemon
- Morgan
- Babel
- ffmpeg
- multer
- body-parser

3. Design

- Figma

## Format

개발 표준 및 폴더/파일 작성 형식은 아래와 같습니다.

### 개발 표준

ES6 표준을 준수합니다.

- var (X) -> const / let (O)
- const A = require('a') (X) -> import A from 'a' (O)
- module.exports (X) -> export default / export const (O)

### 폴더

1. Frontend

- 소문자를 사용합니다. ( User (X) -> user (O) )
- 복수형을 사용합니다. ( user (X) -> users (O) )
- components 에는 네비게이션 바, 슬라이드 메뉴 등 화면의 구성 요소를 저장합니다.
- assets 에는 이미지, 영상 자료 등을 저장하며 종류 구분을 위해 images, videos 등의 하위 폴더를 추가할 수 있습니다.
- styles 에는 CSS 관련 파일을 저장합니다.
- views 에는 로그인, 메인, 프로필 등 사용자 화면을 저장합니다.
- App.js와 Index.js는 src 폴더 내에 저장하며 하위 폴더를 구성하지 않습니다.

2. Backend
   (In progess...)

### 파일

1. Frontend

- 첫글자를 대문자로 하는 Camel Case를 준수합니다 ( signup (X) -> SignUp (O) )
- 단수형을 사용합니다 ( Posts (X) -> Post (X) )

2. Backend
   (In progress...)

## Roles & Responsibility

| 이름   | 역할 1     | 역할 2 |
| ------ | ---------- | ------ |
| 장부호 | 기획       | 백엔드 |
| 이현상 | 프론트엔드 | 백엔드 |
