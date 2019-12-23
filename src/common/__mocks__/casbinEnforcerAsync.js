export const casbinEnforcerMock = {
  hasRoleForUser: jest.fn(),
  hasPermissionForUser: jest.fn(),
};

export default Promise.resolve(casbinEnforcerMock);
