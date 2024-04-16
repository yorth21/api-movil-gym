import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'

export const RegDiaryModel = sequelize.define('regdiary', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, { timestamps: false })
