const {response} = require('express');

const createUser = (req, res = response) => {
    const body = req.body;
    res.json({message: "POST API - controller", body});
};

const readUser = (req, res = response) => {
    const {q, name, apiKey} = req.query;
    res.json({message: "GET API - controller", q, name, apiKey});
};

const updateUser = (req, res = response) => {
    const id = req.params.id;
    res.json({message: "PUT API - controller", id});
};

const deleteUser = (res = response) => {
    res.json({message: "DELETE API - controller"});
};

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
};