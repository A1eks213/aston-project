# BarçaPlayers Application
Приложение, в котором вы можете посмотреть информацию об игроках 'FC Barcelona'

## Функциональность приложения:
1. Авторизация/регистрация пользователя в приложении
2. Панель поиска по именам игроков
2. Добавление/удаление понравившихся игроков с помощью кнопки лайка в избранное
4. Возможность посмотреть историю своих поисковых запросов на вкладке "Иcтория"
5. Просмотр отдельной страницы с информацией об игроке

## Обязательные требования к проекту (Необходимый минимум)

### React

- Функциональные компоненты c хуками в приоритете над классовыми
  [Компоненты](https://github.com/A1eks213/aston-project/tree/main/src/components), [Страницы](https://github.com/A1eks213/aston-project/tree/main/src/pages)
- Есть разделение на умные и глупые компоненты
  Умные компоненты: [Card](https://github.com/A1eks213/aston-project/blob/main/src/components/Card/Card.tsx), [Form](https://github.com/A1eks213/aston-project/blob/main/src/components/Form/Form.tsx).

  Глупые компоненты: [LikeBtn](https://github.com/A1eks213/aston-project/blob/main/src/components/LikeBtn/LikeBtn.tsx), [Loader](https://github.com/A1eks213/aston-project/blob/main/src/components/Loader/Loader.tsx)

- Есть рендеринг списков: [HomePage](https://github.com/A1eks213/aston-project/blob/main/src/pages/HomePage/HomePage.tsx), [FavoritePage](https://github.com/A1eks213/aston-project/blob/main/src/pages/FavoritePage/FavoritePage.tsx)
- Реализована хотя бы одна форма: [Form](https://github.com/A1eks213/aston-project/blob/main/src/components/Form/Form.tsx).
- Есть применение Контекст API:  [ThemeContext](https://github.com/A1eks213/aston-project/blob/main/src/context/ThemeContext.tsx) для смены темы header приложения
- Есть применение предохранителя: использование библиотеки 'react-error-boundary' в компоненте [App](https://github.com/A1eks213/aston-project/blob/main/src/App.tsx)
- Есть хотя бы один кастомный хук: [useDebounce](https://github.com/A1eks213/aston-project/blob/main/src/hooks/useDebounce.ts), [useAuth](https://github.com/A1eks213/aston-project/blob/main/src/hooks/useAuth.ts).
- Хотя бы несколько компонентов используют PropTypes: [HistoryItem](https://github.com/A1eks213/aston-project/blob/main/src/components/HistoryItem/HistoryItem.tsx), [Card](https://github.com/A1eks213/aston-project/blob/main/src/components/Card/Card.tsx). 
- Поиск не должен триггерить много запросов к серверу: использование хука [useDebounce](https://github.com/A1eks213/aston-project/blob/main/src/hooks/useDebounce.ts) в компоненте [SearchBar](https://github.com/A1eks213/aston-project/blob/main/src/components/SearchBar/SearchBar.tsx) для создания [SuggestList](https://github.com/A1eks213/aston-project/blob/main/src/components/SuggestList/SuggestList.tsx)
- Есть применение lazy + Suspense: в компоненте [RoutesComponent](https://github.com/A1eks213/aston-project/blob/main/src/routes/RoutesComponent.tsx).

### Redux

- Используем Modern Redux with Redux Toolkit: [store](https://github.com/A1eks213/aston-project/blob/main/src/redux/store/index.ts).
- Используем слайсы: [userSlice](https://github.com/A1eks213/aston-project/blob/main/src/redux/store/slices/userSlice.ts).
- Есть хотя бы одна кастомная мидлвара: [middleware](https://github.com/A1eks213/aston-project/blob/main/src/redux/middleware/middleware.ts), которая отслеживает вход и выход из аккаунта и выводит данные в консоль.
- Используется RTK Query: с помощью данной технологии построено взаимодействие с [API](https://github.com/A1eks213/aston-project/tree/main/src/redux/RTKQuery)
- Используется Transforming Responses:  [transformGetFavorites](https://github.com/A1eks213/aston-project/blob/main/src/utils/transformGetFavorites.ts) и [transformGetHistory](https://github.com/A1eks213/aston-project/blob/main/src/utils/transformGetHistory.ts)

## Необязательные требования у проекту (Дополнительно)

- Использование TypeScript
- Использование Firebase: для авторизации (создание и хранение данных пользователя), а так же хранение информации об 'истории' и 'избранном'

