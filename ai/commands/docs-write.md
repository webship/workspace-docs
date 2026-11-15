---
description: Write or change a markdown document in place in the docs/ folder of the Webship Workspace: read it, check what it says against the thing itself, edit the file where it is, and say what changed.
argument-hint: '<name> [what it should say or what changed]'
---

# /docs-write

Write or change the document of `~/workspace/docs` named in: `$ARGUMENTS`

The arguments are the text typed after the command: the first word is the document (its file name
in `docs/`, with or without `.md`), and what follows says what it should say, or what changed.
With no name, stop and ask for one: `ls ~/workspace/docs/*.md` lists the documents. The workspace
is container-based (DDEV by default): say so where the document describes it.

## 1. Find it

```bash
cd ~/workspace/docs
ls <name>.md 2>/dev/null
```

If the file is there, this is a change: read all of it first. If it is not, this is a new
document: look for one on the same subject before writing a second (`grep -il "<subject>" *.md`).

## 2. Back it up, when it exists

```bash
bash cmd-tool-backup-doc.sh <name>
```

## 3. Check before writing

Every command, flag and path the document will name is checked against the thing itself: run the
command with `--help`, open the file. Write nothing from memory.

## 4. Write in place

Edit `~/workspace/docs/<name>.md`. Keep the headings and the voice of a document that exists; a
new one opens with a heading that says what it is, then one paragraph on what it is for. No
password, no token, no personal path; addresses are example addresses.

## 5. Report

The file, what changed section by section, what was checked and how, and what could not be
checked. For a longer piece of work, hand over to the `docs-writer` agent; the `docs-workflow`
skill says how documents are kept in this folder.
