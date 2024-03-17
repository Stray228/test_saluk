import React from 'react'
import style from './header.module.scss'
import { cart, like, search } from '../../assets';

const navItems = ["новинки", "чоловіки", "жінки", "аксесуари", "акції"];

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.banner}>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.phone}>098 900 09 09</div>
            <div className={style.help}>Допомога</div>
          </div>
          <a className={style.right} href="/">Увійти / Зареєструватися</a>
        </div>
      </div>
      <div className={style.navigate}>
        <div className={style.navWrapper}>
          <div className={style.logo}>IGNAT</div>
          <nav className={style.nav}>
            {navItems.map((item) => (
              <div className={style.item}>{item}</div>
            ))}
          </nav>
        </div>
        <div className={style.searchicon}>
          <img className={style.search} src={search} alt="search" />
          <input className={style.input} type="text" />
          <div className={style.icons}>
            <img src={like} alt="like" />
            <img src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header