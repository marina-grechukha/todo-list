#ToDo List

##Сущности:
- пользователь (user)
- проект
- задача
---

1. Регистрация пользователя
2. Аутентификация пользователя
3. Проект (CRUD)
    - Создание (Create) проекта у пользователя
    - Список (Read) проектов пользователя
    - Редактирование (Edit)
    - Удаление (Delete)
4. Задача (CRUD) 
    - Создание задачи к проекту
    - Список зачач у проекта
    - Редактирование
    - Удаление
    - Отметить задачу выполненной
    
---
###User
- ID: number
- Email: string
- Password: string

---
###Project
- ID: number
- userId: number
- name: string

---
###Task
- ID: number
- projectId: number
- name: string
- state: boolean (default false)

---

###Technologies
- [x] JS + Vue JS
- [x] Tailwind CSS
- [ ] Firebase
