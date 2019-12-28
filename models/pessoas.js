const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection('pessoas')
            .select('*')
            .then(resolve)
            .catch(reject)
    })
}

const findById = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection('pessoas')
            .where({ id })
            .select('*')
            .then(results => {
                if(results.length > 0) {
                    resolve(results[0])
                } else {
                    resolve({})
                }
            })
            .catch(reject)
    })
}

const deleteOne = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection('pessoas')
            .where({ id })
            .del()
            .then(resolve)
            .catch(reject)
    })
}

const create = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection('pessoas')
            .insert({
                nome: data.nome,
                nascimento: data.nascimento,
                cargo: data.cargo
            })
            .then(resolve)
            .catch(reject)
    })
}

const update = (connection, id, data) => {
    return new Promise((resolve, reject) => {
        connection('pessoas')
            .where({ id })
            .update({
                nome: data.nome,
                nascimento: data.nascimento,
                cargo: data.cargo
            })
            .then(resolve)
            .catch(reject)
    })
}

module.exports = {
    findAll,
    deleteOne,
    create,
    findById,
    update
}
