import { User } from './User';

describe('User entity', () => {
  it('should be defined', () => {
    const sut = new User({
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
    });
    expect(sut).toBeDefined();
  });
});
