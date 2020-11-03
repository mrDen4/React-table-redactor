import React from 'react';
import s from './Main.module.css'
import Item from './Item';

function Main(props) {
    return (
        <div className={s.main}>
            <div className={s.main__container}>
                <table className={s.main__table}>
                    <thead className={s.table__head}>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody className={s.table__body}>
                        {
                            props.items.map((item, i) => {
                                return (
                                    <Item 
                                    item = {item}
                                    key =  {i}
                                    i = {i}
                                    changeItem={props.changeItem}/>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button onClick={() => props.addItem({name: '', type: '', color: ''})}>Добавить новую строку</button>
            </div>
        </div>
    )
}

export default Main