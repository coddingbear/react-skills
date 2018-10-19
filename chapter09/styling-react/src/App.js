// 9.2 Sass 사용하기
import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.scss'; // classNames 사용 할때는 App.css 파일로 불러오기

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (
      // isBlue값이 true일 때만 blue 클래스 적용
     <div className={cx('box', {blue: isBlue})}>
        <div className={cx('box-inside')}/>
     </div>
    );
  }
}

export default App;

/* 9.2.1 프로젝트에 Sass 적용
1. node-sass, sass-loader 설치
  $ yarn add node-sass sass-loader
2. config/webpack.config.dev.js 수정  sass-loader 부분 수정
*/
