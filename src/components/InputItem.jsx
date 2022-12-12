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

    function deleteItem(itemToDelete) {
        const itemsWithoutDeletedOne = item.filter(item => {
            return item != itemToDelete
        })
        setItem(itemsWithoutDeletedOne);
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
                        required
                    />
                    <button type='submit'>Add</button>
                </div>
             </form>
            <div className={styles.countItem}>
                <h3>You have {item.length} task(s) on your to do list</h3>
                <button disabled={item.length===0} onClick={() => setItem([])}>Delete All Tasks</button>
            </div>
    
             <div className={styles.wrapper}>
                <main>
                    {item.map(item => {
                        return <Item content={item} OnDeleteItem={deleteItem}/>
                    })}
                </main>
             </div>
        </div>
       
        
    )
}