const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({include: [{model: Product, through: ProductTag}]}).then((tagData) => {
    res.json(tagData)
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {include: [{model: Product, Through: ProductTag}]}).then((tagData) => {
    res.json(tagData)
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body).then((newTag) => {
    res.json(newTag)
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((tagData) => {
    res.json(tagData)
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((tagData) => {
    res.json(tagData)
  })
});

module.exports = router;
