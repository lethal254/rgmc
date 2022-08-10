import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Provider } from "../context/index"
import "react-alice-carousel/lib/alice-carousel.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
      <ToastContainer position='top-center' theme='colored' />
    </Provider>
  )
}

export default MyApp
