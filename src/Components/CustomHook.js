import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'

export default function CustomHook() {
  const [nextday, setNextDay] = useState('Tesuday')
  const nextDay = useNexvious(nextday)
  const getCurrentDay = () => {
    if(nextday === 'Monday') {
      setNextDay('Friday')
    } else if(nextday === 'Tesuday') {
      setNextDay('Monday')
    }else if(nextday === 'Wednesday') {
      setNextDay('Tesuday')
    }else if(nextday === 'Thursday') {
      setNextDay('Wednesday')
    }else if(nextday === 'Friday') {
      setNextDay('Thursday')
    }
  }

  function useNexvious(val) {
    const ref = React.useRef()
    useEffect(() => {
      ref.current = val
    },[val])
    return ref.current
  }
  return (
    <section className='main'>
      <article className='article'>
      <h1 className='header'>
        Next Day is:<span className='span-color'> {nextDay}</span><br />
        {
          nextday && (
            <span className='span'>Current work day is:<span className='span-color'> {nextday}</span></span>
          )
        }
      </h1>
      <button className='button' onClick={getCurrentDay}>
        Get Next Day
      </button>
      </article>
    </section>
  )
}