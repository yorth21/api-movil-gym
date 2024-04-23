import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'

export const IngredientModel = sequelize.define('ingredient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: false })
