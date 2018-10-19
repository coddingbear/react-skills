// 5.3 컴포넌트에 ref 달기
// 컴포넌트 초기 설정
import React, { Component } from 'react';

class ScrollBox extends Component {
  
  // 컴포넌트에 메서드 생성
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 앞 코드에서 비구조화 할 당 문법을 사용했습니다.
       다음 코드와 같은 의미입니다.
       const scrollHeight = this.box.scrollHeight; // 스크롤 박스 내부 높이(650px)
       const clientHeight = this.box.clientHeight;  // 스크롤 박스 외부의 높이(300px)
    */
    this.box.scrollTop = scrollHeight - clientHeight;  // 세로 스크롤바 위치(0~350px)
  }

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }

    return (
      <div
        style={style}
        ref={(ref) => this.box=ref}>
        <div style={innerStyle}/>
      </div>
    );
  }
}

export default ScrollBox;