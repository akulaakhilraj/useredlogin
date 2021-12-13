const Logout = props => {
  const {logout} = props

  if (logout === true) {
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

export default Logout
