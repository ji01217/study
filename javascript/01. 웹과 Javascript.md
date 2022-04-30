# 01. 웹과 Javascript

## 1. 수업소개

HTML - 정적

Javascript - 동적

## 2. 수업의 목적

Javascript는 사용자와 상호작용 할 수 있게 한다.

## 3. HTML과 JS의 만남 : script 태그

script 태그를 이용하여 html에서 javascript를 동작하게 한다.

```html
<body>
  <script>
    document.write('hello, world!'); /* hello, world! */
    document.write(1+1);             /* 2 */
  </script>
</body>
```

javascript는 동적이기 때문에 document.write(1+1);이라고 입력하면 2가 출력된다.

## 4. HTML과 JS의 만남 : 이벤트

```html
<input type="button" value="hi" onclick="alert('hi')">
```

onclick 속성에 alert라는 javascript 코드를 넣을 수 있다.

이때 버튼을 누르면 hi라는 경고창이 등장(이벤트)

이벤트에는 onclick, onchange, onkeydown 등이 있고 필요할 때 구글링으로 검색

## 5. HTML과 JS의 만남 : 콘솔

개발자 탭 > Console

파일을 만들지 않고 Javascript 코드를 실행 할 수 있다.

현재 페이지에서 즉석으로 실행됨

## 6. 데이터 타입(문자열과 숫자)

## 7. 변수와 대입연산자

변수 쓸 때 주의점!

변수 이름 앞에 var을 붙여라

```javascript
var word = "hello"
```

## 8. 웹브라우저 제어

버튼을 누를 때마다 화면과 글자의 색이 바뀌도록 하는 웹페이지를 만들려면?

웹사이트의 색이 바뀌려면 body 태그의 속성이 바뀌어야 한다.

html은 정적인 언어이므로 body 태그가 만들어지면 style 속성 값을 바꿀 수 없다. -> javascript를 통해 해결 할 수 있다!

## 9. CSS기초(style 속성)

pass

## 10. CSS기초(style 태그)

pass

## 11. CSS기초(선택자)

pass

## 12. 제어할 태그 선택하기

어떤 이벤트가 일어났을 때, 페이지의 스타일을 바꾸는 기능 구현

1. 어떤 태그에 스타일이 지정될지 선택

querySelector: 선택자를 이용하여 원하는 태그 선택

```javascript
document.querySelector("body")
```

-> 페이지 내에서 body라는 이름의 태그 모두 선택

2. 선택한 태그에 스타일 적용

```javascript
document.querySelector("body").style.backgroundColor = 'black';
```

3. 이벤트에 기능 추가

```html
<input type="button" value="night" onclick="document.querySelector('body').style.backgroundColor = 'black';">
```

