/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { LondonBurnMetadataFactory } from '../LondonBurnMetadataFactory';

export class LondonBurnMetadataFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LondonBurnMetadataFactory> {
    return super.deploy(overrides || {}) as Promise<LondonBurnMetadataFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LondonBurnMetadataFactory {
    return super.attach(address) as LondonBurnMetadataFactory;
  }
  connect(signer: Signer): LondonBurnMetadataFactory__factory {
    return super.connect(signer) as LondonBurnMetadataFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): LondonBurnMetadataFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as LondonBurnMetadataFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'convertUintToFloatString',
    outputs: [
      {
        internalType: 'string',
        name: 'floatStr',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'seed',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'gridSize',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'bounds',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'margin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'backgroundColor',
        type: 'uint256',
      },
    ],
    name: 'generateBackground',
    outputs: [
      {
        internalType: 'string',
        name: 'path',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'seed',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'gridSize',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'bounds',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'margin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'chance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'color',
        type: 'uint256',
      },
    ],
    name: 'generateLayer',
    outputs: [
      {
        internalType: 'string',
        name: 'path',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'generateSVGImage',
    outputs: [
      {
        internalType: 'string',
        name: 'svg',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'seed',
        type: 'bytes',
      },
    ],
    name: 'getCoinFlip',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'x1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'y1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dx',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dy',
        type: 'uint256',
      },
    ],
    name: 'getLineD',
    outputs: [
      {
        internalType: 'string',
        name: 'svg',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'd',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'color',
        type: 'uint256',
      },
    ],
    name: 'getLinePath',
    outputs: [
      {
        internalType: 'string',
        name: 'svg',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'min',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'max',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'seed',
        type: 'bytes',
      },
    ],
    name: 'getRandomValue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

const _bytecode =
  '0x6120af610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100925760003560e01c8063572ba2b911610065578063572ba2b914610157578063b459beb214610187578063b807a5a2146101b7578063e133e267146101e757610092565b8063019a2f6314610097578063035874a9146100c75780630b58fac5146100f75780633fe800ef14610127575b600080fd5b6100b160048036038101906100ac919061144b565b610217565b6040516100be91906119b0565b60405180910390f35b6100e160048036038101906100dc919061134b565b61022f565b6040516100ee91906119cb565b60405180910390f35b610111600480360381019061010c9190611509565b6103b9565b60405161011e9190611a0d565b60405180910390f35b610141600480360381019061013c91906114e0565b610414565b60405161014e91906119cb565b60405180910390f35b610171600480360381019061016c9190611570565b6107b3565b60405161017e91906119cb565b60405180910390f35b6101a1600480360381019061019c91906113c2565b610805565b6040516101ae91906119cb565b60405180910390f35b6101d160048036038101906101cc91906114e0565b610b0e565b6040516101de91906119cb565b60405180910390f35b61020160048036038101906101fc919061148c565b610e01565b60405161020e91906119cb565b60405180910390f35b60008061022760006002856103b9565b149050919050565b60606000808490506000859050600060405180602001604052806000815250905060008a60001c905060005b8561039e5760006002600f846102719190611d47565b61027b9190611b6e565b9050600483901c925060008c826102929190611b9f565b90508a8c6102a09190611b18565b81886102ac9190611b18565b11156102cc57868b8d6102bf9190611b18565b6102c99190611bf9565b90505b846102da88888460006107b3565b6040516020016102eb92919061188d565b60405160208183030381529060405294508c816103089190611b18565b876103139190611b18565b96508b8b6103219190611b18565b871115610351578b8b6103349190611b18565b861061033f57600197505b8a96508c8661034e9190611b18565b95505b828061035c90611cea565b9350506000841415610397578d8360405160200161037b92919061184a565b6040516020818303038152906040528051906020012060001c93505b505061025b565b6103a88389610e01565b965050505050505095945050505050565b600080826040516020016103cd9190611876565b6040516020818303038152906040528051906020012060001c905084846103f49190611bf9565b816103ff9190611d47565b8561040a9190611b18565b9150509392505050565b60606000826040516020016104299190611a28565b604051602081830303815290604052805190602001209050600060289050600061020890506000602890506000600467ffffffffffffffff811115610497577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156104c55781602001602082028036833780820191505090505b50905062cee5d081600081518110610506577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505062f3f0d781600181518110610550577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505062fed2aa8160028151811061059a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505062ff0000816003815181106105e4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250506000604051806020016040528060008152509050806106538785878987600381518110610646577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161022f565b60405160200161066492919061188d565b604051602081830303815290604052905060006004905060005b6001845161068c9190611bf9565b81101561072e57826106e28987898b878a88815181106106d5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610805565b6040516020016106f392919061188d565b6040516020818303038152906040529250600282111561071d5760018261071a9190611bf9565b91505b8061072790611cea565b905061067e565b5061078460038460038151811061076e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610e4090919063ffffffff16565b826040516020016107969291906118b1565b604051602081830303815290604052975050505050505050919050565b60606107be856110a4565b6107c7856110a4565b6107d0856110a4565b6107d9856110a4565b6040516020016107ec9493929190611946565b6040516020818303038152906040529050949350505050565b6060600060405180602001604052806000815250905060008860001c905060008087896108329190611b18565b905060008890505b81811015610af35760008990505b82811015610a99576000600f8661085f9190611d47565b9050600486901c955089811015610a85576000600f8761087f9190611d47565b9050600487901c965060006002600f896108999190611d47565b6108a39190611b6e565b9050600488901c975060008f826108ba9190611b9f565b9050600083101580156108cd5750600483105b1561090357896108e087876000806107b3565b6040516020016108f192919061188d565b60405160208183030381529060405299505b600483101580156109145750600883105b156109745760008782886109289190611b18565b116109335781610940565b868861093f9190611bf9565b5b90508a61095088888460006107b3565b60405160200161096192919061188d565b6040516020818303038152906040529a50505b600883101580156109855750600c83105b156109e55760008782876109999190611b18565b116109a457816109b1565b85886109b09190611bf9565b5b90508a6109c188886000856107b3565b6040516020016109d292919061188d565b6040516020818303038152906040529a50505b600c83101580156109f65750601083105b15610a815760008190506000829050888189610a129190611b18565b1115610a2a578789610a249190611bf9565b90508091505b888288610a379190611b18565b1115610a4f578689610a499190611bf9565b91508190505b8b610a5c898984866107b3565b604051602001610a6d92919061188d565b6040516020818303038152906040529b5050505b5050505b508b81610a929190611b18565b9050610848565b508280610aa590611cea565b9350506000841415610ae0578b83604051602001610ac492919061184a565b6040516020818303038152906040528051906020012060001c93505b8a81610aec9190611b18565b905061083a565b50610afe8487610e01565b9450505050509695505050505050565b60606000821415610b52576040518060400160405280600381526020017f302e30000000000000000000000000000000000000000000000000000000000081525090505b6000808390505b60008114610b83578180610b6c90611cea565b925050600a81610b7c9190611b6e565b9050610b59565b60048211610b9c5760016004610b999190611b18565b91505b6000600183610bab9190611b18565b67ffffffffffffffff811115610bea577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610c1c5781602001600182028036833780820191505090505b5090506000600184610c2e9190611b18565b90505b6000811115610df5576000600182610c499190611bf9565b9050600485610c589190611bf9565b811415610cd157602e60f81b838281518110610c9d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610de1565b6000871415610d4c57603060f81b838281518110610d18577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610de0565b600a87610d599190611d47565b6030610d659190611b18565b60f81b838281518110610da1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a87610ddd9190611b6e565b96505b5b508080610ded90611c8f565b915050610c31565b50809350505050919050565b606082610e18600384610e4090919063ffffffff16565b604051602001610e29929190611901565b604051602081830303815290604052905092915050565b606060006001836002610e539190611b9f565b610e5d9190611b18565b67ffffffffffffffff811115610e9c577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610ece5781602001600182028036833780820191505090505b5090507f230000000000000000000000000000000000000000000000000000000000000081600081518110610f2c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000836002610f6a9190611b9f565b90505b6000811115611056577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610fd2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b82828151811061100f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061104f90611c8f565b9050610f6d565b506000841461109a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611091906119ed565b60405180910390fd5b8091505092915050565b606060008214156110ec576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061124c565b600082905060005b6000821461111e57808061110790611cea565b915050600a826111179190611b6e565b91506110f4565b60008167ffffffffffffffff811115611160577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156111925781602001600182028036833780820191505090505b5090505b60008514611245576001826111ab9190611bf9565b9150600a856111ba9190611d47565b60306111c69190611b18565b60f81b818381518110611202577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561123e9190611b6e565b9450611196565b8093505050505b919050565b600061126461125f84611a68565b611a43565b90508281526020810184848401111561127c57600080fd5b611287848285611c4d565b509392505050565b60006112a261129d84611a99565b611a43565b9050828152602081018484840111156112ba57600080fd5b6112c5848285611c4d565b509392505050565b6000813590506112dc8161204b565b92915050565b600082601f8301126112f357600080fd5b8135611303848260208601611251565b91505092915050565b600082601f83011261131d57600080fd5b813561132d84826020860161128f565b91505092915050565b60008135905061134581612062565b92915050565b600080600080600060a0868803121561136357600080fd5b6000611371888289016112cd565b955050602061138288828901611336565b945050604061139388828901611336565b93505060606113a488828901611336565b92505060806113b588828901611336565b9150509295509295909350565b60008060008060008060c087890312156113db57600080fd5b60006113e989828a016112cd565b96505060206113fa89828a01611336565b955050604061140b89828a01611336565b945050606061141c89828a01611336565b935050608061142d89828a01611336565b92505060a061143e89828a01611336565b9150509295509295509295565b60006020828403121561145d57600080fd5b600082013567ffffffffffffffff81111561147757600080fd5b611483848285016112e2565b91505092915050565b6000806040838503121561149f57600080fd5b600083013567ffffffffffffffff8111156114b957600080fd5b6114c58582860161130c565b92505060206114d685828601611336565b9150509250929050565b6000602082840312156114f257600080fd5b600061150084828501611336565b91505092915050565b60008060006060848603121561151e57600080fd5b600061152c86828701611336565b935050602061153d86828701611336565b925050604084013567ffffffffffffffff81111561155a57600080fd5b611566868287016112e2565b9150509250925092565b6000806000806080858703121561158657600080fd5b600061159487828801611336565b94505060206115a587828801611336565b93505060406115b687828801611336565b92505060606115c787828801611336565b91505092959194509250565b6115dc81611c2d565b82525050565b6115f36115ee82611c39565b611d33565b82525050565b600061160482611aca565b61160e8185611ae0565b935061161e818560208601611c5c565b80840191505092915050565b600061163582611ad5565b61163f8185611afc565b935061164f818560208601611c5c565b61165881611e05565b840191505092915050565b600061166e82611ad5565b6116788185611b0d565b9350611688818560208601611c5c565b80840191505092915050565b60006116a1602083611aeb565b91506116ac82611e16565b602082019050919050565b60006116c4603483611b0d565b91506116cf82611e3f565b603482019050919050565b60006116e7600383611b0d565b91506116f282611e8e565b600382019050919050565b600061170a600183611b0d565b915061171582611eb7565b600182019050919050565b600061172d601a83611b0d565b915061173882611ee0565b601a82019050919050565b6000611750600983611b0d565b915061175b82611f09565b600982019050919050565b6000611773602a83611b0d565b915061177e82611f32565b602a82019050919050565b6000611796601b83611b0d565b91506117a182611f81565b601b82019050919050565b60006117b9600383611b0d565b91506117c482611faa565b600382019050919050565b60006117dc602b83611b0d565b91506117e782611fd3565b602b82019050919050565b60006117ff600683611b0d565b915061180a82612022565b600682019050919050565b61181e81611c43565b82525050565b61182d81611c43565b82525050565b61184461183f82611c43565b611d3d565b82525050565b600061185682856115e2565b6020820191506118668284611833565b6020820191508190509392505050565b600061188282846115f9565b915081905092915050565b60006118998285611663565b91506118a58284611663565b91508190509392505050565b60006118bc826116b7565b91506118c782611720565b91506118d38285611663565b91506118de82611766565b91506118ea8284611663565b91506118f5826117f2565b91508190509392505050565b600061190c82611743565b91506119188285611663565b9150611923826117cf565b915061192f8284611663565b915061193a82611789565b91508190509392505050565b6000611951826117ac565b915061195d8287611663565b9150611968826116fd565b91506119748286611663565b915061197f826116da565b915061198b8285611663565b9150611996826116fd565b91506119a28284611663565b915081905095945050505050565b60006020820190506119c560008301846115d3565b92915050565b600060208201905081810360008301526119e5818461162a565b905092915050565b60006020820190508181036000830152611a0681611694565b9050919050565b6000602082019050611a226000830184611824565b92915050565b6000602082019050611a3d6000830184611815565b92915050565b6000611a4d611a5e565b9050611a598282611cb9565b919050565b6000604051905090565b600067ffffffffffffffff821115611a8357611a82611dd6565b5b611a8c82611e05565b9050602081019050919050565b600067ffffffffffffffff821115611ab457611ab3611dd6565b5b611abd82611e05565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611b2382611c43565b9150611b2e83611c43565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611b6357611b62611d78565b5b828201905092915050565b6000611b7982611c43565b9150611b8483611c43565b925082611b9457611b93611da7565b5b828204905092915050565b6000611baa82611c43565b9150611bb583611c43565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611bee57611bed611d78565b5b828202905092915050565b6000611c0482611c43565b9150611c0f83611c43565b925082821015611c2257611c21611d78565b5b828203905092915050565b60008115159050919050565b6000819050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611c7a578082015181840152602081019050611c5f565b83811115611c89576000848401525b50505050565b6000611c9a82611c43565b91506000821415611cae57611cad611d78565b5b600182039050919050565b611cc282611e05565b810181811067ffffffffffffffff82111715611ce157611ce0611dd6565b5b80604052505050565b6000611cf582611c43565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611d2857611d27611d78565b5b600182019050919050565b6000819050919050565b6000819050919050565b6000611d5282611c43565b9150611d5d83611c43565b925082611d6d57611d6c611da7565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f3c7376672077696474683d2236303022206865696768743d223630302220766960008201527f6577426f783d223020302036303020363030223e000000000000000000000000602082015250565b7f206c200000000000000000000000000000000000000000000000000000000000600082015250565b7f2000000000000000000000000000000000000000000000000000000000000000600082015250565b7f3c72656374206f7061636974793d22302e35222066696c6c3d22000000000000600082015250565b7f3c7061746820643d220000000000000000000000000000000000000000000000600082015250565b7f2220783d22302220793d2230222077696474683d22313030252220686569676860008201527f743d2231303025222f3e00000000000000000000000000000000000000000000602082015250565b7f22207374726f6b652d6c696e656361703d22726f756e6422202f3e0000000000600082015250565b7f204d200000000000000000000000000000000000000000000000000000000000600082015250565b7f22207374726f6b652d77696474683d22313222206f7061636974793d22302e3760008201527f3522207374726f6b653d22000000000000000000000000000000000000000000602082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b61205481611c39565b811461205f57600080fd5b50565b61206b81611c43565b811461207657600080fd5b5056fea2646970667358221220e766294c094f901334a7912a1db12641b010e1f87791530aebf41707617929b664736f6c63430008040033';