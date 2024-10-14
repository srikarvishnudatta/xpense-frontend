import { GroupType } from "../types"
import styles from './Group.module.css'

function Group(props: GroupType) {
  return (
    <div className={styles.group}>
        <p>{props.groupId}</p>

    </div>
  )
}

export default Group