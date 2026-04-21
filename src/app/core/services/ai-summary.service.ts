import { Injectable } from '@angular/core';
import { Task, TaskState, LlmConfig, LlmProvider } from '../models/task.model';
import { StorageService } from './storage.service';

export interface LlmProviderDef {
  id: LlmProvider;
  label: string;
  logo: string;
  models: { id: string; label: string }[];
  docUrl: string;
}

export const LLM_PROVIDERS: LlmProviderDef[] = [
  {
    id: 'openai',
    label: 'OpenAI',
    logo: '🟢',
    docUrl: 'https://platform.openai.com/api-keys',
    models: [
      // GPT-4.1 (Avril 2025)
      { id: 'gpt-4.1-nano',        label: 'GPT-4.1 Nano (ultra rapide)' },
      { id: 'gpt-4.1-mini',        label: 'GPT-4.1 Mini (rapide, économique)' },
      { id: 'gpt-4.1',             label: 'GPT-4.1' },
      // GPT-4o
      { id: 'gpt-4o-mini',         label: 'GPT-4o Mini' },
      { id: 'gpt-4o',              label: 'GPT-4o' },
      // Série o (raisonnement)
      { id: 'o3-mini',             label: 'o3 Mini (raisonnement)' },
      { id: 'o3',                  label: 'o3 (raisonnement avancé)' },
      { id: 'o4-mini',             label: 'o4 Mini (raisonnement)' },
      { id: 'o1',                  label: 'o1' },
      { id: 'o1-pro',              label: 'o1 Pro' },
      // GPT-5 (2025-2026)
      { id: 'gpt-5-mini',          label: 'GPT-5 Mini' },
      { id: 'gpt-5',               label: 'GPT-5' },
      { id: 'gpt-5-pro',           label: 'GPT-5 Pro' },
    ],
  },
  {
    id: 'anthropic',
    label: 'Anthropic Claude',
    logo: '🟤',
    docUrl: 'https://console.anthropic.com/settings/keys',
    models: [
      // Claude 3.x
      { id: 'claude-3-haiku-20240307',      label: 'Claude 3 Haiku' },
      { id: 'claude-3-7-sonnet-20250219',   label: 'Claude 3.7 Sonnet' },
      // Claude 4
      { id: 'claude-haiku-4-5',             label: 'Claude Haiku 4.5 (rapide)' },
      { id: 'claude-sonnet-4-5',            label: 'Claude Sonnet 4.5' },
      { id: 'claude-4-sonnet-20250514',     label: 'Claude 4 Sonnet' },
      { id: 'claude-opus-4-5',              label: 'Claude Opus 4.5 (puissant)' },
      { id: 'claude-4-opus-20250514',       label: 'Claude 4 Opus' },
      { id: 'claude-opus-4-6',              label: 'Claude Opus 4.6' },
      { id: 'claude-opus-4-7',              label: 'Claude Opus 4.7 (dernier)' },
    ],
  },
  {
    id: 'gemini',
    label: 'Google Gemini',
    logo: '🔵',
    docUrl: 'https://aistudio.google.com/app/apikey',
    models: [
      // Gemini 2.0
      { id: 'gemini-2.0-flash-lite',        label: 'Gemini 2.0 Flash Lite (léger)' },
      { id: 'gemini-2.0-flash',             label: 'Gemini 2.0 Flash' },
      // Gemini 2.5
      { id: 'gemini-2.5-flash-lite',        label: 'Gemini 2.5 Flash Lite' },
      { id: 'gemini-2.5-flash',             label: 'Gemini 2.5 Flash' },
      { id: 'gemini-2.5-pro',              label: 'Gemini 2.5 Pro (puissant)' },
      // Gemini 3
      { id: 'gemini-3-flash-preview',       label: 'Gemini 3 Flash (preview)' },
      { id: 'gemini-3-pro-preview',         label: 'Gemini 3 Pro (preview)' },
      { id: 'gemini-3.1-flash-lite-preview',label: 'Gemini 3.1 Flash Lite (preview)' },
      { id: 'gemini-3.1-pro-preview',       label: 'Gemini 3.1 Pro (preview, dernier)' },
      // Alias stables
      { id: 'gemini-flash-latest',          label: 'Gemini Flash Latest' },
      { id: 'gemini-pro-latest',            label: 'Gemini Pro Latest' },
    ],
  },
  {
    id: 'mistral',
    label: 'Mistral AI',
    logo: '🟠',
    docUrl: 'https://console.mistral.ai/api-keys',
    models: [
      // Mistral classic
      { id: 'mistral/open-mistral-nemo',        label: 'Mistral Nemo (open)' },
      { id: 'mistral/mistral-small-latest',     label: 'Mistral Small (dernier)' },
      { id: 'mistral/mistral-medium-latest',    label: 'Mistral Medium (dernier)' },
      { id: 'mistral/mistral-large-latest',     label: 'Mistral Large (dernier)' },
      { id: 'mistral/mistral-large-3',          label: 'Mistral Large 3' },
      // Magistral (raisonnement)
      { id: 'mistral/magistral-small-latest',   label: 'Magistral Small (raisonnement)' },
      { id: 'mistral/magistral-medium-latest',  label: 'Magistral Medium (raisonnement)' },
      // Devstral (code)
      { id: 'mistral/devstral-small-latest',    label: 'Devstral Small (code)' },
      { id: 'mistral/devstral-latest',          label: 'Devstral (code, puissant)' },
      // Pixtral (vision)
      { id: 'mistral/pixtral-large-2411',       label: 'Pixtral Large (vision)' },
    ],
  },
];

