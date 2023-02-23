
function associateModels(models) {
  models.Authors.hasMany(models.Books);
  models.Books.belongsTo(models.Authors);
}

module.exports = { associateModels };  

