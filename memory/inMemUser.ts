import { User, type IUser } from "../models/user/data.ts";

/**
 * Class representing an in-memory user storage.
 * Extends the User class to provide CRUD operations for users stored in memory.
 */
export class inMemoryUser extends User {
    /**
     * Array to store user data in memory.
     */
    private usuarios: IUser[] = [];

    /**
     * Create an instance of inMemoryUser.
     * @param data - Initial user data.
     */
    constructor(data: IUser) {
        super(data);
    }

    /**
     * Create a new user and add it to the in-memory storage.
     * @param data - The user data to be added.
     */
    public create(data: IUser) {
        this.usuarios.push(data);
    }

    /**
     * Read a user's data from the in-memory storage by ID.
     * @param id - The ID of the user to be read.
     * @returns The user data if found, otherwise undefined.
     */
    public read(id: number) {
        return this.usuarios.find((usuario) => usuario.id === id);
    }

    /**
     * Update a user's data in the in-memory storage by ID.
     * @param id - The ID of the user to be updated.
     * @param data - The new user data.
     */
    public update(id: number, data: IUser) {
        const index = this.usuarios.findIndex((usuario) => usuario.id === id);
        this.usuarios[index] = data;
    }

    /**
     * Delete a user from the in-memory storage by ID.
     * @param id - The ID of the user to be deleted.
     */
    public delete(id: number) {
        this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
    }

    /**
     * List all users stored in memory.
     * @returns An array of all user data.
     */
    public list() {
        return this.usuarios;
    }
}