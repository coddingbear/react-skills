// 3.2.1 JSX 내부에서 props 렌더링
import React, {Component} from 'react';

class MyComponent extends Component {
    render() {
        return (
            <div>
                안녕하세요, 제 이름은 {this.props.name} 입니다.
            </div>
        )
    }
}

export default MyComponent;