import { useState } from 'react';
import styles from './InputItem.module.css'
import { Item } from "./Item"

export function InputItem () {
    const [item, setItem] = useState([])
    const [newItemText, setNewItemText] = useState('')
    //const itemsx = ['olá mundo', 'olá fernanda'];

    function handleCreateNewItem(event) {
        event.preventDefault();
        const newItemText = event.target.item.value;
        setItem([...item, newItemText]);
        setNewItemText('');
    }

    function handleNewItemChange(event) {
        setNewItemText(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleCreateNewItem} className={styles.inputBox}>
                <div className={styles.addItem}>
                    <input 
                        name='item'
                        placeholder='Write your task'
                        value={newItemText}
                        onChange={handleNewItemChange}
                    />
                    <button type='submit'>Add</button>
                </div>
             </form>
            <div className={styles.countItem}>
                <h3>You have {item.length} task(s) on your to do list</h3>
            </div>
             <div className={styles.wrapper}>
                <main>
                    {item.map(item => {
                        return <Item content={item}/>
                    })}
                </main>
             </div>
        </div>
       
        
    )
}