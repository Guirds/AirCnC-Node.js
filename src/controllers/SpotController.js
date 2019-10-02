const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {
  async index(req,res){
    const {tech} = req.query;

    const spots = await Spot.find({techs: tech})
    //find() para encontrar mais de um registro

    return res.json(spots)
  },

  async store(req, res) {
    const {filename}= req.file
    const {company,techs,price}= req.body
    const {user_id} = req.headers;

    const user = await User.findById(user_id)

    if(!user){
      return res.status(400).json({error: 'Usuário não existe'});
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail:filename,
      company,
      techs: techs.split(',').map(tech=>tech.trim()),
      price,
    })

    return res.json(spot)
  }
}

// Saida dos dados= techs: 'ReactJS, React Native, Node.js' }
//techs.split(',') tira as virgulas
//.map(tech=>tech.trim()) - trim()tira os espaços que sobram 
//techs.split(',').map(tech=>tech.trim()) vai percorrer toda a saida dos dados tirar todas as virgulas da string e espaços e deixar apenas os textos separados por virgulas(que estarão fora das aspa) que nesse caso seram nosso array.