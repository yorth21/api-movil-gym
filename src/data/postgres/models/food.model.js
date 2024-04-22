import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'
import { FoodDiaryModel } from './foodDiary.model.js'

export const FoodModel = sequelize.define('foods', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  proteins: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  carbs: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fats: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at'
  }
})

FoodModel.hasMany(FoodDiaryModel, {
  foreignKey: 'idfood',
  sourceKey: 'id'
})

FoodDiaryModel.belongsTo(FoodModel, {
  foreignKey: 'idfood',
  sourceKey: 'id'
})
