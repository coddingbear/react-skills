// 4.2 예제로 이벤트 핸들링 익히기
import React, {Component} from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="messag"
                    placeholder="아무거나 입력해 보세요"
                    // onChange 이벤트 설정
                    onChange = {
                        (e) => { console.log(e.target.value); }
                    }
                />
            </div>
        );
    }
}

export default EventPractice;