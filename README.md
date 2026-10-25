# Palash Bharati — Portfolio

A lightweight, recruiter-focused portfolio built with semantic HTML, modern CSS,
and vanilla JavaScript. It has no build step or runtime dependencies.

## Run locally

From this directory:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Update the resume

Edit `portfolio.config.js` and replace `resume.driveFileId` with the ID from the
new Google Drive URL:

```text
https://drive.google.com/file/d/DRIVE_FILE_ID/view
```

The preview, direct Drive link, and download button are generated from that one
value. Ensure the Drive file is shared as **Anyone with the link — Viewer**.

## Deploy

The directory can be deployed as-is to GitHub Pages, Netlify, Cloudflare Pages,
or any static hosting provider.

## Content note

Public project stacks are based on their current GitHub repositories:

- LinkedIn Profile Analyzer: LangChain, Llama 3.2, Tavily, Streamlit
- News Check AI: FastAPI, Perplexity Sonar, Pydantic, Twilio
- F1 PitStop: Node.js, Express, EJS
