import casbinEnforcerAsync from './casbinEnforcerAsync';

// eslint-disable-next-line no-unused-vars, no-empty-function
export default async function addPolicy(subject, object, action) {
  const enforcer = await casbinEnforcerAsync;
  await enforcer.addPolicy(subject, object, action);
}
