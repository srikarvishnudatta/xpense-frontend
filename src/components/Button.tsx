
import { ButtonType } from '../types'
import styles from './Button.module.css'
// custom button and can have different properties.
const Button = (props: ButtonType) => {
  return (
    <button className={styles.button}>
        <span>{props.text}</span>
    </button>
  )
}

export default Button