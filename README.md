# Испытательный полигон для экспериментов с SCSS

Испытательный полигон для работы с препроцессором SCSS.



## Как начать:

### 1. Установить [Git](http://git-scm.com/), [Node.js](http://nodejs.org/) и [Grunt](http://gruntjs.com/)

Git после первого занятия на продвинутом интенсиве у Вас уже установлен, а без Node.js и Grunt (или Gulp) сложно представить себе технологический процесс создания современного фронтэнда.



### 2. Открыть консоль и перейти в папку, отведенную для Ваших проектов

Запустить консоль и набрать команду перехода к папке, в которой хранятся все проекты. К примеру: `cd my_projects\github\`

Для пользователей Windows, не сталкивавшихся ранее с консолью, лучше всего скачать и установить [cmder](http://bliker.github.io/cmder/) (эмулятор консоли).

Пользователям Windows: для перехода на другой диск нужно сначала набрать букву диска (например: `D:`) и нажать <kbd>Enter</kbd>. Потом выполнить команду `cd` для перехода в нужную папку. В cmder достаточно набрать пару первых символов имени папки и нажать <kbd>Tab</kbd>, чтобы получить полное имя папки.



### 3. Клонировать этот репозиторий

Ввести (скопировать-вставить) в консоли  команду `git clone https://github.com/up-htmlacademy/test_area_SCSS.git my_SCSS_test_area`. Последняя часть этой команды — имя папки, куда будет клонирован этот репозиторий. Этой папки ещё нет, она будет создана.



### 4. Установить плагины Grunt

Ввести (скопировать-вставить) в консоли  команду `npm i`, дождаться окончания загрузки и установки компонентов. В папке с проектом появится папка 'node_modules', в которую скачались все нужные плагины.



### 5. Запустить Grunt

Чтобы компиляция CSS происходила при любой модификации SCSS-файлов, нужно запустить слежение за имеющимися файлами. Ввести (скопировать-вставить) в консоли  команду `grunt`.

После запуска этой команды, Grunt начнет следить за изменениями в SCSS-файлах проекта и при любом сохранении перекомпилирует CSS-файл или сообщит об ошибке.

Чтобы остановить слежение, нужно нажать <kbd>Ctrl</kbd>+<kbd>C</kbd>

Если Вы добавляете файлы препроцессора, не перезапуская слежения, изменения в этих файлах не будут вызывать компиляцию CSS.



## Как убедиться, что всё работает

Запустите слежение за файлами командой `grunt`.

Откройте в браузере `index.html` , измените что-либо в LESS-файлах (поменяйте значение переменной с размером шрифта) и взгляните на открытый html-файл — должна произойти автоперезагрузка страницы с новыми стилями.

Важно: если Вы сначала открыли HTML-файл и только потом запустили слежение, для работы автообновления страницы нужно один раз перезагрузить её вручную.