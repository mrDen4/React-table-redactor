import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
        <h1 className={s.header__title}>Тестовое задание для Blend4web</h1>
    </header>
  )
}

export default Header