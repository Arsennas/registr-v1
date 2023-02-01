import instance from "./settings";

const register = (data) => {
  return instance.post('/auth/users/', data)
}

const login = (data) => {
  return instance.post('/auth/token/login/', data)
}

const getMe = () => {
  return instance.get('/auth/users/me/')
}
const logout = () => {
  return instance.post('/auth/token/logout/')
}
export const services = {
  register,
  login,
  getMe,
  logout
}