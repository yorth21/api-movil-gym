import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'
import { PhysicalInfoModel } from './physicalInfo.model.js'
import { RegDiaryModel } from './regDiary.model.js'
import { FoodDiaryModel } from './foodDiary.model.js'

export const UserModel = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    field: 'is_active'
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

UserModel.hasOne(PhysicalInfoModel, {
  foreignKey: 'iduser',
  sourceKey: 'id'
})

PhysicalInfoModel.belongsTo(UserModel, {
  foreignKey: 'iduser',
  targetKey: 'id'
})

UserModel.hasMany(RegDiaryModel, {
  foreignKey: 'iduser',
  sourceKey: 'id'
})

RegDiaryModel.belongsTo(UserModel, {
  foreignKey: 'iduser',
  targetKey: 'id'
})

UserModel.hasMany(FoodDiaryModel, {
  foreignKey: 'iduser',
  sourceKey: 'id'
})

FoodDiaryModel.belongsTo(UserModel, {
  foreignKey: 'iduser',
  targetKey: 'id'
})
