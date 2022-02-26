# AppDropZone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

Esta aplicación se sirve de los endpoints expuestos en dropzoneBackEnd, que tambien esta desplegada en Heroku. Los usuarios son almacenados en una base de datos en MongoDB Atlas.
Para el drop zone he usado una libreria de npm (NgxDropZone). 
Por otro lado he creado los siguientes modulos:

## Auth
Tiene los componentes login y register y su modulo de rutas

## Components 
Contiene el componente error-card, que es usado en login, register y drop-zone

## Pages
Contiene el componente dashboard y el pages, la ruta al dashboard se protege con un guards (auth) 

## shared
Contiene los componentes box-drop y box-zone
### box-drop
Este componente se encarga de recibir los archivos y subirlos mediante los componentes de NgxDropZone
### box-zone
Este componente saluda al usuario logeado y contiene un boton de logout.





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
