import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'
import { ExcerciseModel } from './excercise.model.js'

export const CatExcerciseModel = sequelize.define('cat_excercises', {
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

CatExcerciseModel.hasMany(ExcerciseModel, {
  foreignKey: 'idcat',
  sourceKey: 'id'
})

ExcerciseModel.belongsTo(CatExcerciseModel, {
  foreignKey: 'idcat',
  sourceKey: 'id'
})
