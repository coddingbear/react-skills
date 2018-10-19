// 5.1 ref는 어떤 상황에서 사용해야 할까
// App 컴포넌트에서 예제 컴포넌트 렌더링
import React, { Component } from 'react';
import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      <ValidationSample />
    );
  }
}

export default App;

/*
DOM을 꼭 사용해야 하는 상황
- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기
*/