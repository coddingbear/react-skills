// 4.2 예제로 이벤트 핸들링 익히기
// 4.2.4 input 여러 개를 핸들링
import React, {Component} from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    // 4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text"
                    name="username"
                    placeholder="아무거나 입력해 보세요"
                    // onChange 이벤트 설정
                    value={this.state.username}
                    onChange={this.handleChange}
                /> 
                <input type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;