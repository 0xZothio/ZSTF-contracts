
# Zoth Liquidity Pool Contract Docs

## depositByLockingPeriod

Deposits an amount into the pool with a specified locking period.

**Parameters:**

| Name                | Type     | Description                              |
|---------------------|----------|------------------------------------------|
| `_amount`           | `uint256`| Amount to be deposited                   |
| `_lockingDuration`  | `uint256`| Locking duration for the deposit         |
| `_tokenId`          | `uint256`| Token ID to be deposited (must be whitelisted) |
| `_apr`              | `uint256`| Annual percentage rate for the deposit    |

**Returns:**

| Name    | Type    | Description                              |
|---------|---------|------------------------------------------|
| `nftId` | `uint256`| ID of the minted NFT                      |
| `depositId` | `uint256`| ID of the deposit in the pool           |

**Description:**

This function allows whitelisted users to deposit a specified amount into the pool for a defined locking duration. It verifies the caller is whitelisted, checks deposit validity, and transfers the specified amount of tokens. The function then records the deposit details, mints an NFT based on the deposit amount, and emits a `DepositAmount` event with relevant details.

---

## withdrawUsingDepositId

Withdraws the deposited amount from the pool based on the deposit ID.

**Parameters:**

| Name | Type     | Description                        |
|------|----------|------------------------------------|
| `id` | `uint256`| ID of the deposit to withdraw       |

**Returns:**

| Name    | Type    | Description                              |
|---------|---------|------------------------------------------|
| `bool`  | `bool`  | True if the withdrawal is successful, false otherwise |

**Description:**

This function allows users to withdraw their deposited amount from the pool after the locking period ends. It checks the validity of the deposit ID and ensures that the withdrawal is allowed based on the current timestamp and deposit end date. The function calculates and transfers the stable amount to the user's wallet, emitting a `Withdraw` event upon successful withdrawal.

---

## emergencyWithdraw

Allows users to withdraw their deposited amount early (emergency withdrawal).

**Parameters:**

| Name | Type     | Description                        |
|------|----------|------------------------------------|
| `id` | `uint256`| ID of the deposit to emergency withdraw |

**Returns:**

| Name    | Type    | Description                              |
|---------|---------|------------------------------------------|
| `bool`  | `bool`  | True if the emergency withdrawal is successful, false otherwise |

**Description:**

This function enables users to withdraw their deposited amount before the locking period ends in case of emergencies. It checks the validity of the deposit ID and ensures that the withdrawal conditions are met. The function calculates and transfers the refund amount after applying the withdrawal penalty, if applicable, and emits an `EmergencyWithdraw` event upon successful withdrawal.

---

## reInvest

Reinvests earned rewards along with the initial deposit for potential compounding returns.

**Parameters:**

| Name       | Type    | Description                |
|------------|---------|----------------------------|
| `_depositId` | `uint256` | ID of the deposit to reinvest |
| `_amount`    | `uint256` | Amount of funds to reinvest |

**Returns:**

| Name    | Type    | Description                        |
|---------|---------|------------------------------------|
| `bool`  | `bool`  | True if the reinvestment is successful, false otherwise |

**Description:**

This function allows whitelisted users to reinvest funds from an existing deposit (`_depositId`) into the same locking period, effectively compounding their returns. It checks if the caller is whitelisted and verifies that the deposit ID is valid. It ensures that the locking period has expired before allowing the reinvestment. After calculating the stable rewards earned on the original deposit, it deducts the specified `_amount` from the total stable amount, updates the deposit details with the new amount and end date, and transfers the remaining stable amount to the user's wallet. If successful, the function emits a `ReInvest` event with details of the reinvested deposit.

---

## setWithdrawRate

Sets the withdrawal penalty rate for early withdrawals.

**Parameters:**

| Name       | Type    | Description                |
|------------|---------|----------------------------|
| `newRate`  | `uint256` | New withdrawal penalty rate |

**Description:**

This function allows the owner to set a new withdrawal penalty rate for early withdrawals. It checks if the caller is the owner and ensures that the new rate does not exceed 100%. The function updates the `withdrawPenaltyPercent` variable with the new rate.

---

## _transfer

Transfers funds from the contract to a specified receiver.

**Parameters:**

| Name       | Type    | Description                |
|------------|---------|----------------------------|
| `_amount`  | `uint256` | Amount to transfer         |
| `_receiver`| `address` | Address to receive the funds |
| `_tokenId` | `uint256` | Token ID of the transfer    |

