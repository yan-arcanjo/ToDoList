import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './InputItem.module.css'
import { Item } from "./Item"

export function InputItem () {
    const [item, setItem] = useState([
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    ])
    const [newItemText, setNewItemText] = useState('')
    const [checkCount, setCheckCount] = useState(0);
    //const itemsx = ['olá mundo', 'olá fernanda'];

    function handleCheckCount () {
        setCheckCount(checkCount + 1);
    }

    function handleUncheckCount () {
        setCheckCount(checkCount - 1);
    }

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
        <div className={styles.main}>
            <form onSubmit={handleCreateNewItem} className={styles.inputBox}>
                <div className={styles.addItem}>
                    <input 
                        name='item'
                        placeholder='Adicione uma nova tarefa'
                        value={newItemText}
                        onChange={handleNewItemChange}
                        required
                    />
                    <button type='submit'>
                        Criar 
                        <PlusCircle size={16}/>
                    </button>
                    
                </div>
             </form>
            <div className={styles.countItem}>
                <h3>Tarefas criadas <span>{item.length}</span></h3>
                <h3>Concluidas <span>{checkCount} de {item.length}</span></h3>
            </div>


             <div className={styles.wrapper}>
                {item.length > 0 ? 
                    <main>
                    {item.map(item => {
                        return <Item content={item} OnDeleteItem={deleteItem} onCheck={handleCheckCount} onUncheck = {handleUncheckCount}/>
                    })}
                    </main> 
                    : <main className={styles.noTasks}>
                        <img src="../src/assets/Clipboard.svg" alt="" />
                        <p><strong>Você ainda não tem tarefas cadastradas</strong><br></br>
                            Crie tarefas e organize seus itens a fazer</p>
                      </main>
                }
             </div>
        </div>
       
        
    )
}