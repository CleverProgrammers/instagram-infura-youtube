import '../styles/globals.css'
import { ModalProvider } from 'react-modal-hook'
import 'react-toastify/dist/ReactToastify.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
