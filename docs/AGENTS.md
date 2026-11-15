# Docs

Documentation projects, and what is generated from them — PDFs, HTML, screenshots.

Part of the **Webship Workspace** (`~/workspace`), a container-based harness (DDEV by default). The rules in the root
`CLAUDE.md` apply here too; what follows is what is specific to this folder.

## What an item is here

A markdown document, plus whatever has been generated FROM it — a PDF, an HTML render, a
screenshot. The generated files sit beside the source and are listed as artifacts.

## Commands here

```bash
bash cmd-tool-backup-doc.sh                           # Bootstrap.
bash cmd-tool-git-change-filemode-to-false.sh         # Bootstrap.
```

Every one locates the workspace from its own path, so there is nothing to export and nothing to
install. `--help` on any of them lists its arguments.

## AI items for this folder

The plugin of this folder (`@webship.co/workspace-docs`) places its own AI items in the AI folders of the
workspace, when they are active:

- `docs-writer` (`ai-agents/`): Writes and edits the markdown documents of `docs/` in place, checks what they say against the thing itself, backs one up before a rewrite
- `docs-workflow` (`ai-skills/`): How work is done in `docs/`: what a document is, find, back up, check, edit in place; the two commands, the settings keys
- `/docs-write` (`ai-commands/`): `/docs-write <name> [what it should say]`: finds or starts the document, checks before writing, edits the file in place and says what changed
- `docs-write-a-document` (`ai-prompts/`): A new session that writes a reference document, checked against what it describes
