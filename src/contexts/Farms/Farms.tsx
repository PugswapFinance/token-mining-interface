import React from 'react'

import { useWallet } from 'use-wallet'
import { Pools } from '../../constants/pools'

// import { bnToDec } from '../../utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const { chainId } = useWallet()

  const farms: Array<Farm> = Pools.filter(pool => (pool.poolAddresses as any)[chainId]).map(
    ({
      poolAddresses,
      name,
      symbol,
      tokenSymbol,
      stakingTokenAddresses,
      acceleratorAddresses,
      isWBNB,
      icon,
      nftSymbol,
      magnification,
    }: any, index) => ({
      pid: index,
      id: symbol.replace('/', '-'),
      name,
      poolAddress: poolAddresses[chainId],
      stakingToken: symbol,
      stakingTokenAddress: stakingTokenAddresses[chainId],
      acceleratorAddress: acceleratorAddresses?.[chainId],
      tokenSymbol,
      earnToken: 'best',
      earnTokenAddress: '0x76f743b149e1CB1B2B25Af7869bBa76dbebdBD9E',
      isWBNB,
      icon,
      nftSymbol: nftSymbol ?? '',
      magnification,
    }),
  );

  return (
    <Context.Provider
      value={{
        farms,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
