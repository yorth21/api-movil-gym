import { DataTypes } from 'sequelize'
import { sequelize } from '../connection.js'

export const PhysicalInfoModel = sequelize.define('physical_info', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  weightGoal: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: 'weight_goal'
  },
  physicalGoal: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'physical_goal'
  },
  physicalLevel: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'physical_level'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
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
