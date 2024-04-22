import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'
import { FoodModel } from './food.model.js'

export const CatFoodModel = sequelize.define('cat_food', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, { timestamps: false })

CatFoodModel.hasMany(FoodModel, {
  foreignKey: 'idcatfood',
  sourceKey: 'id'
})

FoodModel.belongsTo(CatFoodModel, {
  foreignKey: 'idcatfood',
  sourceKey: 'id'
})
