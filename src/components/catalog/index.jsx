import React from 'react'
import Button from '../button'

import { catalog } from '../../assets'

import style from './catalog.module.scss'

const Catalog = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h3>Ми знаємо, що сподобається
          вашим “великим” друзям!</h3>
        <div className={style.subtitle}>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</div>
        <Button bg={true} title='До каталогу' />
      </div>
      <img src={catalog} alt="catalog" />
    </div>
  )
}

export default Catalog