@Injectable({ providedIn: 'root' })
export class AiSummaryService {
  constructor(private storage: StorageService) {}

  async generateSummary(tasks: Task[]): Promise<string> {
    const config = this.storage.getLlmConfig();
    if (!config?.apiKey || !config?.enabled) return this.generateLocalSummary(tasks);

    if (!navigator.onLine) {
      return this.generateLocalSummary(tasks) + '\n\n⚠️ Résumé IA indisponible hors-ligne.';
    }

    const prompt = this.buildPrompt(tasks);
    try {
      switch (config.provider) {
        case 'openai':    return await this.callOpenAI(config, prompt);
        case 'anthropic': return await this.callAnthropic(config, prompt);
        case 'gemini':    return await this.callGemini(config, prompt);
        case 'mistral':   return await this.callMistral(config, prompt);
        default:          return this.generateLocalSummary(tasks);
      }
    } catch (e: any) {
      console.error('AI API error:', e);
      const isOffline = !navigator.onLine || e?.message?.includes('Failed to fetch');
      const suffix = isOffline
        ? '\n\n⚠️ Résumé IA indisponible hors-ligne.'
        : '\n\n⚠️ Erreur API — résumé local généré à la place.';
      return this.generateLocalSummary(tasks) + suffix;
    }
  }

  private sortByTicket(tasks: Task[]): Task[] {
    return [...tasks].sort((a, b) => {
      if (a.ticketNumber && !b.ticketNumber) return -1;
      if (!a.ticketNumber && b.ticketNumber) return 1;
      return 0;
    });
  }

  private buildPrompt(tasks: Task[]): string {
    const sorted = this.sortByTicket(tasks);
    const lines = sorted.map(t => `- ${t.ticketNumber ? `[${t.ticketNumber}] ` : ''}${t.description} (${t.state})`);
    return `Voici les tâches de la journée d'hier :\n${lines.join('\n')}\n\nRédige directement un résumé professionnel de cette journée en français, sans introduction ni formule de politesse, en 3 à 5 phrases. Va droit au but.`;
  }

  private async callOpenAI(config: LlmConfig, prompt: string): Promise<string> {
    const isOSeries = /^o\d/.test(config.model);

    const body: Record<string, unknown> = {
      model: config.model,
      messages: [
        { role: 'system', content: 'Tu es un assistant de productivité. Génère un résumé concis et professionnel en français.' },
        { role: 'user', content: prompt },
      ],
    };

    // Les modèles o-series nécessitent max_completion_tokens (optionnel)
    if (isOSeries) body['max_completion_tokens'] = 2048;

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${config.apiKey}` },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
    const data = await res.json();
    const choice = data.choices[0];
    if (choice.finish_reason === 'length') {
      console.warn('OpenAI: réponse tronquée par la limite de tokens');
    }
    return choice.message.content.trim();
  }

  private async callAnthropic(config: LlmConfig, prompt: string): Promise<string> {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': config.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: config.model, max_tokens: 4096,
        system: 'Tu es un assistant de productivité. Génère un résumé concis et professionnel en français.',
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!res.ok) throw new Error(`Anthropic ${res.status}`);
    return (await res.json()).content[0].text.trim();
  }

  private async callGemini(config: LlmConfig, prompt: string): Promise<string> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:generateContent?key=${config.apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Tu es un assistant de productivité. Génère un résumé concis et professionnel en français.\n\n${prompt}` }] }],
        generationConfig: { maxOutputTokens: 4096 },
      }),
    });
    if (!res.ok) throw new Error(`Gemini ${res.status}`);
    return (await res.json()).candidates[0].content.parts[0].text.trim();
  }

  private async callMistral(config: LlmConfig, prompt: string): Promise<string> {
    // L'ID contient le préfixe "mistral/" (convention litellm), on l'enlève pour l'API
    const model = config.model.replace(/^mistral\//, '');
    const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${config.apiKey}` },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: 'Tu es un assistant de productivité. Génère un résumé concis et professionnel en français.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 4096,
      }),
    });
    if (!res.ok) throw new Error(`Mistral ${res.status}`);
    return (await res.json()).choices[0].message.content.trim();
  }

  private generateLocalSummary(tasks: Task[]): string {
    const done = this.sortByTicket(tasks.filter(t => t.state === TaskState.DONE));
    const inProgress = this.sortByTicket(tasks.filter(t => t.state === TaskState.IN_PROGRESS));
    const todo = this.sortByTicket(tasks.filter(t => t.state === TaskState.TODO));
    const lines: string[] = [];
    if (done.length > 0) {
      lines.push(`\n✅ Terminé (${done.length}) :`);
      done.forEach(t => lines.push(`  • ${t.ticketNumber ? `[${t.ticketNumber}] ` : ''}${t.description}`));
    }
    if (inProgress.length > 0) {
      lines.push(`\n🔄 En cours (${inProgress.length}) :`);
      inProgress.forEach(t => lines.push(`  • ${t.ticketNumber ? `[${t.ticketNumber}] ` : ''}${t.description}`));
    }
    if (todo.length > 0) {
      lines.push(`\n📌 Non démarré (${todo.length}) :`);
      todo.forEach(t => lines.push(`  • ${t.ticketNumber ? `[${t.ticketNumber}] ` : ''}${t.description}`));
    }
    if (tasks.length === 0) lines.push('Aucune tâche enregistrée pour la journée précédente.');
    return lines.join('\n');
  }
}
