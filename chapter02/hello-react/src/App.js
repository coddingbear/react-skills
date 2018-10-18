import React, { Component, Fragment } from "react";
class App extends Component {
  render() {
    return (
      <Fragment>
        {/* react v16 이상에서 div 감싸지 않고 여러 요소를 렌더링할 때 Fragment 컴포넌트를 사용한다. */}
        <h1>리액트 안녕</h1>
        <h2>당신은 어썸한가요?</h2>
      </Fragment>
    );
  }
}

export default App;
