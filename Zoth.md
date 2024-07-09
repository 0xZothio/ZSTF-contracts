
# ZothPool Smart Contract User Documentation

The ZothPool smart contract facilitates secure and flexible deposits with various locking periods. Users can deposit whitelisted tokens, locking their funds for a chosen duration to earn potential rewards. The contract allows deposits and withdrawals through dedicated functions, including reinvesting earned rewards for further gains. 

In case of emergencies, users can withdraw their funds early with a penalty. The contract also offers functionalities for authorized users to manage withdrawal penalty rates.

## Functions

### constructor

Sets up the core parameters of the ZothPool contract, including managing whitelisted tokens, deposit penalties, and locking period ranges.

| Name                   | Type      | Description                                               |
|------------------------|-----------|-----------------------------------------------------------|
| _whitelistManager      | address   | Address of the whitelist manager contract                 |
| _withdrawPenaltyPercent| uint256   | Withdraw penalty percentage (in basis points)             |
| _erc721Name            | string    | Name of the ERC721 token                                  |
| _erc721Symbol          | string    | Symbol of the ERC721 token                                |
| _baseURI               | string    | Base URI for the ERC721 token metadata                    |
| _hotPeriod             | uint256   | Hot period for deposits (in seconds)                      |
| _tokenAddresses        | address[] | Array of token addresses allowed for deposits             |
| _minLockingPeriod      | uint256   | Minimum locking period for deposits (in seconds)          |
| _maxLockingPeriod      | uint256   | Maximum locking period for deposits (in seconds)          |

### depositByLockingPeriod

Enables users to deposit supported tokens into the pool, choosing a lock-in period to potentially earn higher returns. Upon successful deposit, users receive an NFT representing their investment.

| Name              | Type    | Description                                             |
|-------------------|---------|---------------------------------------------------------|
| _amount           | uint256 | Amount of tokens to deposit                             |
| _lockingDuration  | uint256 | Locking duration for the deposit (in seconds). If zero, the default tenure will be used |
| _tokenId          | uint256 | ID of the token to deposit (must be whitelisted)        |
| _apr              | uint256 | APR for the deposit (unused in current documentation)   |

#### Returns:

| Name     | Type    | Description                             |
|----------|---------|-----------------------------------------|
| nftId    | uint256 | ID of the minted NFT representing the deposit |
| depositId| uint256 | ID of the deposit                       |

### withdrawUsingDepositId

Allows users to withdraw their deposited funds under normal circumstances (withdrawUsingDepositId) or as an emergency withdrawal (emergencyWithdraw) with an associated penalty. Both functions require a unique deposit ID for identification.

| Name | Type    | Description            |
|------|---------|------------------------|
| id   | uint256 | ID of the deposit      |

#### Returns:

| Name | Type | Description                    |
|------|------|--------------------------------|
|status  | bool | True if the withdrawal is successful, false otherwise |

### reInvest

Provides users the flexibility to reinvest their earned rewards along with their initial deposit for potential compounding returns.

| Name       | Type    | Description                |
|------------|---------|----------------------------|
| _depositId | uint256 | ID of the deposit to reinvest |
| _amount    | uint256 | Amount of funds to reinvest |

#### Returns:

| Name | Type | Description                        |
|------|------|------------------------------------|
| status  | bool | True if the reinvestment is successful, false otherwise |

### emergencyWithdraw

Restricted function that authorizes designated users to adjust the penalty charged for early withdrawals (emergency withdrawals).

| Name | Type    | Description      |
|------|---------|------------------|
| id   | uint256 | ID of the deposit|

#### Returns:

| Name | Type | Description                        |
|------|------|------------------------------------|
| status  | bool | True if the withdrawal is successful, false otherwise |

### setWithdrawRate (restricted)

This function allows the owner to set a new withdrawal penalty rate.

| Name    | Type    | Description                             |
|---------|---------|-----------------------------------------|
| newRate | uint256 | New withdrawal penalty rate (in basis points) |

### _transfer (internal)

Handles internal transfers of funds from the contract to the owner's address (not directly accessible by users).

| Name     | Type    | Description                 |
|----------|---------|-----------------------------|
| _amount  | uint256 | Amount of funds to transfer |
| _receiver| address | Address of the recipient    |
| _tokenId | uint256 | Token ID (unused in current documentation) |

### getActiveDeposits

Enables users to view a list of their currently active deposits within the ZothPool contract.

| Name   | Type    | Description               |
|--------|---------|---------------------------|
| lender | address | Address of the lender     |

#### Returns:

| Name     | Type      | Description                            |
|----------|-----------|----------------------------------------|
| depositIdsArray      | uint256[] | Array of deposit IDs for the lender    |

---

**Note: Copyright@ zoth.io** 
