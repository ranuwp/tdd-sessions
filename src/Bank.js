export default class Bank {
  constructor(members) {
    this.members = members;
  }

  register(newMember) {
    const { cashtag } = newMember;
    this._validateCashtag(cashtag);
    this.members.set(cashtag, newMember);
  }

  _validateCashtag(cashtag) {
    const member = this.members.get(cashtag);
    if (member) {
      throw Error('Cashtag has been registered');
    }
  }
}
