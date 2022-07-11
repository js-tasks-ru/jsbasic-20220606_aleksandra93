function namify(users) {
  let name = []
  users.forEach((user)=> {
    name.push(user.name)
  });
  return name;
}
