const client = require('../client')

const createTrainer = async ({ username, password }) => {
    try {
        const {
            rows: [trainer],
            //INSERT SQL query
        } = await client.query (
           // INSERT INTO table(column1, column2, column3)
           // VALUES(var1, var2, var3)
           // RETURNING everything
            `
                INSERT INTO trainers(username, password)
                VALUES($1, $2)
                RETURNING *;
            `,
            //Kind of like a dependency array, hooks up the parameters to the dolla dolla variables
            [username, password]
        )
        return trainer
    } catch (error) {
        throw error
    }
}

const getAllTrainers = async () => {
    try {
        const { rows }
         = await client.query(`
            SELECT *
            FROM trainers;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

const getTrainerByUsername = async (username) => {
	const {
		rows: [trainer],
	} = await client.query(
		`
      SELECT * 
      FROM trainers
      WHERE trainers.username = '${username}'
      `
	);
	return trainer;
};

module.exports = { createTrainer, getAllTrainers, getTrainerByUsername }
