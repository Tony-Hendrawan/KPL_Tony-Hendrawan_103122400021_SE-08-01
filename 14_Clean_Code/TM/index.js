function processUser(user) {
  if (!user?.isActive || !user?.hasPermission) {
    return null;
  }

  return doSomething(user);
}