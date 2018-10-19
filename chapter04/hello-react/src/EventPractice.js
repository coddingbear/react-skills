// 4.2 예제로 이벤트 핸들링 익히기
import React, {Component} from 'react';

class EventPractice extends Component {
    state = {
        message: ''
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
                    onChange = {
                        (e) => { 
                            this.setState({
                                // state에 input 값 담기
                                message: e.target.value
                            })
                        }
                    }
                /> 
                <input type="text"
                    name="message"
                    value={this.state.message}
                />
                <button onClick = {
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button>
            </div>
        );
    }
}

export default EventPractice;