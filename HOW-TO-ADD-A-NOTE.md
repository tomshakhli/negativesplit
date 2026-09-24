# How to add a note

1. Create a new file in the `_notes/` folder. The file name becomes the web address, so
   `_notes/easy-pace-running.md` is published at `/post/easy-pace-running`.
   Use lowercase words separated by hyphens.

2. Start the file with this block, then write underneath it in plain text:

```
---
title: Why your easy runs should feel embarrassingly easy
description: One or two sentences. This shows under the title, in the Notes list and in Google results. Aim for under 160 characters.
topic: Training
order: 11
---

Your first paragraph starts here. Leave a blank line between paragraphs.

## A subheading

More writing.
```

- `topic`: one word shown beside the title. Current ones: Training, Racing, Technique, Kit, Injury, Reference.
- `order`: position in the Notes list. Lower numbers appear first.

## Formatting

- Paragraphs: leave a blank line between them.
- Subheading: start the line with `## `
- Italics: `*like this*`
- Link to another note: `[the text](/post/a-glossary-of-running)`
- Bullet list: start each line with `- `
- Pull quote: start the line with `> `

## Images

Put the image in `assets/images/notes/`, then add this line where you want it:

```
{% include note-figure.html src="/assets/images/notes/your-image.jpg" caption="Your caption" alt="A plain description of the image" %}
```

The image only appears once the file exists, so you can write the line first and upload the image later.

## Publishing

Commit and push. The note appears in the Notes list, gets its own page and is added to the sitemap automatically.
