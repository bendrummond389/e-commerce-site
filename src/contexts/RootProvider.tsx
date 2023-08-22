'use client'

import React, { ReactNode } from 'react'
import { CartStateProvider } from './CartStateProvider'

type RootProviderProps = {
    children: React.ReactNode
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
    return <CartStateProvider>{children}</CartStateProvider>
}

export default RootProvider
