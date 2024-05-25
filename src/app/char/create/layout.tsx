import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return <div>{children}</div>
}

export default Layout
