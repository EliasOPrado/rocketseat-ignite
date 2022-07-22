import { AppProp} from 'next/app'

function MyApp({ Component, pageProps }: AppProp) {
  return <Component {...pageProps} />
}

export default MyApp
