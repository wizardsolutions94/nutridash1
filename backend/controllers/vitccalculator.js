const DeficientSchema = require("../models/DeficientModel")

exports.addCalculator = async (req, res) => {
    const {title, value, result, category, date} = req.body

    const calculator = DeficientSchema({
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
        await calculator.save()
        res.status(200).json({message: 'valores admitidos' })
    } catch (error) {
        return res.status(500).json({message: 'Server Error'})
    }
    console.log(calculator)
}

exports.getCalculator = async (req, res) => {
try {
    const calculator = await DeficientSchema.find().sort({createdAt: -1})
    res.status(200).json(calculator)
} catch (error) {
    res.status(500).json({message: 'Server Error'})
}


}

exports.deleteCalculator = async (req, res) => {
    const {id} = req.params;
    console.log(id)
   
}