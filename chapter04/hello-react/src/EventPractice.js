// 4.2 예제로 이벤트 핸들링 익히기
// 4.2.3 임의 메서드 만들기
import React, {Component} from 'react';

class EventPractice extends Component {
    state = {
        message: ''
    }

    // 4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text"
                    name="inputText"
                    placeholder="아무거나 입력해 보세요"
                    // onChange 이벤트 설정
                    value={this.state.message}
                    onChange={this.handleChange}
                /> 
                <input type="text"
                    name="message"
                    value={this.state.message}
                    readOnly={true}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;