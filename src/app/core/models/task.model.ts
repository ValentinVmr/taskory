export enum TaskState {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export type LlmProvider = 'openai' | 'anthropic' | 'gemini' | 'mistral';

export interface LlmConfig {
  provider: LlmProvider;
  model: string;
  apiKey: string;
  enabled: boolean;
}

export interface Task {
  id: string;
  description: string;
  state: TaskState;
  startDate: string;
  endDate: string;
  ticketNumber?: string;
  order: number;
  originDate: string;
  carriedOver: boolean;
  carriedFromId?: string; // ID de la tâche source lors d'un carry-over
}

export interface JournalPage {
  date: string; // YYYY-MM-DD
  taskIds: string[];
  aiSummary?: string;
}

export interface AppStorage {
  tasks: Record<string, Task>;
  pages: Record<string, JournalPage>;
  llmConfig?: LlmConfig;
}

