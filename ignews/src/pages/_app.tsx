import { AppProp} from 'next/app';
import {Header} from '../components/Header'

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProp) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>

  )
}

export default MyApp
