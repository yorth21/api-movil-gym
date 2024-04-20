import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'

export const ExcerciseModel = sequelize.define('excercises', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  series: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  repetitions: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  urlImg: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'url_img'
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
