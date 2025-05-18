cd Documents

sudo chown -R alumnos:staff ~/Documents
sudo chown -R alumnos:staff ~/Documents/(archivo-pc....)
sudo chown alumnos ~/.zshrc
chmod u+rw ~/.zshrc
sudo chown alumnos ~/.angular-config.json




















//Crear proyecto
sudo npx --yes --package @angular/cli@latest ng new (upc2501si729eaucode-lo que pida) --defaults --standalone=true


//Instalar angular material
sudo ng add @angular/material


//Configurar FakeAPI con json-server
sudo npm i -g json-server@0.17.4


//Create server/db.json
{ "atributo":[], etc }

//Create server/routes.json
{ "/api/v1/*": "/$1" }

//Insert in server/start.sh
json-server --watch db.json --routes routes.json

//Insert in server/start.bat
json-server --watch db.json --routes routes.json

//Crear entornos
sudo ng g environments

//Configurar i18n
sudo npm i @ngx-translate/core @ngx-translate/http-loader

//crear carpeta public/assets/i18n

//Para crear carpetas
//Component
ng g c public/components/(Archivo)

//service
ng g s shared/services/(Base)

//model
ng g class learning/model/Course --type=entity

//pages
ng g


1. Crear los de shared
   components/BaseForm
   services/BaseApi

2. Crear los de public
   Components(languageSwitcher y toolbar)
   Pages(Home y pagenotfound)

3. Crear Registration(bounded que no sea de ingresar datos, solo mostrar)
   Model(Event y Attendee)
   Services(EventService y AteendeeService)
   Components(EventSummary y RegisteredEvents)

//Crear un base form para componentes que van a ingresar/editar datos
ng g c shared/components/BaseForm --inline-template --inline-style --flat

4.Crear bounded de crear algo


//copiar app.html
//copiar app.component.ts
//copiar app.config
//copiar app.routes


