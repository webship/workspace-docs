/**
 * The Docs workspace for Webship Workspace: the `docs/` folder as a plugin.
 *
 * What the package carries is placed by the installer from the manifest (the folder's settings file,
 * its commands, its docs and its AI items, each in the folder of its kind) and listed by --activate; the dashboard draws the workspace from the
 * settings file like any other. Nothing to register at run time yet: this is where the folder's own
 * rail buttons, row menus or assistant context would go.
 */

import type { PluginApi } from '@webship.co/workspace-plugin-api';

export const WORKSPACE_KEY = 'docs';

/** The AI items the installer places, each in the workspace folder of its kind (ai/ in this package). */
export const AGENTS = ['docs-writer'];
export const SKILLS = ['docs-workflow'];
export const AI_COMMANDS = ['docs-write'];
export const PROMPTS = ['docs-write-a-document'];

export function register(api: PluginApi): void {
  api.addAssistantContext(() => `The docs/ workspace is the Docs workspace (a plugin, @webship.co/workspace-docs); its commands are the cmd-*.sh scripts in that folder. It comes with AI items for work in this folder: the agent \`docs-writer\` (ai-agents/), the skill \`docs-workflow\` (ai-skills/), the command \`/docs-write\` (ai-commands/) and the prompt \`docs-write-a-document\` (ai-prompts/).`);
}
