# Test Report - Whitelist Manager Contract

## Overview

This test report provides a detailed summary of tests conducted on the Whitelist Manager smart contract.

## Test Cases

### 1. [ADD/REMOVE MULTIPLE WHITELISTERS]

- **Description**: Tests the functionality of adding and removing multiple addresses from the whitelist.
- **Gas Used**: 1273374
- **Status**: Passed
- **Steps**:
  - Added multiple addresses to the whitelist using `addMultipleWhitelist`.
  - Verified the addition of addresses.
  - Removed the addresses using `removeMultipleWhitelist`.
  - Verified the removal of addresses.

### 2. Whitelist Contract Deployment

#### [Deploy Testing]

- **Description**: Verifies the deployment of the Whitelist contract.
- **Gas Used**: 1136049
- **Status**: Passed
- **Steps**:
  - Deployed the Whitelist contract.
  - Confirmed successful deployment.

#### [ADD HR]

- **Description**: Tests adding an HR address to the Whitelist contract.
- **Gas Used**: 72126
- **Status**: Passed
- **Steps**:
  - Added an HR address.
  - Verified the addition.

#### [REMOVE HR]

- **Description**: Tests removing an HR address from the Whitelist contract.
- **Gas Used**: 24631
- **Status**: Passed
- **Steps**:
  - Removed the HR address.
  - Verified the removal.

#### [ADD REMOVE HR]

- **Description**: Tests adding and removing an HR address from the Whitelist contract.
- **Gas Used**: 71994
- **Status**: Passed
- **Steps**:
  - Added an HR address.
  - Removed the HR address.
  - Verified successful addition and removal.

#### [ADD REMOVE POOL MANAGER]

- **Description**: Tests adding and removing a Pool Manager address.
- **Gas Used**: 25036
- **Status**: Passed
- **Steps**:
  - Added a Pool Manager address.
  - Removed the Pool Manager address.
  - Verified successful addition and removal.

#### [ADD REMOVE FUND MANAGER]

- **Description**: Tests adding and removing a Fund Manager address.
- **Gas Used**: 25034
- **Status**: Passed
- **Steps**:
  - Added a Fund Manager address.
  - Removed the Fund Manager address.
  - Verified successful addition and removal.

#### [ADD REMOVE VERIFIER]

- **Description**: Tests adding and removing a Verifier address.
- **Gas Used**: 72126
- **Status**: Passed
- **Steps**:
  - Added a Verifier address.
  - Removed the Verifier address.
  - Verified successful addition and removal.

#### [ADD REMOVE WHITELISTER]

- **Description**: Tests adding and removing a Whitelister address.
- **Gas Used**: 40343
- **Status**: Passed
- **Steps**:
  - Added a Whitelister address.
  - Removed the Whitelister address.
  - Verified successful addition and removal.

## Summary

All tests were successfully executed, confirming the correct functionality of the Whitelist Manager smart contract across various scenarios.

| Solc version       | Optimizer enabled | Runs | Block limit      |
|--------------------|-------------------|------|------------------|
| 0.8.19             | false             | 200  | 6718946 gas      |

| Contract           | Method                     | Min    | Max    | Avg    | # calls | USD (avg)      |
|--------------------|----------------------------|--------|--------|--------|---------|----------------|
| WhitelistManager   | addHr                      | -      | -      | 47003  | 2       | 0.58           |
| WhitelistManager   | addMultipleWhitelist       | -      | -      | 118884 | 1       | 1.46           |
| WhitelistManager   | addPoolManager             | -      | -      | 46948  | 1       | 0.58           |
| WhitelistManager   | addWhitelist               | -      | -      | 47025  | 1       | 0.58           |
| WhitelistManager   | removeFundManager          | -      | -      | 25036  | 1       | 0.31           |
| WhitelistManager   | removeHr                   | -      | -      | 25123  | 1       | 0.31           |
| WhitelistManager   | removeMultipleWhitelist    | -      | -      | 40343  | 1       | 0.50           |
| WhitelistManager   | removePoolManager          | -      | -      | 25046  | 1       | 0.31           |
| WhitelistManager   | removeVerifier             | -      | -      | 25034  | 1       | 0.31           |
| WhitelistManager   | removeWhitelist            | -      | -      | 25101  | 2       | 0.31           |

| Deployments             |                      | % of limit |                  |
|----------------------------------------------------|----------------------|------------|------------------|
| WhitelistManager                                   | -                    | 16.2%      | 13.42            |