**Description:**

This internal function allows the fund manager to transfer funds from the contract to a specified receiver (`_receiver`). It approves the transfer of tokens from the contract to the receiver and performs the transfer using the ERC20 `transferFrom` function. This function is restricted to be called only by the fund manager.

---

## getActiveDeposits

Fetches all active deposit IDs for a specific lender.

**Parameters:**

| Name       | Type    | Description                |
|------------|---------|----------------------------|
| `lender`   | `address` | Address of the lender     |

**Returns:**

| Name              | Type          | Description                |
|-------------------|---------------|----------------------------|
| `activeDeposits`  | `uint256[]`   | Array of active deposit IDs |

**Description:**

This function retrieves all active deposit IDs associated with a specific lender (`lender`). It iterates through the lender's deposits and returns an array (`activeDeposits`) containing IDs of deposits that have a non-zero amount deposited.

---

## setBaseURI

Sets the base URI for token metadata.

**Parameters:**

| Name       | Type    | Description                |
|------------|---------|----------------------------|
| `_baseURI` | `string`| New base URI               |

**Description:**

This function allows the owner to set a new base URI for token metadata. It checks if the caller is the owner and updates the `baseURI` variable with the new URI. The base URI is used to generate the token URI for each token ID minted in the contract.

---

## _mintNFTAfterDeposit

Mints an NFT based on the deposited amount.

**Parameters:**

| Name       | Type    | Description                |
|------------|---------|----------------------------|
| `_amount`  | `uint256`| Amount of deposit          |

**Returns:**

| Name      | Type    | Description                              |
|-----------|---------|------------------------------------------|
| `newTokenId` | `uint256`| ID of the minted NFT                    |

**Description:**

This internal function mints an NFT based on the deposited amount (`_amount`). It increments the token ID counter (`_tokenIds`) and mints a new ERC721 token with the incremented token ID. Depending on the deposited amount, it sets the token URI to different metadata JSON files (`blue.json`, `green.json`, etc.) stored at the `baseURI`.

---

## _calculateRewards

Calculates stable rewards for deposits with locking period.

**Parameters:**

| Name       | Type     | Description                      |
|------------|----------|----------------------------------|
| `_lender`  | `address`| Address of the lender            |
| `_id`      | `uint256`| ID of the deposit                 |
| `_endDate` | `uint256`| End date of the deposit          |

**Returns:**

| Name     | Type    | Description                        |
|----------|---------|------------------------------------|
| `uint256`| `uint256`| Calculated stable rewards amount   |

**Description:**

This internal function calculates stable rewards for deposits with a locking period. It takes the lender's address (`_lender`), deposit ID (`_id`), and end date (`_endDate`) as parameters. It uses the deposited amount, duration, and annual percentage rate (APR) to calculate the stable rewards earned during the deposit period. The calculated stable rewards amount is returned as a `uint256` value.

---

## _updateId

Updates the startId and currentId of deposits with locking period.

**Parameters:**

| Name       | Type     | Description                      |
|------------|----------|----------------------------------|
| `_lender`  | `address`| Address of the lender            |

**Description:**

This internal function updates the `startId` and `currentId` of deposits for a specific lender (`_lender`). It iterates through the lender's deposits and adjusts the start and end indices (`startId` and `currentId`) based on the current status of each deposit (active or inactive). It ensures that only active deposits are counted in the updated indices.

---

## _activeCount

Calculates the number of active deposits for a specific lender.

**Parameters:**

| Name       | Type     | Description                      |
|------------|----------|----------------------------------|
| `_lender`  | `address`| Address of the lender            |

**Returns:**

| Name     | Type    | Description                        |
|----------|---------|------------------------------------|
| `uint256`| `uint256`| Number


<br/>
<br/>

<img width="1269" alt="Screenshot 2024-07-11 at 2 21 07 PM" src="https://github.com/0xZothio/zoth-contracts/assets/82640789/c7107ebe-0525-43b0-ac71-bcc430bdbfd5">
<img width="1260" alt="Screenshot 2024-07-11 at 2 20 59 PM" src="https://github.com/0xZothio/zoth-contracts/assets/82640789/6a54e245-246c-47df-ade5-a33bb9a46b74">



**Note: Copyright@ zoth.io** 
