// Write your code here
const Login = props => {
  const {login} = props

  if (login === true) {
    return (
      <button type="button" className="button">
        Logout
      </button>
    )
  }
  return (
    <button type="button" className="button">
      Login
    </button>
  )
}

export default Login
