Write a reference document in the docs folder, checked against the thing it describes.

The launch line is for Claude Code, the default; the text between the triple quotes can be given to another AI CLI as it is.

```
claude --permission-mode bypassPermissions """
Write the document <name> in the docs folder, about <subject>
# ~/workspace/docs/<name>.md · a markdown file edited in place · container-based (DDEV by default)
# docs hold what stays true: what happened on a day is a worklog, not a document

1. ls ~/workspace/docs/*.md
   tell me whether a document on <subject> exists already; if one does, change it instead
2. read what the document is about: the commands, the files, the settings
   run each command with --help and open each file before naming it
3. write ~/workspace/docs/<name>.md
   a heading that says what it is, one paragraph on what it is for, then what a reader does, in order
4. read it once more against what you checked
   every command, flag and path in it exists

No password, no token, no personal path; addresses are example addresses.
Report the file, its sections, what you checked and what you could not check.
"""
```
