import { ContactFormType } from "@/models/contactModel";
import { CheckoutInformationType } from "@/models/orderModel";
import { UserType } from "@/models/userModel";
import { seedOrders } from "./data/orders";
import { seedUsers } from "./data/users";

const STORAGE_KEY = "millier_mock_db_v1";

export type MockWritableState = {
  users: UserType[];
  orders: CheckoutInformationType[];
  contacts: ContactFormType[];
};

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function createInitialState(): MockWritableState {
  return {
    users: clone(seedUsers),
    orders: clone(seedOrders),
    contacts: [],
  };
}

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function readPersisted(): MockWritableState | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MockWritableState;
  } catch {
    return null;
  }
}

function persist(state: MockWritableState) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let memoryState: MockWritableState | null = null;

export function getMockDb(): MockWritableState {
  if (!memoryState) {
    memoryState = readPersisted() || createInitialState();
    persist(memoryState);
  }
  return memoryState;
}

export function updateMockDb(
  updater: (state: MockWritableState) => void
): MockWritableState {
  const state = getMockDb();
  updater(state);
  persist(state);
  return state;
}

export function resetMockDb(): MockWritableState {
  memoryState = createInitialState();
  persist(memoryState);
  return memoryState;
}

export function createId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
