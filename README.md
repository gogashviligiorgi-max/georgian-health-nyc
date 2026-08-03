# Georgian Health Support — Website

Static landing page (plain HTML/CSS, no build step). Same deployment pattern as npmc.ge.

## Local preview

```
python -m http.server 8123
```

Then open http://127.0.0.1:8123/index.html

## Deploy

Push to `main` on GitHub → Cloudflare Pages auto-deploys.

- **GitHub repo:** gogashviligiorgi-max/georgian-health-nyc
- **Cloudflare Pages project:** to be connected (Workers & Pages → Create → Pages → Connect to Git)
- **Custom domain:** not yet purchased — site is reachable at the `*.pages.dev` URL until then
