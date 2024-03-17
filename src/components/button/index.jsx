import React from 'react'

import style from './button.module.scss'

const Button = ({ bg, title }) => {
  return (
    <a className={style.btn} href='/'
      style={{ background: bg ? '#000' : '#626262' }}
    >{title}</a>
  )
}

export default Button