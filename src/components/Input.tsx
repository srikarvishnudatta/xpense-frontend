
import { InputType } from "../types"
import styles from './Input.module.css'

function Input(props: InputType) {
    return (
      <div>
          <input type={props.type} className={styles.input} placeholder={props.placeholder} 
          onChange={(ev) => props.onChange(ev.target.value)}
          value={props.value}
          />
      </div>
    )
  }

export default Input