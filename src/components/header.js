import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header className="w-full sticky shadow-sm top-0 z-50 bg-white">
      <div className="w-full container mx-auto sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 sticky">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <h1>
            <Link to="/" className="text-2xl font-hairline text-strato-gray uppercase tracking-widest">{title}</Link>
          </h1>
        </div>
        <nav className="">
          <div className="w-full flex-grow md:flex md:items-center md:w-auto block bg-white md:bg-transparent text-black z-20 justify-end flex-1 lg:mr-8" id="nav-content">
            <Link to={`/about`} className="block md:mr-5 py-2 px-1 border-white border-b-2 text-xl font-hairline text-strato-gray hover:border-b-2 hover:border-strato-gray tracking-wider">
              ABOUT
            </Link>
            <Link to={`/contact`} className="block md:mr-5 py-2 px-1 border-white border-b-2 text-xl font-hairline text-strato-gray hover:border-b-2 hover:border-strato-gray tracking-wider">
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
