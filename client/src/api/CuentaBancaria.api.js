import axios from 'axios'


export const getCurrentMoneyRequest = async (email) =>
  await axios.get(`/api/getCurrentMoney/${email}`)

// export const getCurrentMoneyRequest = async (email) =>
//   await axios.get(`http://localhost:4000/api/getCurrentMoney/${email}`)
