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

  describe('User entity constructor', () => {
    it('Should create a new user with default values', () => {
      const sut = new User({
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
      });
      expect(sut.id).toBeDefined();
      expect(sut.avatar).toBeNull();
      expect(sut.isActive).toBeTruthy();
      expect(sut.createdAt).toBeInstanceOf(Date);
    });
  });
});
