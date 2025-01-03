// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OPADToken is ERC20 {
    constructor() ERC20("Openpad", "OPAD") {
        _mint(msg.sender, 1000000000 ether);
    }
}