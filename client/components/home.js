import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import RepoList from './repoList'
import Readme from './readme'

const Home = () => {
  const [repositories, setRepositories] = useState([])
  const [readme, setReadme] = useState('')
  const [find, setFind] = useState('')
  const [user, setUser] = useState([])
  const { userName, userRepos } = useParams()
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) =>
      setRepositories(data)
    )
  }, [userName])

  useEffect(() => {
    const headers = { Accept: 'application/vnd.github.VERSION.raw' }
    if (userRepos !== undefined) {
      axios(`https://api.github.com/repos/${userName}/${userRepos}/readme`, {
        param: {},
        headers
      }).then(({ data }) => setReadme(data))
    }
  }, [userRepos, userName])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])

  const handleFind = (search) => {
    setFind(search)
  }
  return (
    <div>
      <Header
        readme={readme}
        userRepos={userRepos}
        userName={userName}
        handleFind={handleFind}
        user={user}
      />
      <div className="container mx-auto px-12 pt-5">
        <Route
          exact
          path="/:userName"
          component={() => <RepoList repositories={repositories} userName={userName} find={find} />}
        />
        <Route exact path="/:userName/:userRepos" component={() => <Readme readme={readme} />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
