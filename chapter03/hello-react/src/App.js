
import React, { Component } from 'react';
import MyComponent from './MyComponent'; // MyComponent 파일 불러오기

class App extends Component {
  render() {
    return (
      // 문자열 종류 외의 값을 컴포넌트에 전달할 때는 {}로 감싸야 한다.
      <MyComponent name="React"  age={4} />
    );
  }
}

export default App;
