class Note {
    constructor(content) {
        if (!content || content.trim() === '') {
            throw new Error('Нотатка не може бути порожньою.');
        }
        this.content = content; 
        this.completed = false; 
    }

    
    markAsCompleted() {
        this.completed = true;
    }

    getInfo() {
        return {
            content: this.content,
            completed: this.completed
        };
    }
}

class TodoList {
    constructor() {
        this.notes = []; 
    }


    addNote(content) {
        const newNote = new Note(content);
        this.notes.push(newNote);
        console.log(`Нотатку "${content}" успішно додано.`);
    }

  
    removeNote(index) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        const removedNote = this.notes.splice(index, 1)[0];
        console.log(`Нотатку "${removedNote.content}" успішно видалено.`);
    }


    editNote(index, newContent) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        if (!newContent || newContent.trim() === '') {
            console.log('Нотатка не може бути порожньою.');
            return;
        }
        this.notes[index].content = newContent;
        console.log(`Нотатку успішно відредаговано на "${newContent}".`);
    }


    getAllNotes() {
        return this.notes.map((note, index) => ({
            index: index,
            content: note.content,
            completed: note.completed
        }));
    }


    getTotalNotes() {
        return this.notes.length;
    }

   
    getRemainingNotes() {
        return this.notes.filter(note => !note.completed).length;
    }

   
    getNoteInfo(index) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        return this.notes[index].getInfo();
    }

   
    completeNote(index) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        this.notes[index].markAsCompleted();
        console.log(`Нотатку "${this.notes[index].content}" успішно позначено як виконану.`);
    }
}


const todoList = new TodoList();

try {
    todoList.addNote('Перше завдання'); 
    todoList.addNote('Друге завдання');
    todoList.addNote('Третє завдання');

    console.log('Всі нотатки:', todoList.getAllNotes()); 
    console.log('Загальна кількість нотаток:', todoList.getTotalNotes()); 
    console.log('Кількість невиконаних нотаток:', todoList.getRemainingNotes()); 

    todoList.completeNote(1); 
    console.log('Кількість невиконаних нотаток після виконання:', todoList.getRemainingNotes());

    console.log('Інформація про другу нотатку:', todoList.getNoteInfo(1)); 

    todoList.editNote(1, 'Редаговане друге завдання'); 
    console.log('Всі нотатки після редагування:', todoList.getAllNotes());

    todoList.removeNote(0); 
    console.log('Всі нотатки після видалення:', todoList.getAllNotes());

} catch (error) {
    console.error(error.message);
}





















class Note {
    constructor(content) {
        if (!content || content.trim() === '') {
            throw new Error('Нотатка не може бути порожньою.');
        }
        this.content = content; 
        this.completed = false; 
    }

    
    markAsCompleted() {
        this.completed = true;
    }

    
    getInfo() {
        return {
            content: this.content,
            completed: this.completed
        };
    }
}

class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(content) {
        const newNote = new Note(content);
        this.notes.push(newNote);
        console.log(`Нотатку "${content}" успішно додано.`);
    }

    
    removeNote(index) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        const removedNote = this.notes.splice(index, 1)[0];
        console.log(`Нотатку "${removedNote.content}" успішно видалено.`);
    }

   
    editNote(index, newContent) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        if (!newContent || newContent.trim() === '') {
            console.log('Нотатка не може бути порожньою.');
            return;
        }
        this.notes[index].content = newContent;
        console.log(`Нотатку успішно відредаговано на "${newContent}".`);
    }


    getAllNotes() {
        return this.notes.map((note, index) => ({
            index: index,
            content: note.content,
            completed: note.completed
        }));
    }

    getTotalNotes() {
        return this.notes.length;
    }

    
    getRemainingNotes() {
        return this.notes.filter(note => !note.completed).length;
    }

   
    getNoteInfo(index) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        return this.notes[index].getInfo();
    }

    completeNote(index) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        this.notes[index].markAsCompleted();
        console.log(`Нотатку "${this.notes[index].content}" успішно позначено як виконану.`);
    }


    searchNoteByContent(searchTerm) {
        const results = this.notes.filter(note => note.content.toLowerCase().includes(searchTerm.toLowerCase()));
        if (results.length === 0) {
            console.log(`Нотаток не знайдено за запитом "${searchTerm}".`);
        } else {
            console.log(`Результати пошуку для "${searchTerm}":`, results.map(note => note.getInfo()));
        }
        return results;
    }

    
    sortNotesByStatus() {
        this.notes.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
        console.log('Нотатки успішно відсортовані за статусом (виконані спочатку).');
    }
}

// Приклад використання
consttodoList = new TodoList();

try {
    todoList.addNote('Перше завдання'); 
    todoList.addNote('Друге завдання');
    todoList.addNote('Третє завдання');
    todoList.addNote('Завдання на завтра');

    console.log('Всі нотатки:', todoList.getAllNotes()); 
    console.log('Загальна кількість нотаток:', todoList.getTotalNotes()); 
    console.log('Кількість невиконаних нотаток:', todoList.getRemainingNotes()); 

    todoList.completeNote(1); 
    console.log('Кількість невиконаних нотаток після виконання:', todoList.getRemainingNotes());

    console.log('Інформація про другу нотатку:', todoList.getNoteInfo(1)); 

    todoList.editNote(1, 'Редаговане друге завдання'); 
    console.log('Всі нотатки після редагування:', todoList.getAllNotes());

    todoList.removeNote(0); 
    console.log('Всі нотатки після видалення:', todoList.getAllNotes());

 
    todoList.searchNoteByContent('друге'); 
  
    todoList.sortNotesByStatus(); 
    console.log('Всі нотатки після сортування:', todoList.getAllNotes());

} catch (error) {
    console.error(error.message);
}
























