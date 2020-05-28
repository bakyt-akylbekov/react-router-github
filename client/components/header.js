import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
    props.handleFind(e.target.value)
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-900 py-4 px-24">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="#">
          <img
            src={`${props.user.avatar_url}`}
            alt=""
            className="w-12 h-12 rounded-md border mr-5"
          />
        </a>

        <NavLink to="/" className="text-white font-bold mr-5">
          Home
        </NavLink>
        {props.readme && (
          <NavLink to={`/${props.userName}`} className="text-white font-bold">
            Repositories
          </NavLink>
        )}
      </div>
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        placeholder="Search"
        className="bg-gray-200 border border-gray-500 rounded text-black pl-2"
      />
    </nav>
  )
}

export default React.memo(Header)
