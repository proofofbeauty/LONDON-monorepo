/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LondonBurnMinterBase,
  LondonBurnMinterBaseInterface,
} from "../LondonBurnMinterBase";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_mintableNFT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_payableErc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "_externalBurnableERC721",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sushiswap",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "burnRevealBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "externalBurnableERC721",
    outputs: [
      {
        internalType: "contract ERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "isSigned",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "londonBurn",
    outputs: [
      {
        internalType: "contract LondonBurn",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payableErc20",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revealBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burnRevealBlockNumber",
        type: "uint256",
      },
    ],
    name: "setBurnRevealBlockNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_revealBlockNumber",
        type: "uint256",
      },
    ],
    name: "setRevealBlockNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ultraSonicForkBlockNumber",
        type: "uint256",
      },
    ],
    name: "setUltraSonicForkBlockNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "splitSignature",
    outputs: [
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "sushiswap",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ultraSonicForkBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6002557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6003557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004553480156200007e57600080fd5b506040516200183e3803806200183e8339818101604052810190620000a4919062000259565b6000620000b66200023a60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508273ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505050505062000313565b600033905090565b6000815190506200025381620002f9565b92915050565b600080600080608085870312156200027057600080fd5b6000620002808782880162000242565b9450506020620002938782880162000242565b9350506040620002a68782880162000242565b9250506060620002b98782880162000242565b91505092959194509250565b6000620002d282620002d9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200030481620002c5565b81146200031057600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6114e5620003596000396000610414015260006104d7015260006103ea0152600061077001526114e56000f3fe6080604052600436106101025760003560e01c80638c7e924511610095578063a7bb580311610064578063a7bb580314610303578063f0f4426014610342578063f2fde38b1461036b578063f508495614610394578063f5b5d7b7146103bf57610103565b80638c7e9245146102595780638da5cb5b146102825780639028634d146102ad5780639be28785146102d857610103565b80635cc02ee9116100d15780635cc02ee9146101af57806361d027b3146101da578063715018a6146102055780638677ebe81461021c57610103565b80631723f820146101055780631eaeda031461013057806320cf417b1461015b57806329da51a01461018657610103565b5b005b34801561011157600080fd5b5061011a6103e8565b604051610127919061108d565b60405180910390f35b34801561013c57600080fd5b5061014561040c565b6040516101529190611108565b60405180910390f35b34801561016757600080fd5b50610170610412565b60405161017d9190611057565b60405180910390f35b34801561019257600080fd5b506101ad60048036038101906101a89190610e01565b610436565b005b3480156101bb57600080fd5b506101c46104d5565b6040516101d1919061103c565b60405180910390f35b3480156101e657600080fd5b506101ef6104f9565b6040516101fc9190610f8a565b60405180910390f35b34801561021157600080fd5b5061021a61051f565b005b34801561022857600080fd5b50610243600480360381019061023e9190610d49565b610672565b6040516102509190610fa5565b60405180910390f35b34801561026557600080fd5b50610280600480360381019061027b9190610e01565b6106a0565b005b34801561028e57600080fd5b5061029761073f565b6040516102a49190610f8a565b60405180910390f35b3480156102b957600080fd5b506102c2610768565b6040516102cf9190611108565b60405180910390f35b3480156102e457600080fd5b506102ed61076e565b6040516102fa9190611072565b60405180910390f35b34801561030f57600080fd5b5061032a60048036038101906103259190610dc0565b610792565b60405161033993929190610fc0565b60405180910390f35b34801561034e57600080fd5b5061036960048036038101906103649190610d20565b610816565b005b34801561037757600080fd5b50610392600480360381019061038d9190610d20565b6108ef565b005b3480156103a057600080fd5b506103a9610ab1565b6040516103b69190611108565b60405180910390f35b3480156103cb57600080fd5b506103e660048036038101906103e19190610e01565b610ab7565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b60035481565b7f000000000000000000000000000000000000000000000000000000000000000081565b61043e610b56565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c2906110c8565b60405180910390fd5b8060038190555050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610527610b56565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ab906110c8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60006106818686868686610b5e565b8061069557506106948686868686610be8565b5b905095945050505050565b6106a8610b56565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072c906110c8565b60405180910390fd5b8060028190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080600060418451146107db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d2906110e8565b60405180910390fd5b6020840151925060408401519150606084015160001a9050601b8160ff16101561080f57601b8161080c91906111a0565b90505b9193909250565b61081e610b56565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146108ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a2906110c8565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6108f7610b56565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610984576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097b906110c8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109eb906110a8565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60045481565b610abf610b56565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b43906110c8565b60405180910390fd5b8060048190555050565b600033905090565b60008573ffffffffffffffffffffffffffffffffffffffff1660018686868660405160008152602001604052604051610b9a9493929190610ff7565b6020604051602081039080840390855afa158015610bbc573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1614905095945050505050565b6000806040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509050610c58878288604051602001610c3a929190610f62565b60405160208183030381529060405280519060200120878787610b5e565b91505095945050505050565b6000610c77610c7284611148565b611123565b905082815260208101848484011115610c8f57600080fd5b610c9a8482856112c6565b509392505050565b600081359050610cb181611453565b92915050565b600081359050610cc68161146a565b92915050565b600082601f830112610cdd57600080fd5b8135610ced848260208601610c64565b91505092915050565b600081359050610d0581611481565b92915050565b600081359050610d1a81611498565b92915050565b600060208284031215610d3257600080fd5b6000610d4084828501610ca2565b91505092915050565b600080600080600060a08688031215610d6157600080fd5b6000610d6f88828901610ca2565b9550506020610d8088828901610cb7565b9450506040610d9188828901610d0b565b9350506060610da288828901610cb7565b9250506080610db388828901610cb7565b9150509295509295909350565b600060208284031215610dd257600080fd5b600082013567ffffffffffffffff811115610dec57600080fd5b610df884828501610ccc565b91505092915050565b600060208284031215610e1357600080fd5b6000610e2184828501610cf6565b91505092915050565b610e33816111d7565b82525050565b610e42816111e9565b82525050565b610e51816111f5565b82525050565b610e68610e63826111f5565b611339565b82525050565b6000610e7982611179565b610e838185611184565b9350610e938185602086016112d5565b80840191505092915050565b610ea881611236565b82525050565b610eb78161125a565b82525050565b610ec68161127e565b82525050565b610ed5816112a2565b82525050565b6000610ee860268361118f565b9150610ef3826113b2565b604082019050919050565b6000610f0b60208361118f565b9150610f1682611401565b602082019050919050565b6000610f2e60188361118f565b9150610f398261142a565b602082019050919050565b610f4d8161121f565b82525050565b610f5c81611229565b82525050565b6000610f6e8285610e6e565b9150610f7a8284610e57565b6020820191508190509392505050565b6000602082019050610f9f6000830184610e2a565b92915050565b6000602082019050610fba6000830184610e39565b92915050565b6000606082019050610fd56000830186610e48565b610fe26020830185610e48565b610fef6040830184610f53565b949350505050565b600060808201905061100c6000830187610e48565b6110196020830186610f53565b6110266040830185610e48565b6110336060830184610e48565b95945050505050565b60006020820190506110516000830184610e9f565b92915050565b600060208201905061106c6000830184610eae565b92915050565b60006020820190506110876000830184610ebd565b92915050565b60006020820190506110a26000830184610ecc565b92915050565b600060208201905081810360008301526110c181610edb565b9050919050565b600060208201905081810360008301526110e181610efe565b9050919050565b6000602082019050818103600083015261110181610f21565b9050919050565b600060208201905061111d6000830184610f44565b92915050565b600061112d61113e565b90506111398282611308565b919050565b6000604051905090565b600067ffffffffffffffff82111561116357611162611372565b5b61116c826113a1565b9050602081019050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006111ab82611229565b91506111b683611229565b92508260ff038211156111cc576111cb611343565b5b828201905092915050565b60006111e2826111ff565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061124182611248565b9050919050565b6000611253826111ff565b9050919050565b60006112658261126c565b9050919050565b6000611277826111ff565b9050919050565b600061128982611290565b9050919050565b600061129b826111ff565b9050919050565b60006112ad826112b4565b9050919050565b60006112bf826111ff565b9050919050565b82818337600083830152505050565b60005b838110156112f35780820151818401526020810190506112d8565b83811115611302576000848401525b50505050565b611311826113a1565b810181811067ffffffffffffffff821117156113305761132f611372565b5b80604052505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f696e76616c6964207369676e6174757265206c656e6774680000000000000000600082015250565b61145c816111d7565b811461146757600080fd5b50565b611473816111f5565b811461147e57600080fd5b50565b61148a8161121f565b811461149557600080fd5b50565b6114a181611229565b81146114ac57600080fd5b5056fea2646970667358221220c2a762dcd4787a1a05e9c13634e832852c0b0f26136f7e8cb2c347ab7f09642864736f6c63430008040033";

type LondonBurnMinterBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LondonBurnMinterBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LondonBurnMinterBase__factory extends ContractFactory {
  constructor(...args: LondonBurnMinterBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _mintableNFT: string,
    _payableErc20: string,
    _externalBurnableERC721: string,
    _sushiswap: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LondonBurnMinterBase> {
    return super.deploy(
      _mintableNFT,
      _payableErc20,
      _externalBurnableERC721,
      _sushiswap,
      overrides || {}
    ) as Promise<LondonBurnMinterBase>;
  }
  getDeployTransaction(
    _mintableNFT: string,
    _payableErc20: string,
    _externalBurnableERC721: string,
    _sushiswap: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _mintableNFT,
      _payableErc20,
      _externalBurnableERC721,
      _sushiswap,
      overrides || {}
    );
  }
  attach(address: string): LondonBurnMinterBase {
    return super.attach(address) as LondonBurnMinterBase;
  }
  connect(signer: Signer): LondonBurnMinterBase__factory {
    return super.connect(signer) as LondonBurnMinterBase__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LondonBurnMinterBaseInterface {
    return new utils.Interface(_abi) as LondonBurnMinterBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LondonBurnMinterBase {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LondonBurnMinterBase;
  }
}
