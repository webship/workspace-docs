# @webship/workspace-docs

The **Docs** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `docs/` folder (type `files`), its settings file (`core/config/workspace.docs.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-docs
bash core/scripts/plugins.sh --activate docs     # puts `docs` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install docs      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## The commands

| Command |
| --- |
| `cmd-tool-backup-doc.sh` |
| `cmd-tool-git-change-filemode-to-false.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
