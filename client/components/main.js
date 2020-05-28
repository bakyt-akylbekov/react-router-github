import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [userLogin, setUserLogin] = useState('')
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      history.push(`/${userLogin}`)
    }
  }
  return (
    <div className="h-screen bg-indigo-900 flex">
      <div className="m-auto bg-indigo-200 bg-opacity-50 p-12 rounded-md ">
        <div className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-lg "
            src="https://image.flaticon.com/icons/svg/25/25657.svg"
            alt=""
          />
        </div>
        <div id="title" className="text-center text-2xl font-semibold mt-5 mb-6">
          User`s repository search
        </div>
        <input
          type="text"
          onChange={(e) => setUserLogin(e.target.value)}
          onKeyDown={handleSearch}
          value={userLogin}
          className="bg-gray-200 border border-gray-500 rounded text-black p-3 mr-3"
          placeholder="Enter Username"
        />
        <button
          type="button"
          onClick={() => history.push(`/${userLogin}`)}
          className="bg-indigo-900 hover:bg-indigo-700 rounded text-white p-3"
        >
          Find Repo
        </button>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
