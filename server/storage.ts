import { users, newsletterSignups, type User, type InsertUser, type NewsletterSignup, type InsertNewsletterSignup } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup>;
  getNewsletterSignupByEmail(email: string): Promise<NewsletterSignup | undefined>;
  getAllNewsletterSignups(): Promise<NewsletterSignup[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsletterSignups: Map<number, NewsletterSignup>;
  private userIdCounter: number;
  private signupIdCounter: number;

  constructor() {
    this.users = new Map();
    this.newsletterSignups = new Map();
    this.userIdCounter = 1;
    this.signupIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createNewsletterSignup(insertSignup: InsertNewsletterSignup): Promise<NewsletterSignup> {
    const id = this.signupIdCounter++;
    const signup: NewsletterSignup = { 
      ...insertSignup, 
      id,
      createdAt: new Date()
    };
    this.newsletterSignups.set(id, signup);
    return signup;
  }

  async getNewsletterSignupByEmail(email: string): Promise<NewsletterSignup | undefined> {
    return Array.from(this.newsletterSignups.values()).find(
      (signup) => signup.email === email,
    );
  }

  async getAllNewsletterSignups(): Promise<NewsletterSignup[]> {
    return Array.from(this.newsletterSignups.values());
  }
}

export const storage = new MemStorage();
