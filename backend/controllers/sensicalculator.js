const SensitiveSchema = require("../models/SensitiveModel")

exports.addSensiCalculator = async (req, res) => {
    const {title, value, result, category, date} = req.body

    const sensicalculator = SensitiveSchema({
        title,
        value,
        result,
        category,
        date
    })
    
    try {
        //validations
        if(!title || !value || !result || !category || !date ){
            return res.status(400).json({message: 'Todos los campos son requeridos'})
        }
        if(value <=0 || !value === 'number' ){
            return res.status(400).json({message: 'Colocar un digito valido'})
        }
        await sensicalculator.save()
        res.status(200).json({message: 'valores admitidos' })
    } catch (error) {
        return res.status(500).json({message: 'Server Error'})
    }
    console.log(sensicalculator)
}

exports.getSensiCalculator = async (req, res) => {
try {
    const Sensicalculator = await SensitiveSchema.find().sort({createdAt: -1})
    res.status(200).json(calculator)
} catch (error) {
    res.status(500).json({message: 'Server Error'})
}


}

exports.deleteSensiCalculator = async (req, res) => {
    const {id} = req.params;
    console.log(id)
   
}