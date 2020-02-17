import React, { Component } from 'react';

//React 이벤트를 사용할 때 고려할 사항
//1. 이벤트 이름은 camel-case 사용 : onClick, onChange
//2. 이벤트 속성의 값은 함수 (코드를 전달할 수 없음)
//3. DOM 요소에만 이벤트 적용 가능 (React 컴포넌트에는 이벤트 적용 X)

class ClassEventDemo extends Component {
    
    state = {
        message: ''
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="메시지를 남겨주세요"
                    value={ this.state.message }
                    onChange={
                        (e) => {
                            //console.log(e);
                            //console.log(e.target.value);
                            this.setState({ message: e.target.value });
                        }
                    }></input>
                <br />
                <button
                    onClick={
                        (e) => {
                            // const input = document.querySelector('input[type=text]');
                            // console.log(input.value);
                            // input.value = '';
                            console.log(this.state.message);
                            this.setState({ message: ''});
                        }
                    }>보내기</button>
            </div>
        );
    }
}

export default ClassEventDemo;