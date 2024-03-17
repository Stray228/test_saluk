import React from 'react'

import style from './footerNav.module.scss'


const navItems = ["новинки", "чоловіки", "жінки", "аксесуари", "акції"];

const FooterNav = () => {
  return (
    <div className={style.footerNav}>
      <div className={style.container}>
        <nav className={style.nav}>
          {navItems.map((item) => (
            <div className={style.item}>{item}</div>
          ))}
        </nav>
        <div className={style.reg}>© 2022 — 2023 IGNAT. Усі права захищені.</div>
      </div>
    </div>
  )
}

export default FooterNav