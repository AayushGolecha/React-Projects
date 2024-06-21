import React, { useState, useEffect } from 'react';
import './App.css';
import { Msg1, Msg2, Msg3, Msg4, Msg5 } from './Message'
import Submit from './submit-box'

const LoginForm = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)
  const [emailValidate, setEmailValidate] = useState(false)

  useEffect(() => {
    if (email !== '') {
      setCheck1(false)
      setCheck4(false)

    }
  }, [email])

  useEffect(() => {
    if (password !== '') {
      setCheck2(false)
      setCheck4(false)
    }
  }, [password])

  return (
    <div className='position'>
      <h1>Login Form</h1>
      <form >
        <div className='flex'>
          <span className='foo'>Email:</span>
          <div>
            <input className='font'
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => { setUsername(e.target.value) }}
            />
            <div>{emailValidate ? <Msg5 /> : []}</div>
            <div>{check1 ? <Msg1 /> : []}</div>
          </div>
        </div>
        <div className='flex'>
          <span className='foo'>Password:</span>
          <div>
            <input className='font'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>{check2 ? <Msg2 /> : []}</div>
          </div>
        </div>
        <Submit email={email} password={password} check1={check1} setCheck1={setCheck1} check2={check2} setCheck2={setCheck2} check3={check3} setCheck3={setCheck3} check4={check4} setCheck4={setCheck4} emailValidate={emailValidate} setEmailValidate={setEmailValidate} />
        <div>{check3 ? <Msg3 /> : []}</div>
        <div>{check4 ? <Msg4 /> : []}</div>
      </form>
    </div>
  );
};

export default LoginForm;
