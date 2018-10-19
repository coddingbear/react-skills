// 8.1 함수형 컴포넌트 사용
import React, { Component } from 'react';
import {Hello, HelloWithFunc, HelloWithArrowFunc} from './ComponentSample';
class App extends Component {
 
  render() {
    return (
      <div>
        <Hello name="홍길동" />
        <HelloWithFunc name="함수형 컴포넌트" />
        <HelloWithArrowFunc name="화살표 함수 컴포넌트" />
      </div>
    );
  }
}

export default App;