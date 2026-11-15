---
name: docs-workflow
description: How work is done in the `docs/` folder of the Webship Workspace — what a document is there (a markdown file edited in place, with what was generated from it beside it), how one is written, changed and checked against what it describes, how it is backed up, the two commands of the folder and its settings keys. Use when asked to "write a doc", "update this document", "where do the docs live", "back up a doc", or when a file of `docs/` is about to be changed.
argument-hint: '[what you are about to do in docs]'
---

# docs-workflow

`~/workspace/docs` is the Docs folder of a Webship Workspace (container-based, DDEV by default).
Docs are markdown documents, edited in place: reference material that stays true, each with whatever was generated from it (a PDF, an HTML render, a screenshot) beside the source. It comes with the Docs plugin (`@webship.co/workspace-docs`), which places the commands below in the folder. Every command finds the workspace from its own path; run it from the folder, and read `bash <command> --help` before quoting a flag.

## The order of work

1. **Find** the document: `ls ~/workspace/docs/*.md`. One subject, one document: change the one
   that exists before writing a new one.
2. **Back it up** before a rewrite: `bash cmd-tool-backup-doc.sh my-document`.
3. **Check** every command, flag and path the document names against the thing itself.
4. **Edit in place**: `~/workspace/docs/my-document.md`. What was generated from it (a PDF, an
   HTML render) is generated again from the folder's page, not edited by hand.
5. **Say what changed**, and what could not be checked.

## Commands

| Command | What it does | Flags |
| --- | --- | --- |
| `cmd-tool-backup-doc.sh` | An item as an archive, into `backups/docs/` | none |
| `cmd-tool-git-change-filemode-to-false.sh` | Sets `core.fileMode` to false in one documentation project (a folder with a git checkout): `<project>` | none |

## Settings

| Key | File | What it says |
| --- | --- | --- |
| `doc.name` | `core/config/workspace.docs.settings.yml` | The folder under the workspace root: `docs` |
| `type` | `core/config/workspace.docs.settings.yml` | `files`: the page is a list of documents, edited in place |
| `assistant.name`, `assistant.placeholder` | `core/config/workspace.docs.settings.yml` | What the assistant is called on this page; `default` takes the workspace's |
| `workspaces` | `core/config/settings.yml` | The active folders; `docs` is on it once the plugin is activated |

## Rules

- **Edit in place.** A document is one markdown file in the folder; change that file, do not write
  a second copy beside it, and do not move it into a project.
- **Docs hold what stays true.** What happened on a day is a worklog, not a document: it belongs
  in the Worklogs folder.
- **Back up before a rewrite**: `bash cmd-tool-backup-doc.sh <name>`.
- **Nothing private in a document**: no password, no token, no personal path; an address is an
  example address.
- The workspace is container-based (DDEV by default): say so when a document describes it.

The Docs plugin places these beside this one, each in the workspace folder of its kind: the agent `docs-writer` (`ai-agents/`), the command `/docs-write` (`ai-commands/`) and the prompt `docs-write-a-document` (`ai-prompts/`).
