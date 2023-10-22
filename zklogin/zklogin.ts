import { jwtToAddress } from "@mysten/zklogin";

export const zkLoginUserAdress = jwtToAddress(jwt, userSalt);