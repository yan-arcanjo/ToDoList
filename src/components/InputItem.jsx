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

    function handleNewItemChange() {
        setNewItemText(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleCreateNewItem} className={styles.inputBox}>
                <div className={styles.addItem}>
                    <textarea 
                        name='item'
                        placeholder='Write your task'
                        value={newItemText}
                        onChange={handleNewItemChange}
                    />
                    <button type='submit'>Add</button>
                </div>
             </form>

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