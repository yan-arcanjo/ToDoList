import styles from './Item.module.css'
import {Trash} from 'phosphor-react'
//import { useState } from 'react';

export function Item ({content}) {
    
    return (
        <div className='itemSection'>
            <div className={styles.boxItem}>
                <h2>{content}</h2> 
            </div>

            <div className={styles.trash}>
                <button><Trash size={24}/></button> 
            </div>
        </div>
    )
}
    
