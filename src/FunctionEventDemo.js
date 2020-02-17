import React, { useState } from 'react';

const FunctionEventDemo = () => {
    
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    const handleChange = e => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "message") {
            setMessage(e.target.value);
        }

    }
    const handleClick = () => {
        alert(username + " : " + message);
        setMessage('');
        setUsername('');
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="이름을 입력하세요"
                value={ username }
                onChange={ handleChange }></input>
            <input
                type="text"
                name="message"
                placeholder="메시지를 남겨주세요"
                value={ message }
                onChange={ handleChange }></input>
            <br />
            <button
                onClick={ handleClick }>보내기</button>
        </div>
    );
};

export default FunctionEventDemo;