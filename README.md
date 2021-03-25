## Todo App

Günlük, haftalık planlar yapıp bunları takip etme aşamasında kimi sadece kağıt ve kalem kullanırken kimi de sıklıkla tercih edilen todo list uygulamaları kullanır. React ile basit bir todo list uygulaması yapalım.

<p align="center">
  <img src="todo-app.gif" alt="Todo List App"/>
</p>

### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

Bu basit to-do uygulamasında input'tan aldığımız ifade todo list'e ekleniyor. TodoList component'i "todos" prop'uyla aldığı array'i listeliyor. Her bir liste elemanını TodoIteme component'i temsil ediyor.
