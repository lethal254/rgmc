import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Provider } from "../context/index"
import "react-alice-carousel/lib/alice-carousel.css"
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='google-analytics' strategy='lazyOnload'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Component {...pageProps} />
      <ToastContainer position='top-center' theme='colored' />
    </Provider>
  )
}

export default MyApp
