const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  Category.findAll({include: [{model: Product}]}).then((categoryData) => {
    res.json(categoryData)
  })
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {include: [{model: Product}]}).then((categoryData) => {
    res.json(categoryData)
  })
});

router.post('/', (req, res) => {
  Category.create(req.body).then((newCategory) => {
    res.json(newCategory)
  })
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((categoryData) => {
    res.json(categoryData)
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((categoryData) => {
    res.json(categoryData)
  })
});

module.exports = router;
