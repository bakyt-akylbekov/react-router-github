import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import Markdown from 'markdown-to-jsx'
import './readme.scss'

const Readme = (props) => {
  if (!props.readme) {
    return (
      <div className="flex items-center justify-center h-64">
        <HashLoader size={50} color="#4c51bf" />
      </div>
    )
  }
  return <Markdown className="markdown-body bg-indigo-100 border-2 px-10 pt-3">{props.readme}</Markdown>
}

Readme.propTypes = {}

export default React.memo(Readme)
