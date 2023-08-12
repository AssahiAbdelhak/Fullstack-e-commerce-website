import { app } from "../server.js"

export const getAllProducts = async () => {
    const client = await app.pg.connect()
    try {
        const { rows } = await client.query(
        'SELECT * FROM shoes;',
        )
        // Note: avoid doing expensive computation here, this will block releasing the client
        return rows
    } finally {
        // Release the client immediately after query resolves, or upon error
        client.release()
    }
}