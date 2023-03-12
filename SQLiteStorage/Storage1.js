

const generalExecuteSql = (db, query, params = []) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                query,
                params,
                (tx, result) => resolve(result),
                (e) => reject(e));
        });
    });
}

export default generalExecuteSql;