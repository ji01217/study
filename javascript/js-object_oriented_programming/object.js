var memberArray = ['egoing', 'graphittie', 'leezche'];
console.log('memberArray[2]', memberArray[2]);

var memberObject ={
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezhce'
}
memberObject.designer = 'leezche';                                 // 값 바꾸기
console.log('memberObject.designer', memberObject.designer)        // 값 출력
console.log('memberObject["designer"]', memberObject['designer']); // 값 출력
delete memberObject.manager                                        // 값 삭제
console.log('after delete memberObject.manager', memberObject.manager);

