import { assertEquals } from "jsr:@std/assert";
import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";

Deno.test("Database operations", () => {
    // Open a database
    const db = new DB();
    db.execute(`
        CREATE TABLE IF NOT EXISTS people (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
        )
    `);

    // Insert data
    const names = ["Peter Parker", "Clark Kent", "Bruce Wayne"];
    for (const name of names) {
        db.query("INSERT INTO people (name) VALUES (?)", [name]);
    }

    // Query data
    const queriedNames: string[] = [];
    for (const [name] of db.query<[string]>("SELECT name FROM people")) {
        queriedNames.push(name);
    }

    // Assert the data
    assertEquals(queriedNames, names);

    // Clean up
    db.execute("DROP TABLE people");
    db.close();
});