import {nonce} from './suiClient'

export const REDIRECT_URI :string = 'https://sui.io/';

const params = new URLSearchParams({
   // See below for how to configure client ID and redirect URL
   client_id: '404103068254-kbkbpsdt3d8477m6n1a844cn1aa63fbt.apps.googleusercontent.com',
   redirect_uri: REDIRECT_URI,
   response_type: 'id_token',
   scope: 'openid',
   // See below for details about generation of the nonce
   nonce: nonce,
});

const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;