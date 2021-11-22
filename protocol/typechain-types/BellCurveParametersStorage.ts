/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface BellCurveParametersStorageInterface extends utils.Interface {
  functions: {
    'a()': FunctionFragment;
    'b()': FunctionFragment;
    'c()': FunctionFragment;
    'd()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'a', values?: undefined): string;
  encodeFunctionData(functionFragment: 'b', values?: undefined): string;
  encodeFunctionData(functionFragment: 'c', values?: undefined): string;
  encodeFunctionData(functionFragment: 'd', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'a', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'b', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'c', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'd', data: BytesLike): Result;

  events: {};
}

export interface BellCurveParametersStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BellCurveParametersStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    a(overrides?: CallOverrides): Promise<[BigNumber]>;

    b(overrides?: CallOverrides): Promise<[BigNumber]>;

    c(overrides?: CallOverrides): Promise<[BigNumber]>;

    d(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  a(overrides?: CallOverrides): Promise<BigNumber>;

  b(overrides?: CallOverrides): Promise<BigNumber>;

  c(overrides?: CallOverrides): Promise<BigNumber>;

  d(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    a(overrides?: CallOverrides): Promise<BigNumber>;

    b(overrides?: CallOverrides): Promise<BigNumber>;

    c(overrides?: CallOverrides): Promise<BigNumber>;

    d(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    a(overrides?: CallOverrides): Promise<BigNumber>;

    b(overrides?: CallOverrides): Promise<BigNumber>;

    c(overrides?: CallOverrides): Promise<BigNumber>;

    d(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    a(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    b(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    c(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    d(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}