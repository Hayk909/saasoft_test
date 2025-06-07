# 💼 Accounts Manager

Удобное веб-приложение для управления учетными записями с использованием Vue 3, Naive UI, vee-validate и SCSS.

## 🧰 Используемые технологии

- ⚙️ Vue 3
- 💅 Naive UI
- ✅ vee-validate + yup
- 📦 Pinia
- 🎨 SCSS (Sass)
- 🧠 TypeScript

---

## 📁 Структура проекта

```
src/
├── app/
│   ├── components/          # Переиспользуемые компоненты
│   │   └── Accounts/        # Компоненты страницы "Учетные записи"
│   ├── features/            # Логика и хуки
│   │   └── Accounts/
│   ├── store/               # Pinia хранилища
│   ├── locales/                # Локализация (ru/en)
│   └── styles/              # Общие стили SCSS
├── views/                   # Страницы
├── shared/                  # Обобщенный код - который можно взять и использовать в другом проекте
└── main.ts                  # Точка входа
```

---

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
yarn install
# или
npm install
```

### 2. Запуск проекта в режиме разработки

```bash
yarn dev
# или
npm run dev
```

### 3. Сборка проекта для продакшена

```bash
yarn build
# или
npm run build
```

---

## 🌍 Локализация

Поддержка языков реализована через `vue-i18n`.
Файлы переводов находятся в `src/app/locales/ru.json` и `en.json`.

---

## 🌐 Page Structure

| URL     | Description       |
| ------- | ----------------- |
| `/`     | Home Page         |
| `/accounts` | Accounts      |

---

### 💡 Developer

👨‍💻 **[Hayk Ohanyan]**
📧 Email: [hayk_ohanyan2000@mail.ru](mailto:hayk_ohanyan2000@mail.ru)\
🌍 GitHub: [Hayk909](https://github.com/Hayk909)

---

✨ *Built with love and Vue!*
