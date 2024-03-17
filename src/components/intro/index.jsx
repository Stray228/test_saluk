import React from 'react'
import { IntroSlider } from '../index'

import style from './intro.module.scss'

const Intro = () => {
  return (
    <div className='intro'>
      <IntroSlider />
      <div className={style.left}>
        <h1>Швидше.<br />
          Вище.<br />
          Сильніше.</h1>
        <h2>Разом із Nike</h2>
      </div>
      <div className={style.right}>
        <h3>Знижки до 40%</h3>
        <h5>Залишився лише тиждень</h5>
      </div>
    </div >
  )
}

export default Intro