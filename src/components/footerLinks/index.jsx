import React from 'react'

import style from './footerLinks.module.scss'
import { instagram, telegram, viber } from '../../assets';

const itemsLeft = {
  left: [
    {
      title: '098 900 09 09'
    },
    {
      title: 'Пн - Пт 09:00 - 21:00'
    },
    {
      title: 'Пн - Пт 09:00 - 21:00'
    }
  ],
  icons: [
    {
      icon: instagram,
      link: '/'
    },
    {
      icon: viber,
      link: '/'
    },
    {
      icon: telegram,
      link: '/'
    }
  ]
};
const itemsRight = {
  text1: [
    {
      title: 'Покупцям',
      text: ['Оплата і доставка', 'Повернення', 'Питання та відповіді']
    }
  ],
  text2: [
    {
      title: 'Особистий кабінет',
      text: ['Мої дані', 'Історія замовлень', 'Улюблені', 'Розсилки']
    }
  ],
  text3: [
    {
      title: 'Про компанію',
      text: ['Про нас', 'Новини', 'Стати партнером', 'Угода користувача']
    }
  ]
};

const GridItem = ({ title, text }) => {
  return (
    <div className={style.grid}>
      <div className={style.gridTitle}>{title}</div>
      <ul className={style.gridList}>
        {text.map((item, index) => (
          <li className={style.gridLink} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const FooterLinks = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.info}>
          <div className={style.text}>
            Контакт - центр
          </div>
          {itemsLeft.left.map((item) => (
            <div className={style.title}>{item.title}</div>
          ))}
        </div>
        <div className={style.icons}>
          {itemsLeft.icons.map((item) => (
            <a className={style.iconsLink} href={item.link}>
              <img className={style.iconsImg} src={item.icon} alt="icons" />
            </a>
          ))}
        </div>
      </div>
      <div className={style.right}>
        {Object.values(itemsRight).map((item, index) => (
          <GridItem key={index} title={item[0].title} text={item[0].text} />
        ))}
      </div>
    </div>
  )
}

export default FooterLinks