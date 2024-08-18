const TolerantSchema = require("../models/TolerantModel")

exports.addToleCalculator = async (req, res) => {
    const {title, value, result, category, date} = req.body

    const Tolecalculator = TolerantSchema({
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
        await Tolecalculator.save()
        res.status(200).json({message: 'valores admitidos' })
    } catch (error) {
        return res.status(500).json({message: 'Server Error'})
    }
    console.log(Tolecalculator)
}

exports.getToleCalculator = async (req, res) => {
try {
    const Tolecalculator = await TolerantSchema.find().sort({createdAt: -1})
    res.status(200).json(Tolecalculator)
} catch (error) {
    res.status(500).json({message: 'Server Error'})
}


}

exports.deleteToleCalculator = async (req, res) => {
    const {id} = req.params;
    console.log(id)
   
}