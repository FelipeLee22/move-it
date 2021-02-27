import React from 'react';
import { CompletedChalenges } from '../components/CompletedChalenges';
import { CountDown } from '../components/CountDown';
import {Experience} from '../components/experience';
import { Profile } from '../components/Profile';
import {Desafio} from '../components/Desafio';
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';


export default function Home() {
  return (
    
    <div className={styles.container}>
    <Head>
      <title>Início | Move.it</title>
      
    </Head>
    <Experience />
    <section>
      <div>

        <Profile />
        <CompletedChalenges />
        <CountDown />
        
      </div>
      <div>
        <Desafio />

      </div>
    </section>
    
    </div>
  )
}