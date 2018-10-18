// 3.2.4 props 검증: propTypes
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
    
    render() {
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age} 살 입니다.</p>
            </div>
        )
    }
}

/*
MyComponent.propTypes = {
    name: PropTypes.string, // name props 타입을 문자열로 설정합니다.
    age: PropTypes.number.isRequired // 필수적으로 존재해야 하며, 숫자입니다.
}

 // 더 많은 propTypes 종류
 - array : 배열
 - bool : 참, 거짓
 - func : 함수
 - number : 숫자
 - object : 객체
 - string : 문자열
 - symbol : ES6 문법의 심벌 객체
 - node, element
 - instanceOf(MyClass)
 - oneOf(['Male', 'Female']), oneOfType([React.PropTypes.string, React.PropTypes.number])
 - arrayOf(React.PropTypes.number), objectOf(React.PropTypes.number)
 - shape({name: React.PropTypes.string, age: React.PropTypes.number})
 - any: 아무 종류
*/

export default MyComponent;