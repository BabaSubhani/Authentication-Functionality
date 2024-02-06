import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const Logout = props => {
  const logoutBtnClicked = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" onClick={logoutBtnClicked}>
      logout
    </button>
  )
}

export default withRouter(Logout)
