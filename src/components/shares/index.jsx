import React from 'react'
import Button from '../button'

import style from './shares.module.scss'

const Shares = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Спіймай всі акції!</h2>
      <div className={style.text}>Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D</div>
      <div className={style.input}>
        <input type="text" placeholder='введіть' />
        <Button className='button' bg={false} title="Підписатись" />
      </div>
    </section>
  )
}

export default Shares