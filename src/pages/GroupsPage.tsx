import { useQuery } from "@tanstack/react-query"
import { fetchUserGroups } from "../http"
import useAuth from "../context/AuthContext"
import { GroupType } from "../types";
import styles from "./GroupsPage.module.css"
import Group from "../components/Group";
import Button from "../components/Button";
import Input from "../components/Input";
// render all groups here
function GroupsPage() {
  const {userId}= useAuth();
  const {data, isFetching, isError, refetch}= useQuery<GroupType[]>({
    queryKey:['groups', userId],
    queryFn: () => fetchUserGroups(userId),
    staleTime:300
})
if(isFetching) return <div>Fetching data</div>
if (isError) {
  return <div>cannot fetch data</div>
}
  return (
    <section className={styles.grouppage}>
        <h2>Welcome back!</h2>
        <div className={styles.searchbar}>
        <Input type={"text"} placeholder={"Search"} />
        <Button text={"New Group"} disabled={false} />
        </div>
        <div className={styles.groupdata}>
        {!data || data.length === 0 ? <p>Such Emptiness :( </p> : data.map((group) => <Group {...group} key={group.groupId}/>)}
        </div>
    </section>
  )
}

export default GroupsPage