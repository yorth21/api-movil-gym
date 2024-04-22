import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'

export const FoodDiaryModel = sequelize.define('food_diary', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:
      true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, { timestamps: false })
