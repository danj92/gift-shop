pm install --save-dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier eslint-config-prettier


// nadpisanie wszystkich HTML po regulam prittera
npx prettier --write .


// wtyczka dla html
npm install --save-dev prettier prettier-plugin-html

// czyszczenie cache
npm cache clean --force

// nowa wersja npm
npm install -g npm


// jezeli jest problem z pakietami, wtedy instaluje wszystko nawet jak pakiety nei wspólpracuja
npm install --legacy-peer-deps

// automatycznie poprawienie plików
npx eslint --fix .


// zależności jak się nie istaluja
npm install --legacy-peer-deps

// aktualizacja angulara
ng update @angular/core @angular/cli

// odinstalowanie globalnie CLI
npm uninstall -g @angular/cli
