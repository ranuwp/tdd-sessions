describe('Bank', () => {
  it('should add people who are register by its cashtag', () => {
    const cashtag = '$ranuwp';
    const ranu = {
      cashtag,
    };
    const members = new Map();
    const bank = new Bank(members);
    bank.register(ranu);
    const firstMember = members.get(cashtag);
    expect(firstMember).toEqual(ranu);
  });
});
