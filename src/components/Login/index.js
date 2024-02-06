import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const Login = props => {
  const isAuthenticated = Cookies.get('jwt_token') !== undefined

  if (isAuthenticated) {
    const {history} = props
    history.replace('/')
  }

  const redirectToHome = async () => {
    const name = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {
      name,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    console.log('btn clicked')
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = props
      history.replace('/')
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-text">Please Login</h1>
      <button type="button" onClick={redirectToHome}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
