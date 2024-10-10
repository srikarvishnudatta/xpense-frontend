import { FormEvent, useEffect, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { createNewUser } from '../http'
import styles from './LandingPage.module.css'

import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import  useAuth  from '../context/AuthContext'
const LandingPage = () => {
  const {data, mutate, isSuccess} = useMutation({mutationFn: createNewUser})
  const {setId} = useAuth()
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  function handleSubmit(ev: FormEvent<HTMLFormElement>){
    ev.preventDefault();
    mutate({email: email})
  }
  useEffect(() =>{
    if(isSuccess){
      setId(data);
      navigate('/groups');
    }
  }, [isSuccess])
  return (
    <section className={styles.landingpage}>
      <div className={styles.main}>
      <h1>
        Welcome to Xpense
      </h1>
      <p>
        Tired of ads and pay walls to split expenses?

      </p>
      <div>
        <form className={styles.loginform} onSubmit={handleSubmit}>
          <Input type='text' placeholder='example@gmail.com' onChange={setEmail} value={email}/>
          <Button text='Get started'/>
        </form>
      </div>
      </div>
    </section>
  )
}

export default LandingPage