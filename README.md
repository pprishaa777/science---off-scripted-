# Science — Off-Script.

A clean, responsive, GitHub Pages-ready website based on the supplied screenshots.

## The important file: `content.js`

For day-to-day news updates, **you normally only need to edit `content.js`**.

You can change:

- headlines
- dates / issue numbers
- descriptions
- author names and roles
- button labels
- every link
- navigation labels and links
- featured story
- conversation cards
- article text
- image filenames

### Change a photo
1. Put the new image in `assets/`.
2. In `content.js`, change the relevant `image: 'assets/your-photo.jpg'` value.
3. Commit/push to GitHub.

### Add a new story
Copy one object inside `SITE.conversations` and change its fields. Then add a matching article object inside `ARTICLES` if you want the story to have its own article page.

### Change links
Every link is a normal URL string, for example:

```js
{ label: 'Read the Interview ↗', href: 'article.html?id=conversation-002' }
```

You can replace it with an external URL such as `https://example.com`.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and the `assets` folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.

GitHub will give you a public website address after deployment.

## Design files

- `index.html` — homepage structure
- `article.html` — reusable article page
- `content.js` — **all editable content**
- `script.js` — renders the content into the layout
- `styles.css` — visual design / responsive layout
- `assets/` — supplied images

If you want to make a visual design change rather than a news/content change, edit `styles.css`.
