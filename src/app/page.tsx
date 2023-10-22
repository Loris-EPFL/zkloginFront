'use client';
import Image from 'next/image'
import styles from './page.module.css'
import {App} from './App'
import ZkWallet from './zkLogin'
import logo from '../../image/app.png';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <ZkWallet />
      <Box padding={5} display={'flex'}>
      <Image src={logo} 
              alt="" 
              width={350}
              height={550}/>
        
          <Typography variant="h6" component="div" paddingX={3} color={'#ffffff'}>
          Fidel Mobile Layout
        </Typography>
        <Typography variant="h6" component="div" paddingX={3} color={'#ffffff'}>
          Engage your customers by giving them stamps representing their purchases.
        </Typography>
        <Typography variant="h6" component="div" paddingX={3} color={'#ffffff'}>
          Each stamp is a fidel point, reedemable at any time for an exclusive NFT lootbox !
        </Typography>
        <Typography variant="h6" component="div" paddingX={3} color={'#ffffff'}>
          Lootboxes gives you random exclusive content from your favorites shops, 
          like free food, free concert tickets, coupons and more !
        </Typography>

        <Typography variant="h6" component="div" paddingX={3} color={'#ffffff'}>
          Fidel uses zkLogin and onRamp to facilitate customer experience.
        </Typography>

        <Typography variant="h6" component="div" paddingX={3} color={'#ffffff'}>
          Users don't have to maintain a Wallet, they can just use their email and credit card.
        </Typography>
      </Box>

      <Box>
        
      </Box>
      </div>
  )
}
