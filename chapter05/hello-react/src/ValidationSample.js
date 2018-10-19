// 5.1 ref는 어떤 상황에서 사용해야 할까
// 예제 컴포넌트 생성
import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }
  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
  }

  render() {
    return (
      <div>
        <input type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;