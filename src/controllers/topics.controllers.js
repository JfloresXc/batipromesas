const controller = {}
const Tema = require('../models/topics.model')

controller.renderTemas = async (req, res) => {
    const temas = await Tema.find()
    res.render('pages/topics', {temas})
}

controller.createTema = async (req, res) => {
    const tema = new Tema(req.body)
    await tema.save()
    res.redirect('/topics')
}

controller.renderFormTema = async (req, res) => {
    res.render('pages/addTopic')
}

controller.updateTema = async (req, res) => {
    await Tema.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'Updated successfully !'})
}

controller.deleteTema = async (req, res) => {
    await Tema.findByIdAndDelete(req.params.id)
    res.json({message: 'Deleted successfully !'})
}

module.exports = controller