# @webship.co/workspace-docs

The **Docs** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `docs/` folder (type `files`), its settings file (`core/config/workspace.docs.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-docs
bash core/scripts/plugins.sh --activate docs --with-needs     # puts `docs` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install docs      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## What it needs

The AI items land in the four AI folders, so the manifest needs them (`needs`): `ai-agents`, `ai-skills`, `ai-commands`, `ai-prompts`. `--activate docs` and `--install docs` stop while one is missing and name it; with `--with-needs` they are required, activated and installed first.

## The AI items

The plugin carries its own AI items (`ai/` in the package, the manifest's `ai` block), written for the work this folder is for. `--install` places each one in the workspace folder of its kind, when that folder is an active workspace folder; `--uninstall` removes them, and keeps one that was edited in its folder.

| Item | Kind | Lands in | What it is for |
| --- | --- | --- | --- |
| `docs-writer` | Agent | `ai-agents/docs-writer.md` | Writes and edits the markdown documents of `docs/` in place, checks what they say against the thing itself, backs one up before a rewrite |
| `docs-workflow` | Skill | `ai-skills/docs-workflow/` | How work is done in `docs/`: what a document is, find, back up, check, edit in place; the two commands, the settings keys |
| `/docs-write` | Command | `ai-commands/docs-write.md` | `/docs-write <name> [what it should say]`: finds or starts the document, checks before writing, edits the file in place and says what changed |
| `docs-write-a-document` | Prompt | `ai-prompts/docs-write-a-document.md` | A new session that writes a reference document, checked against what it describes |

From its folder an item is installed into the AI CLI (Claude Code by default) like any other: the folder's page on the dashboard, or `bash cmd-tools-ai-items.sh <name> --install` in the AI folder (`--to dev/<project>` for one project). A prompt is not installed: the New screen form lists it as the start of a new session. The body of every item is plain Markdown any AI CLI can follow; Claude Code is the default shape (the frontmatter, the launch line of a prompt). Every command, flag, settings key and path an item names is checked by `tests/items.test.ts`; the shape of the items is the one of the reference, [`docs/plugin-items-pattern.md` of the WordPress plugin](https://github.com/webship/workspace-wordpress/blob/1.0.x/docs/plugin-items-pattern.md).

## The commands

| Command |
| --- |
| `cmd-tool-backup-doc.sh` |
| `cmd-tool-git-change-filemode-to-false.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
