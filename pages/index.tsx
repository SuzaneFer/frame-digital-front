import type {NextPage } from 'next';
import Head from 'next/head';
import Login from '../components/pages/login/login';

const Inicio: NextPage = () => (
  <>
    <Head>
      <title>Frame Digital</title>
      <meta name="description" content="frame-digital" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Login />
  </>
);

export default Inicio;
