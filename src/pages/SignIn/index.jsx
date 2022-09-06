/* eslint-disable prettier/prettier */
import './index.css'

import { Checkbox, Input, Notification } from '@douyinfe/semi-ui';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Sign from '../../assets/img/auth/sign.png'
import { userLoginByPwd } from '../../hook/hook'

export default function SignIn () {
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(true)
  const history = useHistory()
  const [password, setPassword] = useState('')
  const [passwordErr, setPasswordErr] = useState(true)
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
    var regex = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (!regex.test(val)) {
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
    setPassword(val)
  }
  const signIn = () => {
    if (emailErr || passwordErr) {
      return
    }
    console.log(email, password);
    userLoginByPwd(email, password).then(res => {
      if (res.data.code == '200') {
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('uid', res.data.data.uid)
        history.push({ pathname: '/layout/game' })
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
    <div className='SignIn'>
      <div className='signInLeft'>
        <div className='leftHeader'>
          <a href="/layout/game">{'< '}Back to Overview</a>
        </div>
        <div className='leftContent'>
          <div className='leftTitle'>Sign In</div>
          <div className='leftInfo'>Enter your email and password to sign in!</div>
          {/* input */}
          <div className='inputCell'>
            <div className='cellTitle'>Email <span>*</span> {emailErr ? <span className='cellErr'>Please enter the correct email</span> : ''} </div>
            <div className='cellInput'>
              <Input defaultValue={email} onChange={changeMail}></Input>
            </div>
          </div>
          <div className='inputCell'>
            <div className='cellTitle'>Password <span>*</span> {passwordErr ? <span className='cellErr'>Please enter a password of at least 6 digits</span> : ''} </div>
            <div className='cellInput'>
              <Input mode='password' defaultValue={password} onChange={changePass}></Input>
            </div>
          </div>
          {/* Checkbox */}
          <div className='CheckboxCell'>
            <div><Checkbox>Keep me logged in</Checkbox></div>
            <div className='forgetPass'><a href="www" target="_blank" rel="noopener noreferrer">Forget password?</a></div>
          </div>
          {/* button */}
          <div className='buttonCell' onClick={signIn}>Sign In
          </div>
          <div className='signUpTips'>
            Not registered yet?<a href="/signup"> Create an Account</a>
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
