const UserModel = require('../models/UserModel')

exports.CreateUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

exports.LoginUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

exports.ReadUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

exports.UpdateUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

exports.DeleteUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

exports.CreateUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

exports.CreateUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

exports.CreateUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

exports.CreateUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

exports.CreateUser = async (req, res) => {

    let reqBody = req.body;

    try {
        
        const result = await UserModel.create(reqBody)

        res.status(200).json({status: 'success', data: result})

    } catch (error) {

        res.status(404).json({status: 'fail', data: 'something went wrong'})
        
    }

}

