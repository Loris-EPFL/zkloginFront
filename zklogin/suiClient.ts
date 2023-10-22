import { generateNonce, generateRandomness } from "@mysten/zklogin";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { zkLoginUserAdress } from "./zklogin";

const FULLNode_URL = 'https://fullnode.devnet.sui.io:443';
export const suiClient = new SuiClient({url : FULLNode_URL});
const {epoch, epochDurationMs, epochStartTimestampMs} = await suiClient.getLatestSuiSystemState();


export const maxEpoch = Number(epoch) +2; //ephemeral key active for 2epochs from current epoch
export const ephemeralKeyPair = new Ed25519Keypair();
export const randomness = generateRandomness();
export const nonce = generateNonce(ephemeralKeyPair.getPublicKey(), maxEpoch, randomness);

const txb = new TransactionBlock();

txb.setSender(zkLoginUserAdress);

export const {bytes, signature : userSignature} = await txb.sign({
    client: suiClient,
    signer: ephemeralKeyPair,
});