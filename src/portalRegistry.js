const _portalRegistry = new Map();

export const registerPortContent = (key,content) =>
  _portalRegistry.set(key,content);

export const getPortContent = key => _portalRegistry.get(key);
