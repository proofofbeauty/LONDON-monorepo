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
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface BellCurveParametersStorageInterface extends ethers.utils.Interface {
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

export class BellCurveParametersStorage extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': BellCurveParametersStorageInterface;

  'functions': {
    a(overrides?: CallOverrides): Promise<[BigNumber]>;

    'a()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    b(overrides?: CallOverrides): Promise<[BigNumber]>;

    'b()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    c(overrides?: CallOverrides): Promise<[BigNumber]>;

    'c()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    d(overrides?: CallOverrides): Promise<[BigNumber]>;

    'd()'(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  'a'(overrides?: CallOverrides): Promise<BigNumber>;

  'a()'(overrides?: CallOverrides): Promise<BigNumber>;

  'b'(overrides?: CallOverrides): Promise<BigNumber>;

  'b()'(overrides?: CallOverrides): Promise<BigNumber>;

  'c'(overrides?: CallOverrides): Promise<BigNumber>;

  'c()'(overrides?: CallOverrides): Promise<BigNumber>;

  'd'(overrides?: CallOverrides): Promise<BigNumber>;

  'd()'(overrides?: CallOverrides): Promise<BigNumber>;

  'callStatic': {
    a(overrides?: CallOverrides): Promise<BigNumber>;

    'a()'(overrides?: CallOverrides): Promise<BigNumber>;

    b(overrides?: CallOverrides): Promise<BigNumber>;

    'b()'(overrides?: CallOverrides): Promise<BigNumber>;

    c(overrides?: CallOverrides): Promise<BigNumber>;

    'c()'(overrides?: CallOverrides): Promise<BigNumber>;

    d(overrides?: CallOverrides): Promise<BigNumber>;

    'd()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  'filters': {};

  'estimateGas': {
    a(overrides?: CallOverrides): Promise<BigNumber>;

    'a()'(overrides?: CallOverrides): Promise<BigNumber>;

    b(overrides?: CallOverrides): Promise<BigNumber>;

    'b()'(overrides?: CallOverrides): Promise<BigNumber>;

    c(overrides?: CallOverrides): Promise<BigNumber>;

    'c()'(overrides?: CallOverrides): Promise<BigNumber>;

    d(overrides?: CallOverrides): Promise<BigNumber>;

    'd()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  'populateTransaction': {
    a(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'a()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    b(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'b()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    c(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'c()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    d(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'd()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
