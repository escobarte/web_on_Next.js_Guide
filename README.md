# To run this site do:
```
cd web/
pnpm dev
```
Last udpate: 4/06/2026 1:17PM



## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form |
| Fonts | `Barlow Condensed` (700) for headings + `DM Sans` (400/500) for body — via `next/font/google` |
| Theme | **Dark industrial** — `#111111` background, `#C79A1B` mustard accent, no light mode |

---



## Project structure

- `SKILL.md` — full build instructions for Claude Code
- `website-spec.md` — design decisions and architecture notes
- `website_roadmap.html` — visual roadmap reference
- `/web` — Next.js project lives here
```

---

# Prerequisition Tools:
Лучший путь — сначала поднять чистый каркас самому, потом отдать Claude Code точечную работу

1. Установленный Cursor + Claude Code подключенный
2. Терминал уже в WSL
3. Проект привязан к Git, я смогу контролировать

----


### Install nvm и Node.js LTS
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# Перезапусти терминал
nvm install --lts
npm install -g pnpm
pnpm setup
```

###  Init Next.js 14
! Important: Create clean dirrectory for project
```
mkdir web
cd web 
pnpm create next-app@14.2 --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" .
```

### Framer Motion + Prettier
Install libraries
``` 
pnpm add framer-motion lucide-react clsx tailwind-merge
pnpm add -D prettier prettier-plugin-tailwindcss
```
Config Prettier
vi .prettierrc
```
{
  "semi": false,
  "singleQuote": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```
### Creating Folder structure
mkdir -p src/components/ui src/components/layout src/lib src/hooks src/types

### Utils for classes

vi src/lib/utils.ts
```
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

# This is only for me
## This code will be added into Claude Code to activate this projec

" Read SKILL.md and build the complete website into the /web directory "
