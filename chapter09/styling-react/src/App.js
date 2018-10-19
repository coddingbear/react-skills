import React, { Component } from 'react';
import styles from './App.module.css';

console.log(styles); // 콘솔에 무엇이 출력되는지 확인해 보세요.


class App extends Component {
  render() {
    return (
      // 클래스가 여러 개 일 때
     <div className={[styles.box, styles.blue].join(' ')}>
     
     </div>
    );
  }
}

export default App;

/* 또 다른 방법
1. classnames 라이브러리 추가
$ yarn add classnames
2. 다음과 같이 클래스 여러 개 적용
  import className from 'classnames';
  (...)
  <div className={classNames(Styles.box, style.blue)}>
    (...)
  </div>
*/
