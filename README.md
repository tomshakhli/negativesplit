# Negative Split Running website

The website for Negative Split Running, built as a Jekyll site and hosted free on GitHub Pages with a custom domain. Single-page design with anchor navigation. No blog, no database, no monthly fees.

## Quick edits

The bits you'll most likely want to change are all in `index.html`. Open it in **VS Code** (or any plain text editor) and look for the sections marked with `<section id="...">`. Each one is clearly labelled. To change copy, edit the text between the tags. To swap a testimonial, find the `<blockquote class="quote">` block and edit the words.

⚠️ **Don't edit `.html` files in TextEdit on Mac.** It converts them to Rich Text and silently destroys the file. Use [VS Code](https://code.visualstudio.com/) (free), or edit directly on GitHub.com by clicking the pencil icon when viewing a file.

## File structure

```
.
├── _config.yml          # site title, description, URL
├── _layouts/default.html  # wraps every page in <html><head>...</html>
├── _includes/
│   ├── header.html      # sticky header & section nav
│   └── footer.html      # footer with email link
├── assets/
│   ├── css/style.css    # all styling
│   └── js/main.js       # copy-to-clipboard helper
├── index.html           # the main (and only) page
├── CNAME                # tells GitHub Pages the custom domain
├── Gemfile              # Jekyll dependencies
└── README.md            # this file
```

## Deploying via GitHub Desktop

1. **Install GitHub Desktop** from [desktop.github.com](https://desktop.github.com/) if you haven't already.
2. **Create a new repository** on github.com. Call it something like `negativesplitrunning` (the name doesn't matter — the custom domain hides it). Make it **public**, since free GitHub Pages requires public repos.
3. **Clone it locally** in GitHub Desktop (File → Clone repository).
4. **Copy these files into the cloned folder** on your computer.
5. **Commit and push** from GitHub Desktop. Write a commit message like "initial site" and click "Commit to main", then "Push origin".
6. **Enable GitHub Pages** in the repository settings on github.com:
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `(root)`
   - Save
7. **Wait a minute or two**, then visit `https://YOUR-USERNAME.github.io/negativesplitrunning/`. You should see the site (without the custom domain pointed yet, the styling may not load — that's fine, we'll fix it with the custom domain in the next step).

## Pointing your domain at GitHub Pages

You want `negativesplitrunning.co.uk` to serve this site. Here's how.

1. **In GitHub repo settings → Pages**, scroll to "Custom domain". Enter `www.negativesplitrunning.co.uk` and save.
2. **Verify the `CNAME` file** in the root of the repo says `www.negativesplitrunning.co.uk` (it should, that's part of this project).
3. **At your DNS provider** (currently Squarespace — they took over Google Domains in 2023, even if the billing still says Google), add these records:

   | Type | Host | Value |
   |------|------|-------|
   | CNAME | www | YOUR-USERNAME.github.io |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

   The four A records on the apex (`@`) handle people typing `negativesplitrunning.co.uk` without `www`. GitHub redirects them automatically.

4. **Wait for DNS to propagate** (anything from a few minutes to a few hours).
5. **Enable HTTPS** in GitHub Pages settings once the certificate provisioning finishes (a tick box appears after the domain check passes).

If you transfer the domain to Cloudflare later (worth doing — it costs at-cost, around £8-9/year for `.co.uk`), the same records work but you set them in Cloudflare's DNS panel instead.

## Editing tips

- **Hard-refresh after every commit.** `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows). The browser caches CSS aggressively and will fool you into thinking a fix didn't work.
- **Wait 30-60 seconds** after pushing a commit before checking the live site. GitHub Pages takes a moment to rebuild.
- **Editing on github.com works too.** Click any file → pencil icon → make changes → commit. Easier than the local clone for small tweaks.

## Local preview (optional)

If you want to preview changes before pushing them live:

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000`. Requires Ruby and Bundler installed locally. Honestly, for a site this simple, just push and refresh — it's usually faster.

## What's not here that was on the old Wix site

- **Blog / Resources section.** Removed deliberately. Knowledge now lives in the body of the home page.
- **Contact form.** Replaced with a direct mailto link to keep the site fully static (no third-party services, no monthly costs).
- **Google reviews.** Not affected by this migration. They live on your Google Business Profile, which is separate and stays.

## When something breaks

If the site renders without any styling, the most likely cause is `baseurl` in `_config.yml`. For the custom domain setup, it should be `""` (empty). If you're temporarily testing on `username.github.io/repo-name/`, set it to `"/repo-name"`.

If the site doesn't update after a push, check the Actions tab on github.com — failed builds show there with an error message.

If you're really stuck, the [Jekyll docs](https://jekyllrb.com/docs/) and the [GitHub Pages docs](https://docs.github.com/en/pages) are both decent.
