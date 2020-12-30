interface CreateUserData {
  name?: string,
  email: string,
  password: number,
  techs: string[]
}

export default function CreateUser({ name, email, password, techs }: CreateUserData) {
  const user = {
    name,
    email,
    password, 
    techs
  }

  return user;
}