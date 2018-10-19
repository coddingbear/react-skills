// 6.4 응용 - 유동적인 데이터 렌더링
import React, {Component} from 'react';

class IterationSample extends Component {
  // state에 초기 데이터 담기
  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: ''
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  // 데이터 추가 기능 구현
  handleInsert = () => {
    // names 배열에 값을 추가하고, name 값을 초기화 합니다.
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: ''
    })
  }

  // 데이터 제거 기능 구현
  handleRemove = (index) => {
    // 편의상 name의 레퍼런스를 미리 만듭니다.
    const {names} = this.state;

    /* 배열을 자르는 내장 함수 slice와 
      전개 연산자(...)를 사용하여 index번째 값을 제외한 값들을 배열에 넣어줍니다.
    */
    this.setState({
      names: [
        ...names.slice(0, index),
        ...names.slice(index + 1, names.length)
      ]
      /* ES5 문법 코드
      this.state.names.slice(0,index).concat(this.state.names.slice(index+1, this.state.names.length))
      */
    });
  }

  render() {
    const nameList = this.state.names.map (
      (name, index) => (
        <li 
          key={index}
          onDoubleClick={()=> this.handleRemove(index)}>
          {name}
        </li>
      )
    );

    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.name} />
        <button onClick={this.handleInsert}>추가하기</button>
        <ul>
          {nameList}
        </ul>      
      </div>
    );
  }
}

export default IterationSample;