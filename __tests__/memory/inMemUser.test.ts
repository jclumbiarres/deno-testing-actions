import { assertEquals } from "jsr:@std/assert";
import { inMemoryUser } from "../../memory/inMemUser.ts";


Deno.test("In memory User model create & read", () => {
    const usuario = {
        id: 1,
        nombre: 'John',
        apellidos: 'Doe',
        email: 'john@doe.com'
    }
    const user = new inMemoryUser(usuario);
    user.create(usuario);
    const userRead = user.read(1);
    assertEquals(userRead, usuario);
})

Deno.test("In memory User model update", () => {
    const usuario = {
        id: 1,
        nombre: 'John',
        apellidos: 'Doe',
        email: 'john@doe.com'
    }
    const user = new inMemoryUser(usuario);
    user.create(usuario);
    const userUpdate = {
        id: 1,
        nombre: 'Jane',
        apellidos: 'Smith',
        email: 'jane@smith.com'
    }
    user.update(1, userUpdate);
    const userRead = user.read(1);
    assertEquals(userRead, userUpdate);
})

Deno.test("In memory User model delete", () => {
    const usuario = {
        id: 1,
        nombre: 'John',
        apellidos: 'Doe',
        email: 'john@doe.com'
    }
    const user = new inMemoryUser(usuario);
    user.create(usuario);
    user.delete(1);
    const userRead = user.read(1);
    assertEquals(userRead, undefined);
})

Deno.test("In memory User model list", () => {
    const usuario = {
        id: 1,
        nombre: 'John',
        apellidos: 'Doe',
        email: 'john@doe.com'
    }
    const user = new inMemoryUser(usuario);
    user.create(usuario);
    const usuario2 = {
        id: 2,
        nombre: 'Jane',
        apellidos: 'Smith',
        email: 'jane@smith.com'
    }
    user.create(usuario2);
    const list = user.list();
    assertEquals(list, [usuario, usuario2]);
})

