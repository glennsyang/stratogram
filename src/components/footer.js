import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Footer = () => {
    const { title } = useSiteMetadata()

    return (
        <footer className="bg-gray-200 border-t p-4">
            <div className="flex flex-1 text-sm text-gray-600">
                Copyright &copy; {new Date().getFullYear()} {` `} {title} Inc. All rights reserved
            </div>
        </footer>
    )
}

export default Footer