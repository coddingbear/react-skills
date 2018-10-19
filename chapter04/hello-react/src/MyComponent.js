// 4.1 리액트의 이벤트 시스템
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    static defaultProps = {
        name : '기본 이름'
    }
    
    static propTypes = {
        name : PropTypes.string, // name props 타입을 문자열로 설정합니다.
        age: PropTypes.number.isRequired // 필수적으로 존재해야 하며, 숫자입니다.
    }

    state = {
        number: 0
    }
    
    render() {
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age} 살 입니다.</p>
                <p>숫자: {this.state.number}</p>
                {/* MyComponent.js 중 render 메서드의 button 요소 */}
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>더하기</button>
            </div>
        )
    }
}

/* 이벤트를 사용할 때 주의 사항
 1. 이벤트 이름은 camelCase로 작성합니다. (예 onClick, onKeyUp)
 2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달합니다.
 3. DOM 요소에만 이벤트를 설정할 수 있습니다.
   <MyComponent onClick={doSomething} />
   <div onClick={this.props.onClick}>
        (....)
   </div>
 4. 이벤트 종류
    Clipboard, Form, Composition, Mouse, Keyboard, Selection, Focus, Touch,
    UI, Image, Wheel, Animation, Media, Transition
    https://facebook.github.id/react/docs/events.html
 */

export default MyComponent;