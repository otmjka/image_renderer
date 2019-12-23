import * as casbin from 'casbin';
import path from 'path';
import { SequelizeAdapter } from 'casbin-sequelize-adapter';
import sequelizeOptions from './sequelizeOptions';

async function createCasbinEnforcer() {
  const adapter = await SequelizeAdapter.newAdapter(sequelizeOptions);
  const enforcer = await casbin.newEnforcer(path.join(__dirname, 'rbac_model.conf'), adapter);
  return enforcer;
}

export default createCasbinEnforcer();
