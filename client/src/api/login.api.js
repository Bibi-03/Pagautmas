import axios from 'axios'

export const getLoginCredentialsRequest = async (email, password) =>
  await axios.get(`/api/Login/${email}/${password}`)


// export const getLoginCredentialsRequest = async (email, password) =>
//   await axios.get(`http://localhost:4000/api/Login/${email}/${password}`)


