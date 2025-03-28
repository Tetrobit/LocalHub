# Политика безопасности

## Поддерживаемые версии

| Версия | Поддерживается |
| ------ | -------------- |
| 0.1.x  | ✅             |
| 0.0.x  | ❌             |

## Сообщение об уязвимости

Если вы обнаружили уязвимость в безопасности, пожалуйста, следуйте этим шагам:

1. **НЕ** создавайте публичный Issue
2. Отправьте описание уязвимости на email: security@example.com
3. Включите следующую информацию:
   - Тип уязвимости
   - Полное описание проблемы
   - Шаги для воспроизведения
   - Возможные последствия
   - Предлагаемое решение (если есть)

## Процесс обработки

1. Подтверждение получения отчета в течение 24 часов
2. Оценка серьезности проблемы
3. Разработка и тестирование исправления
4. Выпуск обновления безопасности

## Политика раскрытия информации

- Информация об уязвимости публикуется после выпуска исправления
- Автор получает credit в changelog
- Критические уязвимости обрабатываются в приоритетном порядке

## Безопасность приложения

### Хранение данных
- Все чувствительные данные шифруются
- Пароли хешируются с использованием bcrypt
- API ключи хранятся в защищенном хранилище

### Аутентификация
- Двухфакторная аутентификация
- Ограничение попыток входа
- Автоматический выход при бездействии

### API безопасность
- HTTPS для всех запросов
- Rate limiting
- Валидация входных данных
- CORS политика

### Обновления
- Регулярные проверки зависимостей
- Автоматическое обновление критических патчей
- Уведомления о новых версиях безопасности

## Лучшие практики

### Для разработчиков
- Следуйте OWASP Top 10
- Используйте статический анализ кода
- Проводите код-ревью
- Регулярно обновляйте зависимости

### Для пользователей
- Используйте сильные пароли
- Включите 2FA
- Регулярно обновляйте приложение
- Не передавайте учетные данные третьим лицам 