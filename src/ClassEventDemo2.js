import React, { Component } from 'react';


class ClassEventDemo2 extends Component {
    
    state = {
        message: ''
    }

    constructor(props) {
        super(props);

        //this.handleChange.bind(xxx)
        // -> handleChange 함수에서 this를 xxx로 설정
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({ message: e.target.value });
    }
    handleClick(e) {
        alert(this.state.message);
        this.setState({ message: ''});
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
                    onChange={ this.handleChange }></input>
                <br />
                <button
                    onClick={ this.handleClick }>보내기</button>
            </div>
        );
    }
}

export default ClassEventDemo2;