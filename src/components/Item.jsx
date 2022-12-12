import styles from './Item.module.css'
import {Trash, Check, X} from 'phosphor-react'
import { useState } from 'react'

export function Item ({content, deleteItem}) {
    const [checked, isChecked] = useState(false);
    const [checkedOrNot, isCheckedOrNot] = useState(<Check size={26}/>)
    
    function handleDeleteComment() {
        deleteItem(content)
    }

    return (
        <div className='itemSection'>
            <div className={checked ? styles.boxItemGreen : styles.boxItemGray}>
                <h2>{content}</h2> 
            </div>

        <div className={styles.options}>
            <div className={styles.trash}>
                <button onClick={handleDeleteComment}><Trash size={24}/></button> 
            </div>

            <div className={styles.check}>
                <button onClick={() => {
                    if(checked) {
                        isChecked(false);
                        isCheckedOrNot(<Check size={26}/>)
                    }else{
                        isChecked(true);
                        isCheckedOrNot(<X color="red" size={26}/>)
                    }
                }}>{checkedOrNot}</button>

            </div>
        </div>
            
        </div>
    )
}
    
