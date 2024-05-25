'use client'
import React, { useContext } from 'react'
import { CharContext, CharProvider } from '../providers/CharProvider'
import CharComponent from './CharComponent'
import CharPage from './CharPage'

interface PageProps {
    children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <>
            <CharPage />
            {children}
        </>
    )
}

export default Page
