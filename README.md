# Maladive Website

Next.js website for Maladive watersports — optimized for [Vercel](https://vercel.com) deployment.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS**
- **Prisma** + **PostgreSQL** (Vercel Postgres, Neon, or Supabase)

## Local development

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

Set `DATABASE_URL` to your Postgres connection string and `AUTH_SECRET` to a long random string.

3. Push schema and seed:

```bash
npx prisma db push
npm run db:seed
```

4. Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Admin: [http://localhost:3000/login](http://localhost:3000/login)

**Default admin** (after seed): username `admin`, password `password`

## Deploy to Vercel

1. Import this repo in Vercel.
2. Add environment variables:
   - `DATABASE_URL` — from [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) or [Neon](https://neon.tech)
   - `AUTH_SECRET` — random string (`openssl rand -base64 32`)
3. Deploy, then apply schema and seed (Vercel CLI or local with production `DATABASE_URL`):

```bash
npx prisma db push
npm run db:seed
```

## Admin CMS

| URL | Purpose |
|-----|---------|
| `/login` | Admin sign-in |
| `/admin` | Dashboard |
| `/admin/enquiries` | Enquiry submissions |
| `/admin/contacts` | Contact messages |
| `/admin/partner-resorts` | Resort listings |
| `/admin/settings` | Site content |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run db:push` | Apply schema |
| `npm run db:seed` | Seed admin + sample data |
