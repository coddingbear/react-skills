// 3.2.3 props 기본 값 설정: defaultProps
import React, {Component} from 'react';

class MyComponent extends Component {
    /* props 기본값 설정 2
    static defaultProps = {
        name : '기본 이름'
    }
    */
    render() {
        return (
            <div>
                안녕하세요, 제 이름은 {this.props.name} 입니다.
            </div>
        )
    }
}

// props 기본값 설정 1
MyComponent.defaultProps = {
    name: '기본 이름'
}

export default MyComponent;