/* eslint-disable prettier/prettier */
import './index.css'

import { Checkbox, Input, Notification } from '@douyinfe/semi-ui';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Sign from '../../assets/img/auth/sign.png'
import { sendCode, userRegister } from '../../hook/hook'

export default function SignIn () {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [usernameErr, setUsernameErr] = useState(true)
  const [code, setCode] = useState('')
  const [codeErr, setCodeErr] = useState(true)
  const [isSend, setIsSend] = useState(false)
  const [timeOut, setTimeOut] = useState(10)
  const [emailErr, setEmailErr] = useState(true)
  const history = useHistory()
  const [password, setPassword] = useState('')
  const [passwordErr, setPasswordErr] = useState(true)
  const [isChecked, setIsChecked] = useState(true)

  const changeMail = (val) => {
    var regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!regex.test(val)) {
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }
    setEmail(val)
  }
  const changePass = (val) => {
    console.log(val);
    var regex = /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (!regex.test(val)) {
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
    setPassword(val)
  }
  const changeUser = (val) => {
    console.log(val);
    var regex = /^[a-zA-Z0-9_-]{4,16}$/;
    if (!regex.test(val)) {
      setUsernameErr(true)
    } else {
      setUsernameErr(false)
    }
    setUsername(val)
  }
  const changeCode = (val) => {
    console.log(val);
    var regex = /^-?[0-9]\d*$/;
    if (!regex.test(val)) {
      setCodeErr(true)
    } else {
      setCodeErr(false)
    }
    setCode(val)
  }
  const SendCode = () => {
    if (isSend || emailErr) {
      return
    }

    sendCode(email).then((res) => {
      Notification.open({
        title: `${res.data.msg}`,
        position: 'top',
        isClosable: true,
        duration: 3,
      })
      console.log(res);
      let times = 60
      setIsSend(true)
      const timeOutInterval = setInterval(() => {
        times--
        setTimeOut(times)
        if (times <= 0) {
          setIsSend(false)
          setTimeOut(60)
          times = 60
          clearInterval(timeOutInterval)

        }
      }, 1000);
    }).catch(() => {
      Notification.open({
        title: `send err`,
        position: 'top',
        isClosable: true,
        duration: 3,
      })
    })

  }
  const signIn = () => {
    if (emailErr || passwordErr || usernameErr || codeErr || !isChecked) {
      return
    }
    console.log(email, password);
    userRegister(email, password, code, username).then(res => {
      if (res.data.code == '200') {

        history.push({ pathname: '/signin' })
      } else {
        Notification.open({
          title: `${res.data.msg}`,
          position: 'top',
          isClosable: true,
          duration: 3,
        })
      }

    })
  }
  return (
    <div className='SignUp'>
      <div className='signInLeft'>
        <div className='leftHeader'>
          <a href="/layout/game">{'< '}Back to Overview</a>
        </div>
        <div className='leftContent'>
          <div className='leftTitle'>Sign Up</div>
          <div className='leftInfo'>Enter your email and password to sign up!</div>
          {/* input */}
          <div className='inputCell'>
            <div className='cellTitle'>User Name <span>*</span> {usernameErr ? <span className='cellErr'>Please enter the correct User Name </span> : ''} </div>
            <div className='cellInput'>
              <Input placeholder='User name' defaultValue={email} onChange={changeUser}></Input>
            </div>
          </div>
          <div className='inputCell'>
            <div className='cellTitle'>Email <span>*</span> {emailErr ? <span className='cellErr'>Please enter the correct email</span> : ''} </div>
            <div className='cellInput'>
              <Input placeholder='mail@theapis.xyz' defaultValue={email} onChange={changeMail}></Input>
            </div>
          </div>
          <div className='inputCell'>
            <div className='cellTitle'>Code <span>*</span>  {codeErr ? <span className='cellErr'>Please enter the correct Code </span> : ''} </div>
            <div className='cellInput'>
              <Input placeholder='Code' defaultValue={password} onChange={changeCode}></Input>
              <div className='send' onClick={SendCode}>{isSend ? timeOut : 'send'}</div>
            </div>
          </div>
          <div className='inputCell'>
            <div className='cellTitle'>Password <span>*</span> {passwordErr ? <span className='cellErr'>Please enter the correct password </span> : ''} </div>
            <div className='cellInput'>
              <Input placeholder='Min. 8 characters' mode='password' defaultValue={password} onChange={changePass}></Input>
            </div>
          </div>
          {/* Checkbox */}
          <div className='CheckboxCell' >
            <div><Checkbox checked={isChecked} onChange={(checked) => { setIsChecked(checked.target.checked) }}>By creating an account means you agree to the Terms and Conditions, and our Privacy Policy</Checkbox></div>
            {/* <div className='forgetPass'><a href="www" target="_blank" rel="noopener noreferrer">Forget password?</a></div> */}
          </div>
          {/* button */}
          <div className='buttonCell' onClick={signIn}>Sign In
          </div>
          <div className='signUpTips'>
            Already a member? <a href="/signin"> Sign in</a>
          </div>
        </div>
      </div>
      <div className='signInRight'>
        <img src={Sign} alt="" srcSet="" />
      </div>
      <div className='signInfooter'>
        <div className='footerLeft'>
          © 2022 Hook. All Rights Reserved. Powered by The APIS!
        </div>
        <div className='footerRight'>
          <div>About</div>
          <div>Contact Us</div>
          <div>Terms of Use</div>
          <div>Blog</div>
        </div>
      </div>
    </ div>
  )
}
