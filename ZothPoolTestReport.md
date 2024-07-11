
# Test Report - Zoth-Liquidity Pool V3

## Overview

This test report provides a detailed summary of tests conducted on the ZothPool smart contract.

## Test Cases

### 1. [Deployment]

- **Description**: Verifies the deployment and initial setup of the ZothPool contract.
- **Gas Used**: 
  - USDC deployed.
  - Tokens transferred from the main account to another account.
  - Whitelister deployed.
  - ZothPool deployed.
  - tUSDC transferred to the ZothPool contract.
- **Status**: Passed
- **Steps**:
  - Deployed the ZothPool contract with the provided USDC address (17,544,880 gas).
  - Deployed the ZothPool contract with the provided WhitelistManager address (52,167 gas).
  - Deployed the ZothPool contract with the provided owner address (52,167 gas).
  - Set the contract variables by the owner (52,167 gas).

### 2. [Testing]

- **Description**: Tests various functionalities of the ZothPool contract.
- **Status**: Passed

#### [Deposit Function Testing]

- **Steps**:
  - Should not deposit if not whitelisted (81,290 gas).
  - Should deposit if whitelisted (830,323 gas).
  - Should not deposit with below or above limit of locking duration.
  - Check APR at deposit time.
  - Deposit with correct APR (462,456 gas).

#### [Testing WhitelistManager]

- **Steps**:
  - Should add Whitelist (47,025 gas).

#### [Active Deposits]

- **Steps**:
  - Should check active deposits (319,000 gas).

#### [Emergency Withdraw]

- **Steps**:
  - Should withdraw the funds related to deposit ID EMERGENCY (459,532 gas).
  - Verified balance before and after withdrawal.

#### [Withdraw Testing]

- **Steps**:
  - Should withdraw by ID.

#### [Testing Transfer Funds]

- **Steps**:
  - Should transfer funds to another account (63,687 gas).

#### [Reinvest Function Testing]

- **Steps**:
  - Should test the reinvest function (75,798 gas).

## Summary

All tests were successfully executed, confirming the correct functionality of the ZothPool smart contract across various scenarios.

### Solc Version

| Solc version       | Optimizer enabled | Runs | Block limit      |
|--------------------|-------------------|------|------------------|
| 0.8.19             | false             | 200  | 6718946 gas      |

### Contract Methods

| Contract          | Method                  | Min    | Max    | Avg    | # calls | USD (avg)      |
|-------------------|-------------------------|--------|--------|--------|---------|----------------|
| TestUSDC          | approve                 | -      | -      | 46,945 | 2       | 0.58           |
| TestUSDC          | transfer                | -      | -      | 52,167 | 14      | 0.64           |
| WhitelistManager  | addFundManager          | -      | -      | 46,959 | 1       | 0.58           |
| WhitelistManager  | addHr                   | -      | -      | 47,003 | 1       | 0.58           |
| WhitelistManager  | addPoolManager          | -      | -      | 46,948 | 1       | 0.58           |
| WhitelistManager  | addVerifier             | -      | -      | 46,948 | 1       | 0.58           |
| WhitelistManager  | addWhitelist            | -      | -      | 47,025 | 2       | 0.58           |
| WhitelistManager  | removeWhitelist         | -      | -      | 25,101 | 1       | 0.31           |
| ZothPool          | _transfer               | -      | -      | 63,687 | 1       | 0.78           |
| ZothPool          | depositByLockingPeriod  | 319,000| 390,248| 357,781| 5       | 4.39           |
| ZothPool          | emergencyWithdraw       | -      | -      | 69,284 | 1       | 0.85           |
| ZothPool          | reInvest                | -      | -      | 75,798 | 1       | 0.93           |
| ZothPool          | withdrawUsingDepositId  | -      | -      | 72,208 | 1       | 0.89           |

### Deployments

| Deployments               |                  | % of limit |                  |


|---------------------------|------------------|------------|------------------|
| TestUSDC                  | -                | 30.7%      | 25.29            |
| WhitelistManager          | -                | 16.2%      | 13.37            |
| ZothPool                  | -                | 80.7%      | 66.52            |


<br/>
<br/>
<br/>
<img width="1281" alt="Screenshot 2024-07-09 at 8 23 05 PM" src="https://github.com/0xZothio/zoth-contracts/assets/82640789/2d2647dc-7e2c-4839-a821-bdd1d5a67829">
<img width="1279" alt="Screenshot 2024-07-09 at 8 23 14 PM" src="https://github.com/0xZothio/zoth-contracts/assets/82640789/3c5911ff-36a8-4060-bfb8-1f008d6efb26">


