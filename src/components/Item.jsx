import styles from './Item.module.css'
import {Trash, Check, X, ArrowCounterClockwise} from 'phosphor-react'
import { useState } from 'react'

export function Item ({content, OnDeleteItem}) {
    const [checked, isChecked] = useState(false);
    const [checkedOrNot, isCheckedOrNot] = useState(<Check size={26}/>)
    
    function handleDeleteComment() {
        OnDeleteItem(content)
    }

    return (
        <div className='itemSection'>
            <div className={checked ? styles.boxItemGreen : styles.boxItemGray}>
                <h2>{content}</h2> 
            </div>

        <div className={styles.options}>
            <div className={styles.trash}>
                <button onClick={handleDeleteComment}><Trash size={22}/></button> 
            </div>

            <div className={styles.check}>
                <button><ArrowCounterClockwise color="blue" size={26}/></button>
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
    
