import { useQuery } from "@tanstack/react-query"
import { fetchUserGroups } from "../http"
import useAuth from "../context/AuthContext"
import { GroupType } from "../types";
import styles from "./GroupsPage.module.css"
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
        <h1>Welcome back!</h1>
    </section>
  )
}

export default GroupsPage