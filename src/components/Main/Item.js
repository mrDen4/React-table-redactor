import React from 'react'
import s from './Item.module.css'
import changeIcon from '../../assets/imgs/change-icon.png'

function Item({ item, i, changeItem }) {
    return(
        <tr className={s.table__row} key={i}>
            <td className={s.row__id}>
                <p>
                    {i + 1}
                </p>
                <button className={s.row__change}>
                    Изменить поле
                </button>
            </td>
            <td className={s.row__name}>
                <p>
                {item.name}
                </p>
                <button className={s.row__change} onClick={(ev) => {changeItem(ev)}}>
                    Изменить поле
                </button>
                <button disabled className={s.row__change_save} onClick={(ev) => {changeItem(ev)}}>
                    Сохранить
                </button>
            </td>
            <td className={s.row__type}>
                <p>
                {item.type}
                </p>
                <button className={s.row__change}>
                    Изменить поле
                </button>
            </td>
            <td className={s.row__color}>
                <p>
                {item.color}
                </p>
                <button className={s.row__change}>
                    Изменить поле
                </button>
            </td>
        </tr>
    )
}

export default Item