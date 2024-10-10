
import { ButtonType } from '../types'
import styles from './Button.module.css'
// custom button and can have different properties.
const Button = (props: ButtonType) => {
  return (
    <button className={styles.button}>
        {props.text}
    </button>
  )
}

export default Button