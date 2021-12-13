const Message = props => {
  const {isLoggedIn} = props

  if (isLoggedIn === false) {
    return <p className="heading">PLEASE LOGIN</p>
  }
  return <p className="heading">Welcome Users</p>
}

export default Message
