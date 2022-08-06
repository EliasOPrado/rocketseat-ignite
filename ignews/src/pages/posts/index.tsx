import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts(){
    return (
        <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>
        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time>12 marco de 2022</time>
                    <strong>Some title to fell the title.</strong>
                    <p>Lorem ipsum dolor some other stuff to place as text..</p>
                </a>
                <a href="">
                    <time>12 marco de 2022</time>
                    <strong>Some title to fell the title.</strong>
                    <p>Lorem ipsum dolor some other stuff to place as text..</p>
                </a>
                <a href="">
                    <time>12 marco de 2022</time>
                    <strong>Some title to fell the title.</strong>
                    <p>Lorem ipsum dolor some other stuff to place as text..</p>
                </a>
            </div>
        </main>    
        </>
    );
}