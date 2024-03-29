import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddUserForm = props => {
  AddUserForm.propTypes = {
    addUser: PropTypes.func.isRequired,
  }

  const { addUser } = props

  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const onSubmit = event => {
    event.preventDefault()
    if (!user.name || !user.username) return

    addUser(user)
    setUser(initialFormState)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm
