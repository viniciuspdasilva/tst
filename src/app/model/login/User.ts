class Roles {
  constructor(
    public grupo: number,
    public auth: boolean,
    public pages: number
  ) {}
}

class User {
  constructor(
    public id: number,
    public  nome: string,
    public cpf: string,
    public matricula: string,
    public password: string,
    public roles: Roles) {}
}
