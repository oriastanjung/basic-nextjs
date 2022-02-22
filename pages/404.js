import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import styles from '../styles/404.module.css';

export default function Custom404() {
  const router = useRouter();
  const [time, setTime] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div className={styles.container}>
      <h1>Sorry, pages not found</h1>
      <br />
      <p>
        Redirect to homepage in 
        <span style={{ color: 'red' }}>{time}</span>
      </p>
    </div>
  );
}
