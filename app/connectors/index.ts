import { ethers } from 'ethers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { ALCHEMY_KEY, CHAIN_ID } from '../constants';

export const injected = new InjectedConnector({
  supportedChainIds: [CHAIN_ID],
});

// mainnet only
export const walletconnect = new WalletConnectConnector({
  rpc: {
    [CHAIN_ID]: `https://eth-${
      CHAIN_ID === 1 ? 'mainnet' : 'rinkeby'
    }.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  // pollingInterval: 15000,
});

// mainnet only
// export const fortmatic = new FortmaticConnector({
//   apiKey: FORMATIC_KEY ?? "",
//   chainId: 1,
// });

// mainnet only
// export const portis = new PortisConnector({
//   dAppId: PORTIS_ID ?? "",
//   networks: [1],
// });

// mainnet only
// export const walletlink = new WalletLinkConnector({
//   url: NETWORK_URL,
//   appName: "Split",
//   appLogoUrl:
//     "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg",
// });
