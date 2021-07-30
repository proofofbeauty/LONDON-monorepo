/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers';
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface Ierc721ReceiverInterface extends ethers.utils.Interface {
  functions: {
    'onERC721Received(address,address,uint256,bytes)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'onERC721Received',
    values: [string, string, BigNumberish, BytesLike],
  ): string;

  decodeFunctionResult(
    functionFragment: 'onERC721Received',
    data: BytesLike,
  ): Result;

  events: {};
}

export class Ierc721Receiver extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': Ierc721ReceiverInterface;

  'functions': {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'onERC721Received(address,address,uint256,bytes)'(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;
  };

  'onERC721Received'(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'onERC721Received(address,address,uint256,bytes)'(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'callStatic': {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;

    'onERC721Received(address,address,uint256,bytes)'(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;
  };

  'filters': {};

  'estimateGas': {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'onERC721Received(address,address,uint256,bytes)'(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;
  };

  'populateTransaction': {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'onERC721Received(address,address,uint256,bytes)'(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;
  };
}
