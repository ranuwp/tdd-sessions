import Bank from '../src/Bank';

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

  it('should throw error "Cashtag has been registered" when register member with same cashtag', () => {
    const cashtag = '$ranuwp';
    const ranu = {
      cashtag,
    };
    const mark = {
      cashtag,
    };
    const members = new Map();
    const bank = new Bank(members);
    bank.register(ranu);
    const registerSameCashtag = () => {
      bank.register(mark);
    };
    expect(registerSameCashtag).toThrowError('Cashtag has been registered');
  });
});
