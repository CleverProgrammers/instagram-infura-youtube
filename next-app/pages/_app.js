import { AppProvider } from '../context/context'
import '../styles/globals.css'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { ModalProvider } from 'react-modal-hook'
import '@rainbow-me/rainbowkit/styles.css'
import 'react-toastify/dist/ReactToastify.css'

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit'

import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const { chains, provider } = configureChains(
  [chain.goerli, chain.localhost],
  [
    infuraProvider({ apiKey: process.env.INFURA_API_KEY, priority: 1 }),
    jsonRpcProvider({
      priority: 2,
      rpc: chain => ({
        http: `HTTP://127.0.0.1:7545`,
      }),
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'Instagram',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <ModalProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ModalProvider>
  )
}

export default MyApp
