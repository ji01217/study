# 2nd Toy Project

## 0. 0주차 설계

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



## 1. 1주차 구현 과정

페이지 url 설정

1. 메인페이지

   'http://localhost:3000/'

2. 알파벳 검색 페이지

   'http://localhost:3000/browse/:alpha'

3. 칵테일 상세 페이지

   'http://localhost:3000/cocktail/:id'

4. 재료 상세 페이지

​		'http://localhost:3000/ingredient/:id'

react-router-dom가 업데이트되면서 switch를 지원하지 않는다는 것을 알게되었다.

switch -> Routes로 바뀜 => 헷갈려서 5.3.0으로 다운그레이드해서 코드 작성

```js
{/* App. js */}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/browse/:alphabet">
          <BrowseAlphabet />
        </Route>
        <Route path="/cocktail/:id">
		  <CocktailPage />
        </Route>
        <Route path="/ingredient/:id">
      	  <IngredientPage />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
```

계속 메인페이지 `<Home>` 이외의 다른 페이지가 뜨지 않아서 router 작성을 잘못한 줄 알았는데 상위 경로의 코드(path = '/')가 가장 위에 있으면 다른 페이지 경로를 다 잡아먹기 때문에 안되는 것이었다. => 가장 밑으로 내려서 해결

link to로 클릭하여 다른 페이지로 넘어갈 수 있도록 코드를 작성하였다. 이때 Link to가 연결된 요소를 클릭했을 때 url은 바뀌는데 페이지가 안 넘어가고 새로고침을 한 번 해야지 넘어가는 현상이 있었다. => 스터디원들에게 물어보니 router 버전 문제라고 하여 router 업데이트를 통해 해결

```js
{/* App. js */}

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import CocktailPage from './routes/CocktailPage';
import IngredientPage from "./routes/IngredientPage";
import BrowseAlphabet from "./routes/BrowseAlphabet"
import { Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Link to={"/"}><h1>COCKTAIL</h1></Link>
      <hr />
      <Routes>
        <Route path="/browse/:alphabet" element={<BrowseAlphabet />} />
        <Route path="/cocktail/:id" element={<CocktailPage />} />
        <Route path="/ingredient/:name" element={<IngredientPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
```

메인 페이지를 제일 아래에 둬야하는 것이 불편했는데 중간 발표를 통해 exact={true}를 추가하면 path 속성에 넣은 경로값이 정확히 URL의 경로값과 일치할 때만 렌더링되도록 할 수 있다는 것을 배웠다.

또, api 주소를 받아올 때 브라우저에서 주소를 입력하면 json이 뜨는데 react에서는 json형식이 아니라 에러가 발생하였다. 

```js
  const search = async(event) => {
    setCocktail(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`)
    fetch(cocktail).json()
    .then(data => console.log(data));
  }
```

그 원인은 api 주소 앞에 `http://`가 들어가지 않아서 브라우저에서는 자동으로 입력이 되었지만 리액트에서는 안됐던 것이었다.



### 1주차 구현내용

**1. 메인페이지**

![image-20220429222812596](README.assets/image-20220429222812596.png)

**2. 칵테일 상세페이지**

![image-20220429223720470](README.assets/image-20220429223720470-16513304841152.png)

**3. 재료 상세페이지**

![image-20220429224045264](README.assets/image-20220429224045264.png)



### 1주차 느낀점

중간 발표에서 현재까지 다른 스터디원들의 각자 프로젝트 구현 내용을 들을 수 있었다. 나는 다른 스터디원들과는 다르게 API를 사용하였는데, 너무 많은 기능을 가진 API를 사용하니 스스로 구현한 기능이 매우 적다고 느껴져서 아쉬웠다. 남은 기능인 알파벳으로 칵테일 나열하기를 구현한 후에 css 요소를 좀 더 다양하게 추가하여 멋진 웹사이트를 만들고 싶다!
