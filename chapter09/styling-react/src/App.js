import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.css'; // classNames 사용 할때는 App.css 파일로 불러오기

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      // 클래스가 여러 개 일 때
     <div className={cx('box', 'blue')}>
     
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

  // classNames 사용 예제
  className('foo', 'bar'); // -> 'foo bar'
  className('foo', {bar: true}); // -> 'foo bar'
  className({'foo-bar': true}); // -> 'foo-bar'
  className({'foo-bar': false}); // -> ''
  className({foo: true, bar: true}); // -> 'foo bar'
  className({foo: true}, {bar: true}); // -> 'foo bar'
  className(['foo', 'bar']) // -> 'foo bar'

  // 형식을 동시에 여러개 받아 올 수 있습니다.
  classNames('foo', {bar:true, duck:false}, 'baz', {quux:true}); //=> 'foo bar baz quux'
  // false, null, 0, undefined는 무시됩니다.
  classNames(null, false, 'bar', undefined, 0, 1, {baz: null}, ''); // => 'bar 1'
*/
