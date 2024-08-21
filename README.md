# Mintless Jetton

This repository contains the reference implementation of the [TEP#177](https://github.com/ton-blockchain/TEPs/pull/177) with [TEP#176](https://github.com/ton-blockchain/TEPs/pull/176) API endpoint, an extension to the [TEP#74](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md) Jetton standard. It allows for Merkle-proof airdrops, enabling the minting of Jettons directly on the Jetton-Wallet contract in a decentralized manner. The implementation is designed to support large-scale airdrops without incurring high costs or placing significant load on the blockchain.

## Features

- **Merkle Proof Airdrops**: Efficiently airdrop to millions of users using a single hash storage.
- **Decentralized Claiming**: Users can claim their airdrops through a simple transaction, which mints the Jettons on demand.
- **Integration Friendly**: Designed to be transparent for user given proper support from wallets: all magic happen under the hood while user interact with unclaimed jetton the same way as with usual.

## Prior art
Made from [Jetton with governance(stablecoin)](https://github.com/ton-blockchain/stablecoin-contract) by removing governance functionality.
Also burning is allowed.

## Local Development

### Install Dependencies

`npm install`

### Compile Contracts

`npm run build`

### Run Tests

`npm run test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

use Toncenter API:

`npx blueprint run --custom https://testnet.toncenter.com/api/v2/ --custom-version v2 --custom-type testnet --custom-key <API_KEY> `

API_KEY can be obtained on https://toncenter.com or https://testnet.toncenter.com

## Examples

Check [generateTestJetton](./scripts/generateTestJetton.ts) as example of deploying mintless jetton and [claimApi.ts](./scripts/claimApi.ts) for example api endpoint. Note, `claimAPI.ts` is not intended to be used for millions of users, check https://github.com/Trinketer22/proof-machine for mass-scale example.
