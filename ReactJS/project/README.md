# 2nd Toy Project

## 0. 설계

퍼소나를 나와 같은 '20대 여성'으로 잡고, 내가 평소에 관심있어하고 좋아하는 것들이나 자주 방문하는 사이트들을 생각해보았다.

1. 쇼핑몰
2. 연예인 관련 정보, 소식 사이트
3. 음악
4. 맛집
5. 술
6. ...

이 중 어떤 것으로 프로젝트 주제를 설정하지 고민하다가 칵테일의 종류가 굉장히 많은데 그 중 항상 어떤 칵테일을 먹어야할지 고민을 했던 기억이 났다. 그래서 칵테일에 대한 정보를 제공하는 사이트가 있으면 좋겠다는 생각이 들었다. 마침 칵테일 API를 제공하는 사이트가 있어 쉽게 정보를 받아올 수 있겠다고 생각하였다.

칵테일 API 제공 사이트

https://www.thecocktaildb.com/api.php

이 사이트에서는 여러가지 기능의 API를 제공하는데, 

1. 칵테일 이름 검색 API (이름을 전체 다 입력하지 않아도 입력된 알파벳이 포함된 칵테일 검색 가능)
2. 각 알파벳으로 시작하는 칵테일 리스트 API
3. 칵테일 재료 정보 API
4. 칵테일 랜덤 추천 API
5. ... 

등의 다양한 기능이 있다.

제공되는 API를 최대한 활용하여 웹사이트를 제작하려고 한다.

**웹사이트 구현 계획**

- 메인 페이지

  1. 칵테일 이름 검색

     -> 한글자씩 입력할 때 마다 자동으로 검색된 칵테일을 화면에 보여줌

  2. 랜덤 칵테일 소개

- 알파벳 검색 페이지

  각 알파벳을 누르면 그 알파벳으로 시작하는 칵테일 소개

- 상세 페이지

  - 칵테일 상세 페이지

    각 칵테일의 사진 / 이름을 누르면 칵테일 상세 페이지로 이동

    1. 이미지
    2. 재료 -> 재료를 클릭하면 재료 소개 페이지로 이동
    3. 관련 태그
    4. 소개말 (영어 외 2가지 언어 제공)
    5. 칵테일 잔

  - 재료 상세 페이지

    1. 재료의 상세 설명
    2. 알코올 도수 표시
    3. 이 재료가 들어간 칵테일

**웹사이트 예시**

1. 메인페이지

   ![image-20220421012148913](README.assets/image-20220421012148913.png)

2. 알파벳으로 검색 페이지

   ![image-20220421012206555](README.assets/image-20220421012206555.png)

3. 상세페이지(칵테일)

   ![image-20220421012222995](README.assets/image-20220421012222995.png)

4. 상세페이지(재료)

   ![image-20220421163538311](README.assets/image-20220421163538311.png)

**추가 구현 원하는 기능**

- 설명이 영어로 되어있기 때문에 API를 이용해서 영어를 한글로 번역

  https://developers.naver.com/docs/papago/papago-nmt-example-code.md

- 여러 카테고리를 나눠서, 알코올, 논알코올, 칵테일 종류, 칵테일잔 종류에 따라 칵테일을 분류하여 찾아볼 수 있는 필터기능

## 1. 1주차

페이지 url 설정

1. 메인페이지

   'http://localhost:3000/'

2. 알파벳 검색 페이지

   'http://localhost:3000/browse/:alpha'

3. 칵테일 상세 페이지

   'http://localhost:3000/cocktail/:id'

4. 재료 상세 페이지

​		'http://localhost:3000/ingredient/:id'

react js가 업데이트되면서 switch를 지원하지 않는다는 것을 알게되었다.

switch -> Routes로 바뀜

```js
# index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```



```js
# app.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/browse">
          <h1>hello</h1>
        </Route>
        <Route path="/cocktail/:id">

        </Route>
        <Route path="/ingredient/:id">

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
```

계속 다른페이지가 안떠서 react-router-dom작성을 잘못한건줄 알았는데 주소를 아무것도 작성하지않았을 때의 코드가 가장위에 있으면 안되는 것이었다.

```js
  const search = async(event) => {
    setCocktail(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`)
    fetch(cocktail).json()
    .then(data => console.log(data));
  }
```

api 주소 앞에 http안들어감

link to로 클릭하면 url은 바뀌는데 페이지가 안넘어감 => router 업데이트 후 해결

react-router-dom 업데이트

nav바 추가예정
