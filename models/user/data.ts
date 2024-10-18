export type IUser = {
    id: number
    nombre: string
    apellidos: string
    email: string
}

// User base class for heritance
export class User {
    private data: IUser

    constructor(data: IUser) {
        this.data = data
    }

    get getId() {
        return this.data.id
    }
    get getNombre() {
        return this.data.nombre
    }
    get getApellidos() {
        return this.data.apellidos
    }
    get getEmail() {
        return this.data.email
    }

    set setNombre(nombre: string) {
        this.data.nombre = nombre
    }
    set setApellidos(apellidos: string) {
        this.data.apellidos = apellidos
    }
    set setEmail(email: string) {
        this.data.email = email
    }
}
