type Role = 'User' | 'Admin'

export interface User {
  _id: string
  role: Role[]
  email: string
  name: string
  date_of_birth: null
  address: string
  phone: string
  createdAt: string
  updatedAt: string
}