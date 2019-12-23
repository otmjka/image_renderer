import casbinEnforcerAsync from './casbinEnforcerAsync';

// eslint-disable-next-line no-unused-vars, no-empty-function
export default async function addRole(subject, role) {
  const enforcer = await casbinEnforcerAsync;
  await enforcer.addGroupingPolicy(subject, role);
}
