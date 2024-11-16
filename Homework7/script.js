  // Получить элементы из DOM
  const nameInput = document.getElementById('nameInput');
  const saveButton = document.getElementById('saveButton');
  const savedNameDiv = document.getElementById('savedName');

  // Функция для загрузки сохранённого имени из LocalStorage
  function loadName() {
      const savedName = localStorage.getItem('userName');
      if (savedName) {
          savedNameDiv.textContent = `Сохранённое имя: ${savedName}`;
      }
  }

  //  обработчик события для кнопки
  saveButton.addEventListener('click', () => {
      const userName = nameInput.value;
      if (userName) {
          localStorage.setItem('userName', userName);
          savedNameDiv.textContent = `Сохранённое имя: ${userName}`;
          nameInput.value = ''; // Очистить поле ввода
      }})