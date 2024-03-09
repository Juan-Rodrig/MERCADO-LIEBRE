const { loadData, saveData } = require("../../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res) => {
    const {id} = req.params
    const products = loadData()

    const productsLessOne = products.filter(p => p.id !== +id)

    saveData(productsLessOne)
    res.redirect("/productos") 
}