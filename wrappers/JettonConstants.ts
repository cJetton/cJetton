export abstract class Op {
    static transfer = 0xf8a7ea5;
    static transfer_notification = 0x7362d09c;
    static internal_transfer = 0x178d4519;
    static excesses = 0xd53276db;
    static burn = 0x595f07bc;
    static burn_notification = 0x7bdd97de;

    static airdrop_claim = 0x0df602d6;
    
    static provide_wallet_address = 0x2c76b973;
    static take_wallet_address = 0xd1735400;
    static mint = 0x642b7d07;
    static change_admin = 0x6501f354;
    static claim_admin = 0xfb88e119;
    static drop_admin  = 0x7431f221;
    static upgrade = 0x2508d66a;
    static top_up = 0xd372158c;
    static change_metadata_url = 0xcb862902;
}

export abstract class Errors {
    static invalid_op = 72;
    static wrong_op = 0xffff;
    static not_owner = 73;
    static not_valid_wallet = 74;
    static wrong_workchain = 333;

    static airdrop_already_claimed = 54;
    static airdrop_not_ready = 55;
    static airdrop_finished  = 56;
    static airdrop_not_found = 109;

    static not_exotic = 103;
    static not_merkle_proof = 104;
    static wrong_hash = 105;
    static leaf_not_found = 108;

    static balance_error = 47;
    static not_enough_gas = 48;
    static invalid_mesage = 49;
    static discovery_fee_not_matched = 75;
    static unknown_custom_payload = 57;
}


