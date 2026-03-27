Смотришь на структуру — всё просто. Контент находится в конкретных файлах, вот где что менять:

Тексты на страницах
src/app/page.tsx                    ← Home
src/app/about/AboutContent.tsx      ← About
src/app/services/ServicesContent.tsx ← Services
src/app/contact/ContactContent.tsx  ← Contact
src/app/blog/BlogContent.tsx        ← Blog
Открываешь файл, находишь нужный текст, меняешь прямо в коде. Это просто строки внутри JSX:
tsx// было
<h1>Built for the road. Trusted by shippers.</h1>

// стало
<h1>Твой новый заголовок</h1>
```

---

**Картинки**
```
web/public/images/hero-truck.jpg
web/public/images/fleet.jpg
```

Просто заменяешь файлы с теми же именами — сайт подхватит автоматически. Или добавляешь новые файлы в эту папку и меняешь путь в коде.

---

**Navbar и Footer** (ссылки, название компании, контакты)
```
src/components/layout/Navbar.tsx
src/components/layout/Footer.tsx