// 8. 함수형 컴포넌트
import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}


// 함수형 컴포넌트 사용법
function HelloWithFunc(props) {
  return (
    <div>Hello, {props.name}</div>
  )
}

// ES6의 화살표 함수와 비구조화 할당 문법
const HelloWithArrowFunc = ({name}) => {
  return (
    <div>Hello, {name}</div>
  )
}
/* 또는 이런 식으로 {}를 생략할 수도 있습니다.
  const HelloWithArrowFunc = ({name}) => (
    <div>Hello, {name}</div>
  )
*/

export { Hello, HelloWithFunc, HelloWithArrowFunc };