import { useLocation } from 'react-router-dom'
import styles from './TransactionsPage.module.css'
import { useMutation } from '@tanstack/react-query';

export default function TransactionsPage() {
    const path = useLocation().pathname;
    // const {data, isPending} = useMutation()
  return (
    <section className={styles.transactionspage}>
        
    </section>
  )
}
