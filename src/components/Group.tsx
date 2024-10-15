import { useNavigate } from "react-router-dom"
import { GroupType } from "../types"
import styles from './Group.module.css'

function Group(props: GroupType) {
  const navigate= useNavigate();
  const members = props.groupMembers.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(", ")
  return (
    <div className={styles.group} onClick={() => navigate(`/${props.groupId}/transactions`)}>
        <h2>{props.name}</h2>
         <p>Folks: {members}</p>
    </div>
  )
}

export default Group