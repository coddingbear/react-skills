// 3.1.3 모듈 불러오기(import)
import React, { Component } from 'react';
import MyComponent from './MyComponent'; // MyComponent 파일 불러오기

class App extends Component {
  render() {
    return (
      <MyComponent/>
    );
  }
}

export default App;
