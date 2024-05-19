import * as ExpoSQLite from "expo-sqlite"

const db = ExpoSQLite.openDatabase("sessions.db");

// TABLA sessions

export const initSQLiteDB = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            // SQL statement
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);",
                [], // Parameters
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
    return promise;
}

export const insertSession = ({
    email,
    localId,
    token
}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            // SQL statement
            tx.executeSql(
                'INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);',
                [localId, email, token], // Parameters
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
    return promise;
}

export const getSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            // SQL statement
            tx.executeSql(
                'SELECT * from sessions',
                [], // Parameters
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
    return promise;
}

export const dropSessionsTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            // SQL statement
            tx.executeSql(
                "DROP TABLE IF EXISTS sessions",
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
    return promise;
}

export const truncateSessionsTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            // SQL statement
            tx.executeSql(
                "DELETE FROM sessions",
                [], // Parameters
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
    return promise;
}