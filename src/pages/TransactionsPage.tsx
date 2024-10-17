import { useLocation } from 'react-router-dom'
import styles from './TransactionsPage.module.css'
import { useQuery } from '@tanstack/react-query';
import { TransactionType } from '../types';
import { fetchTransactions } from '../http';
import Transaction from '../components/Transaction';

export default function TransactionsPage() {
    const path = useLocation().pathname;
    const groupId = path.slice(path.indexOf("/"), path.lastIndexOf("/"))
    alert(groupId);
    const {data, isPending} = useQuery<TransactionType[]>({
      queryKey:['transactions', groupId],
      queryFn: () => fetchTransactions(groupId),
      staleTime: 500
    })
    
  return (
    <section className={styles.transactionspage}>
                {!data || data.length === 0 ? <p>Such Emptiness :( </p> : data.map((transaction) => <Transaction {...transaction} key={transaction.transactionId}/>)}
    </section>
  )
}
