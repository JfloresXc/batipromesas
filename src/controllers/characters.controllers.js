const controller = {}
const Character = require('../models/character.model')

controller.renderCharacters = async (req, res) => {
    const characters = await Character.find()
    res.render('pages/characters', {characters})
}

controller.createCharacter = async (req, res) => {
    const character = new Character(req.body)
    await character.save()
    res.json(character)
}

controller.updateCharacter = async (req, res) => {
    await Character.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'Updated successfully !'})
}

controller.deleteCharacter = async (req, res) => {
    await Character.findByIdAndDelete(req.params.id)
    res.json({message: 'Deleted successfully !'})
}

module.exports = controller