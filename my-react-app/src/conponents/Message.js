import {memo} from "react";
import styles from "./message.module.scss";

export const Message = memo(({message, sendMessage, value, updateValue}) => {

    console.log('mess')
    return (
        <div className={styles.box}>
            {
                message.map((elem, id) => (
                    <div className={styles.messageBox} key={id}>
                        <p>{elem.content}</p>
                        <h4 className={styles.author}>{elem.author}</h4>
                    </div>
                ))
            }

            <div className={styles.messageInput}>
                <input type="text" value={value} onChange={(e) => updateValue(e.target.value)}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
})