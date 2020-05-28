import React from 'react'
import { Link } from 'react-router-dom'

const RepoList = (props) => {
  const filteredRepo = props.repositories.filter((el) => el.name.includes(props.find))
  return (
    <div>
      <div className="flex bg-indigo-200 border-b-2 border-indigo-500 text-center font-light py-2">
        <div className="w-1/4 ">Name</div>
        <div className="w-1/4 ">Star</div>
        <div className="w-1/4 ">Fork</div>
        <div className="w-1/4">Readme</div>
      </div>
      {filteredRepo.map((rep) => (
        <div
          key={rep.id}
          className="flex border-b border-indigo-300 bg-indigo-100 py-2 font-medium"
        >
          <div className="w-1/4 text-center">{rep.name}</div>
          <div className="w-1/4 flex items-center justify-center">
            <div className="w-16 flex">
              <span className="flex items-center justify-center mr-3">
                <svg
                  height="16"
                  className="octicon octicon-star v-align-text-bottom"
                  vertical_align="text_bottom"
                  viewBox="0 0 14 16"
                  version="1.1"
                  width="14"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                  >
                    .
                  </path>
                </svg>
              </span>
              <span className="mr-3">-</span>
              <span>{rep.stargazers_count}</span>
            </div>
          </div>
          <div className="w-1/4 flex items-center justify-center">
            <div className="w-16 flex">
              <span className="flex items-center justify-center mr-3">
                <svg
                  className="octicon octicon-repo-forked v-align-text-bottom"
                  viewBox="0 0 10 16"
                  version="1.1"
                  width="10"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                  >
                    .
                  </path>
                </svg>
              </span>
              <span className="mr-3">-</span>
              <span>{rep.forks_count}</span>
            </div>
          </div>
          <div className="w-1/4 text-center ">
            <Link to={`/${props.userName}/${rep.name}`}>View readme</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

RepoList.propTypes = {}

export default React.memo(RepoList)
