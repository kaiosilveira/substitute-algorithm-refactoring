import { foundPerson } from '.';

describe('foundPerson', () => {
  it('should return Don if he was found', () => {
    const people = ['Don', 'Kaio', 'Dan'];
    expect(foundPerson(people)).toEqual('Don');
  });

  it('should return John if he was found', () => {
    const people = ['Kaio', 'John', 'Dan'];
    expect(foundPerson(people)).toEqual('John');
  });

  it('should return Kent if he was found', () => {
    const people = ['Kaio', 'Dan', 'Kent'];
    expect(foundPerson(people)).toEqual('Kent');
  });

  it('should return an empty string if none of the expected people were found', () => {
    const people = ['Kaio', 'Dan', 'Enzo'];
    expect(foundPerson(people)).toEqual('');
  });
});
