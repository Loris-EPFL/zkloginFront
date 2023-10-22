import { SerializedSignature } from "@mysten/sui.js/cryptography";
import { genAddressSeed, getZkLoginSignature } from "@mysten/zklogin";
import { maxEpoch, suiClient, userSignature, bytes } from "./suiClient";


const proofResponse = await post('internalskp', zkpRequestPayload);

export type PartialZkLoginSignature = Omit<Parameters<typeof getZkLoginSignature>['0']['inputs'], 
'addressSeed'>;

const partialZkLoginSignature = proofResponse as PartialZkLoginSignature;

const addressSeed: string = String(genAddressSeed(BigInt(userSalt!), "sub", decodedJwt.sub, decodedJwt.aud)); //string or bigint?

const zkLoginSignature : SerializedSignature = getZkLoginSignature({
    inputs : {...partialZkLoginSignature, addressSeed},
    maxEpoch,
    userSignature,


});

suiClient.executeTransactionBlock({
    transactionBlock : bytes,
    signature : zkLoginSignature,
})