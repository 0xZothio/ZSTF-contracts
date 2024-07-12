# Zoth-Contracts

This Repo contains all the contracts used in `Zoth.io` platform.

## Index

- [contracts/](./contracts/)
  - [Interfaces/](./contracts/Interfaces/)
    - [IERC20.sol](./contracts/Interfaces/IERC20.sol)
    - [IWhitelistManager.sol](./contracts/Interfaces/IWhitelistManager.sol)
    - [IPoolContract.sol](./contracts/Interfaces/IPoolContract.sol)
  - [tokens/](./contracts/tokens/)
    - [TestUSDC.sol](./contracts/tokens/TestUSDC.sol)
  - [utils/](./contracts/utils/)
    - [ReentrencyGuard.sol](./contracts/utils/ReentrencyGuard.sol)
    - [Roles.sol](./contracts/utils/Roles.sol)
    - [WhitelistManager.sol](./contracts/utils/WhitelistManager.sol)
  - [V1/](./contracts/V1/)
    - [PoolContract.sol](./contracts/V1/PoolContract.sol)
  - [V2/](./contracts/V2/)
    - [PoolContract.sol](./contracts/V2/PoolContract.sol)
  - [V3/](./contracts/V3/)
    - [PoolContract.sol](./contracts/V3/PoolContract.sol)
- [test/](./test/)
  - [TestUSDC.test.ts](./test/TestUSDC.test.ts)
  - [V1/PoolContract.test.ts](./test/PoolContract.test.ts)
  - [V2/PoolContract.test.ts](./test/PoolContract.test.ts)

### File Description (./contracts/)

#### Interfaces

- `IERC20.sol` :

Interface for ERC20 tokens

- `IWhitelistManager.sol` :

This file contains the functions that need to be used in Main contract for managing the whitelisted users and control function execution.

- `IZothPool.sol` :

This file contains the functions and structs that are used in V3 version of ZothPool.

#### tokens

- `TestUSDC.sol` :

ERC20 test USDC token

#### utils

- `ReentrencyGuard.sol` :

OpenZeppelin ReentrencyGuard Contract

- `Roles.sol` :

OpenZappelin Roles Contract

- `WhitelistManager.sol` :

This file contains the functions to manage the whitelisting of the addresses and management of the verifiers that can execute the whitelisting functions.

#### V1

- `V1_PoolContract.sol` :

This is our 1st iteration of the pool with only one time withdrawl of yield after the end of the tenure of the deposit.

#### V2

- `V2_PoolContract.sol` :

This is our 2nd iteration of the pool with mutiple times of withdrawl of yield during the whole tenure of deposits. The total yield will get divided into the frequencies and can be claimed within the periods.

#### V3

- `V3_PoolContract.sol` :

This is our in progres iteration of the smart contract for the pool. We took the inspiration from polytrade finance smart contracts and modifying the contracts with our own logic.

```txt
IMP :
----

All contract functions have their description and
param descriptions written as solidity comments.
```
