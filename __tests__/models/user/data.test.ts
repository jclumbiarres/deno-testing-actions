import { assertEquals } from "jsr:@std/assert";
import { User, IUser } from "../../../models/user/data.ts";

Deno.test("IUser data model", () => {
  const usuario: IUser = {
    id: 1,
    nombre: 'John',
    apellidos: 'Doe',
    email: 'john@doe.com'
  }
  assertEquals(usuario.id, 1)
  assertEquals(usuario.nombre, 'John')
  assertEquals(usuario.apellidos, 'Doe')
  assertEquals(usuario.email, 'john@doe.com')
})

Deno.test("User base class getters", () => {
  const usuario: IUser = {
    id: 1,
    nombre: 'John',
    apellidos: 'Doe',
    email: 'john@doe.com'
  }
  const user = new User(usuario);
  assertEquals(user.getId, 1)
  assertEquals(user.getNombre, 'John')
  assertEquals(user.getApellidos, 'Doe')
  assertEquals(user.getEmail, 'john@doe.com')
})

Deno.test("User base class setters", () => {
  const usuario: IUser = {
    id: 1,
    nombre: 'John',
    apellidos: 'Doe',
    email: 'john@doe.com'
  }
  const user = new User(usuario);
  user.setNombre = 'Jane'
  user.setApellidos = 'Smith'
  user.setEmail = 'john@doe.com'
  assertEquals(user.getNombre, 'Jane')
  assertEquals(user.getApellidos, 'Smith')
  assertEquals(user.getEmail, 'john@doe.com')
})
