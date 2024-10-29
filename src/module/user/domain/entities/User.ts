import { randomBytes } from 'node:crypto';

interface UserProps {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  isActive?: boolean;
  createdAt?: Date;
}

export class User {
  public readonly id: string;
  constructor(
    private readonly props: UserProps,
    id?: string,
  ) {
    this.id = id || randomBytes(12).toString('hex');
    this.avatar = this.props.avatar;
    this.isActive = this.props.isActive;
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get avatar(): string {
    return this.props.avatar;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  private set avatar(avatar: string) {
    this.props.avatar = avatar ?? null;
  }

  private set isActive(isActive: boolean) {
    this.props.isActive = isActive ?? true;
  }
}
