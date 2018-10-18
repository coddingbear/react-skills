// 3.3.1 컴포넌트의 생성자 메서드: counstructor()
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    // class 내부에서 transform-class-properties 문법을 사용하여 설정
    static defaultProps = {
        name : '기본 이름'
    }
    
    static propTypes = {
        name : PropTypes.string, // name props 타입을 문자열로 설정합니다.
        age: PropTypes.number.isRequired // 필수적으로 존재해야 하며, 숫자입니다.
    }

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    
    render() {
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age} 살 입니다.</p>
                <p>숫자: {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>더하기</button>
            </div>
        )
    }
}

export default MyComponent;