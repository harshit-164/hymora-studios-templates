# Hymora Studios — Templates

10 ready-to-deploy **Next.js 14** website templates for Chennai businesses, built by **Hymora Studios**.
Each folder is an independent Next.js app you can deploy separately (e.g. to Vercel).

## Apps (deploy one by one)
1. `medical-clinic/` — Multi-speciality clinic
2. `real-estate/` — Builders & developers
3. `interior-design/` — Interior design studio
4. `logistics/` — Logistics & transport
5. `manufacturing/` — Manufacturing company
6. `export/` — Export company
7. `law-firm/` — Law firm
8. `coaching/` — Coaching institute
9. `premium-salon/` — Premium salon
10. `wedding-venue/` — Wedding venue / banquet

## Run locally
```bash
cd <app-folder>
npm install
npm run dev      # http://localhost:3000
```

## Deploy (Vercel) — one app at a time
```bash
cd <app-folder>
vercel
```
Or push the app folder to its own GitHub repo and import into Vercel.
Each app has `vercel.json` (static export) so it builds to `out/`.

## Customize (white-label)
- Edit `app/ClientShell.tsx` → set `SITE.name`, `SITE.whatsapp`, `SITE.email`.
- Replace business name / phone in `app/page.tsx`.
- Swap the Map embed (`q=Chennai`) to the real address.
- Add real images (currently gradient placeholders `.ph`).
- Replace footer "Hymora Studios" only if rebranding.

© Hymora Studios
