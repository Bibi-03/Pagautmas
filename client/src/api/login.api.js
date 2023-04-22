import axios from 'axios'

// export const getLoginCredentialsRequest = async (email, password) =>
//   await axios.get(`/api/Login/${email}/${password}`)

// export const ForgotPasswordRequest = async (email) =>
//   await axios.put('/api/forgot-password', email)

// export const TypeAccountRequest = async (token) =>
//   await axios.put('/api/TypeAccount', { token }, { headers: { token } })

// export const NewPasswordRequest = async (newPassword, token) =>
//   await axios.put('/api/new-password', newPassword, { headers: { reset: token } })

// export const GetInformationLogRequest = async (token) =>
//   await axios.get('/api/GetInformationLog', { headers: { token } })

export const getLoginCredentialsRequest = async (email, password) =>
  await axios.get(`http://localhost:4000/api/Login/${email}/${password}`)

export const ForgotPasswordRequest = async (email) =>
  await axios.put('http://localhost:4000/api/forgot-password', email)

export const TypeAccountRequest = async (token) =>
  await axios.put('http://localhost:4000/api/TypeAccount', { token }, { headers: { token } })

export const NewPasswordRequest = async (newPassword, token) =>
  await axios.put('http://localhost:4000/api/new-password', newPassword, { headers: { reset: token } })

export const GetInformationLogRequest = async (token) =>
  await axios.get('http://localhost:4000/api/GetInformationLog', { headers: { token } })
