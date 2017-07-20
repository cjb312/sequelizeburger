module.exports = function(sequelize, dataTypes) {

var burger = sequelize.define("burger",  {
  id: {
    type: dataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: dataTypes.STRING,
    allowNull: false
  },
  devoured: {
    type: dataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true,
  createdAt: "Date Listed",
  updatedAt: "Date Eaten"
});
return burger;
};
