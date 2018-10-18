// 3.2.2 컴포넌트 사용할 때 props 값 설정
import React, { Component } from 'react';
import MyComponent from './MyComponent'; // MyComponent 파일 불러오기

class App extends Component {
  render() {
    return (
      <MyComponent name="React"/>
    );
  }
}

export default App;
