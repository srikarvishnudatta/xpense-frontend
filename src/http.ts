export async function createNewUser(eventData : {email:string}){
    const response = await fetch("http://localhost:8081/user", {
        method:"POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(eventData.email)
    });
    const userId = await response.json();
    return userId.id;
}  
export async function fetchUserGroups(userId:string){
    const response = await fetch(`http://localhost:8081/${userId}/groups`)
    const groups = await response.json();
    return groups
}
export async function fetchTransactions(groupId:string){
    const response = await fetch(`http://localhost:8081/${groupId}/transactions`)
    const transactions = await response.json();
    return transactions;
}