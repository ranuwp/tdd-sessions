export default class Bank {
  constructor(members) {
    this.members = members;
  }

  register(newMember) {
    const { cashtag } = newMember;
    this.members.set(cashtag, newMember);
  }
}
