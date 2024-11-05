import { Database } from 'db0';

export interface Response<T> {
    status: number
    data: T | Array<T>
    message: string
}



export function baseModel<T>() {
    let dbName = '';
    const db = useDatabase();

    const getData = async (page?: number, limit = 10): Promise<Response<T>> => {
        let query = `SELECT * FROM ${dbName}`;
        if (page) {
            const offset = (page - 1) * limit;
            query += ` LIMIT ${limit} OFFSET ${offset}`;
        }
        try {
            const data = await db.prepare(query).all() as T[];
            return { status: 200, message: 'Success', data }
        } catch (error) {
            throw error;
        }
    };

    const getDetail = async (id: string | number | boolean | null | undefined): Promise<Response<T>> => {
        try {
            const data = await db.prepare(`SELECT * FROM ${dbName} WHERE id = ${id}`).get() as T
            return { status: 200, message: 'Success', data }
        } catch (error) {
            throw error;
        }
    };

    const saveData = async (payload: { [s: string]: any; } | ArrayLike<unknown>) => {
        const [keys, values] = [Object.keys(payload), Object.values(payload)];
        try {
            return await db.prepare(`INSERT INTO ${dbName} (${keys.join(', ')}) VALUES (${values.join(', ')})`).run();
        } catch (error) {
            throw error;
        }
    };

    const updateData = async (id: string | number | boolean | null | undefined, payload: ArrayLike<unknown> | { [s: string]: unknown; }) => {
        try {
            return await db.sql`UPDATE ${dbName} SET ${Object.entries(payload).map(item => `${item[0]} = ${item[1]}`).join(', ')} WHERE id = ${id}`;
        } catch (error) {
            throw error;
        }
    };

    const deleteData = async (id: string | number | boolean | null | undefined): Promise<Response<unknown>> => {
        const data = await db.prepare(`DELETE FROM ${dbName} WHERE id = ${id}`)
        return { status: 200, message: 'Success', data }
    }

    const dropTable = (): any => {
        throw new Error('dropTable() must be implemented in subclass');
    };

    return {
        getData,
        getDetail,
        saveData,
        updateData,
        dropTable,
        setDbName: (name: any) => { dbName = name; }
    };
}