class Note {
    constructor(content) {
        if (!content || content.trim() === '') {
            throw new Error('Нотатка не може бути порожньою.');
        }
        this.content = content; // Вміст нотатки
        this.completed = false; // Статус виконання нотатки
        this.createdAt = new Date(); // Дата створення нотатки
        this.updatedAt = new Date(); // Дата останнього редагування
    }

    // Метод для позначення нотатки як виконаної
    markAsCompleted() {
        this.completed = true;
    }

    // Метод для отримання інформації про нотатку
    getInfo() {
        return {
            content: this.content,
            completed: this.completed,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

    // Метод для редагування нотатки
    editContent(newContent) {
        this.content = newContent;
        this.updatedAt = new Date(); // Оновлюємо дату редагування
    }
}

class TodoList {
    constructor() {
        this.notes = []; // Масив для нотаток
    }

    // Метод для додавання нової нотатки
    addNote(content) {
        const newNote = new Note(content);
        this.notes.push(newNote);
        console.log(`Нотатку "${content}" успішно додано.`);
    }

    // Метод для видалення нотатки
    removeNote(index) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        const removedNote = this.notes.splice(index, 1)[0];
        console.log(`Нотатку "${removedNote.content}" успішно видалено.`);
    }

    // Метод для редагування нотатки
    editNote(index, newContent) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        if (!newContent || newContent.trim() === '') {
            console.log('Нотатка не може бути порожньою.');
            return;
        }
        this.notes[index].editContent(newContent);
        console.log(`Нотатку успішно відредаговано на "${newContent}".`);
    }

    // Метод для отримання списку всіх нотаток
    getAllNotes() {
        return this.notes.map((note, index) => ({
            index: index,
            content: note.content,
            completed: note.completed,
            createdAt: note.createdAt,
            updatedAt: note.updatedAt
        }));
    }

    // Метод для отримання кількості всіх нотаток
    getTotalNotes() {
        return this.notes.length;
    }

    // Метод для отримання кількості невиконаних нотаток
    getRemainingNotes() {
        return this.notes.filter(note => !note.completed).length;
    }

    // Метод для отримання інформації про нотатку
    getNoteInfo(index) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        return this.notes[index].getInfo();
    }

    // Метод для позначення нотатки як виконаної
    completeNote(index) {
        if (index < 0 || index >= this.notes.length) {
            console.log('Неправильний індекс нотатки.');
            return;
        }
        this.notes[index].markAsCompleted();
        console.log(`Нотатку "${this.notes[index].content}" успішно позначено як виконану.`);
    }

    // Метод для пошуку нотатки за вмістом
    searchNoteByContent(searchTerm) {
        const results = this.notes.filter(note => note.content.toLowerCase().includes(searchTerm.toLowerCase()));
        if (results.length === 0) {
            console.log(`Нотаток не знайдено за запитом "${searchTerm}".`);
        } else {
            console.log(`Результати пошуку для "${searchTerm}":`, results.map(note => note.getInfo()));
        }
        return results;
    }

    // Метод для сортування нотаток за статусом
    sortNotesByStatus() {
        this.notes.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
        console.log('Нотатки успішно відсортовані за статусом (виконані спочатку).');
    }

    // Метод для сортування нотаток за датою створення
    sortNotesByDateCreated() {
        this.notes.sort((a, b) => a.createdAt - b.createdAt);
        console.log('Нотатки успішно відсортовані за датою створення.');
    }

    // Метод для пошуку нотаток за датою створення
    searchNoteByDateCreated(date) {
        const results = this.notes.filter(note => note.createdAt.toDateString() === new Date(date).toDateString());
        if (results.length === 0) {
            console.log(`Нотаток не знайдено за датою "${date}".`);
        } else {
            console.log(`Результати пошуку для дати "${date}":`, results.map(note => note.getInfo()));
        }
        return results;
    }
}

// Приклад використання
consttodoList = new TodoList();

try {
    todoList.addNote('Перше завдання'); 
    todoList.addNote('Друге завдання');
    todoList.addNote('Третє завдання');
    todoList.addNote('Завдання на завтра');

    console.log('Всі нотатки:', todoList.getAllNotes());
    console.log('Загальна кількість нотаток:', todoList.getTotalNotes()); 
    console.log('Кількість невиконаних нотаток:', todoList.getRemainingNotes()); 

    todoList.completeNote(1); 
    console.log('Кількість невиконаних нотаток після виконання:', todoList.getRemainingNotes());

    console.log('Інформація про другу нотатку:', todoList.getNoteInfo(1)); 

    todoList.editNote(1, 'Редаговане друге завдання'); 
    console.log('Всі нотатки після редагування:', todoList.getAllNotes());

    todoList.removeNote(0); 
    console.log('Всі нотатки після видалення:', todoList.getAllNotes());

  
    todoList.searchNoteByContent('друге'); 

   
    todoList.sortNotesByStatus(); 
    console.log('Всі нотатки після сортування за статусом:', todoList.getAllNotes());

  
    todoList.sortNotesByDateCreated(); 
    console.log('Всі нотатки після сортування за датою створення:', todoList.getAllNotes());

   
    const today = new Date().toISOString().split('T')[0]; 
    todoList.searchNoteByDateCreated(today); 

} catch (error) {
    console.error(error.message);
}