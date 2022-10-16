import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

// Choose which chains you'd like to show
const chains = [chain.mainnet, chain.polygon, chain.arbitrum ];

const client = createClient(
  getDefaultClient({
    appName: "Nahmii",
    alchemyId,
    chains,
  }),
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
       <Component {...pageProps} />
    </ConnectKitProvider>
     </WagmiConfig>
  )
}

export default MyApp
