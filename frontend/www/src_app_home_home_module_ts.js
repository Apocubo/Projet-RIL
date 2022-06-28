"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3934:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_apode_Documents_Projet_RIL_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 90);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 1890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _C_Users_apode_Documents_Projet_RIL_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 6641:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_apode_Documents_Projet_RIL_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 7030);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _C_Users_apode_Documents_Projet_RIL_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 3934);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 6641);
/* harmony import */ var _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inscription/inscription.component */ 9059);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ 3949);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_3__.InscriptionComponent]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_apode_Documents_Projet_RIL_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HomePage = class HomePage {
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _C_Users_apode_Documents_Projet_RIL_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 90:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/footer/footer.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<footer class=\"footer-principal\">\r\n  <div class=\"footer-grid\">\r\n      <div class=\"composant-1\">\r\n      <div class=\"logo-blanc\">\r\n            <a href=\"/home\"><img src=\"../../assets/img/Logo-RE-nouveau-blanc.png\" alt=\"logo-blanc\"></a>\r\n      </div>\r\n      <div class=\"infos-resume\">\r\n          <p>Contact</p>\r\n          \r\n          <p class=\"adresse\">Ministère des Solidarités et de la Santé\r\n          14, avenue Duquesne 75350 PARIS 07 SP\r\n          Téléphone : 01 40 56 60 00\r\n          </p>\r\n      </div>\r\n  </div>\r\n  \r\n      <div class=\"liens-interne\">\r\n          <ul class=\"internal-links\">\r\n              <li><a href=\"\">Plan du site</a></li>\r\n              <li><a href=\"\">Accessibilité : non conforme</a></li>\r\n              <li><a href=\"\">Mentions légales</a></li>\r\n              <li><a href=\"\">Données personnelles et cookies</a></li>\r\n              <li><a href=\"\">Contacts</a></li>\r\n              <li><a href=\"\">Archives presse</a></li>\r\n          </ul>\r\n      </div>\r\n      <div class=\"liens-externe\">\r\n          <ul class=\"external-links\">\r\n              <li><a href=\"\">www.legifrance.gouv.fr</a></li>\r\n              <li><a href=\"\">www.service public.fr</a></li>\r\n              <li><a href=\"\">www.gouvernement.fr</a></li>\r\n              <li><a href=\"\">www.france.fr</a></li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"composant-2\">\r\n      <div class=\"copyrights\">\r\n          <p>Copyright 2022 © (RE)ssources relationelles | Tous droits réservés | <a href=\"#\">Mentions légales</a></p>\r\n      </div>\r\n      <div class=\"signature\">\r\n          <p>Portail web développé par WEB.CO | www.webco.fr | contact@webco.fr</p>\r\n      </div>\r\n  </div>\r\n  \r\n</footer>");

/***/ }),

/***/ 7030:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/header/header.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--Header (menu)-->\r\n<ion-header>\r\n  <header class=\"class-principal\">\r\n    <div class=\"bloc-image\">\r\n        <div class=\"logo-appli\">\r\n            <a href=\"/home\"><img src=\"../../assets/img/logo-RE-nouveau 1.png\" alt=\"logo-application\"></a>\r\n        </div>\r\n        <div class=\"logo-ministere\">\r\n            <a href=\"https://solidarites-sante.gouv.fr/\"><img src=\"../../assets/img/Mask Group.png\" alt=\"logo-application\"></a>\r\n        </div>\r\n    </div>\r\n    <div class=\"action-site\">\r\n      <div class=\"choice-language\">\r\n        <ion-select okText=\"OK\" cancelText=\"Retour\">\r\n          <ion-select-option value=\"Francais\">Francais</ion-select-option>\r\n          <ion-select-option value=\"English\">English</ion-select-option>\r\n          <ion-select-option value=\"Español\">Español</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      \r\n      <!--Search Button-->\r\n      <div class=\"search-button\">\r\n        <ion-icon name=\"search-outline\" class=\"bi\"></ion-icon>\r\n      </div>\r\n      <div class=\"menu-rond\">\r\n          <input class=\"side-menu\" type=\"checkbox\" id=\"side-menu\"/>\r\n          <label class=\"hamb\" for=\"side-menu\"><span class=\"hamb-line\"></span></label>\r\n          <nav class=\"nav\">\r\n              <ul class=\"menu\">\r\n                  <li><a href=\"#\">Accueil</a></li>\r\n                  <li><a href=\"#\">Ministère</a> </li>\r\n                  <li><a href=\"#\">Affaires sociales</a></li>\r\n                  <li><a routerLink=\"/Inscription\">Créer votre espace</a></li>\r\n                  <div class=\"btn-connexion\">\r\n                      <li><a routerLink=\"/Connexion\">Se connecter</a></li>\r\n                  </div>\r\n              </ul>\r\n          </nav>\r\n      </div>\r\n    </div>\r\n    </header>\r\n\r\n  </ion-header>\r\n\r\n  \r\n\r\n\r\n\r\n");

/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content>\r\n  <app-header></app-header>\r\n\r\n  <!--Section Hero avec Titre de l'application-->\r\n  <section class=\"header-title\">\r\n    <h1>RESOURCES RELATIONNELLES</h1>\r\n  </section>\r\n  <div class=\"portail-card\">\r\n    <h2 class=\"card-title\">Portail (RE) SOURCES RELATIONNELLES</h2>\r\n    <p class=\"card-body\">\r\n      Le ministère des Solidarités et de la santé a comme objectif est de mettre en œuvre la politique du <br>gouvernent\r\n      dans le domaine de la solidarité, la cohésion sociale, la santé publique et l’organisation <br>du système de\r\n      santé.\r\n      <br>\r\n      <br>\r\n      Dans le but d’améliorer la qualité de vie des citoyens et pour pouvoir partager des ressources et <br>permettre\r\n      aux citoyens d’échanger, le ministère a crée le portail (RE)Sources Relationnelles, qui est <br>un espace qui\r\n      propose des ressources et outils pour créer, renforcer et enrichir les relations des <br>citoyens.\r\n    </p>\r\n    <div class=\"card-button\">\r\n      <a href=\"\">En savoir plus ▶</a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ministere-card\">\r\n\r\n    <p class=\"ministere-card-body\">\r\n      Le Ministère des Solidarité et de la Santé prend une part très importante dans la politique du <br>Gouvernement en\r\n      matière de solidarité, de cohésion sociale et de la santé publique nationale et <br>également sur l’organisation\r\n      du système national de santé. <a href=\"https://solidarites-sante.gouv.fr/\">Lire plus sur le Ministère des\r\n        Solidarités <br>et de la Santé...</a><br>\r\n      <br>\r\n      La première volonté du ministère est de créer un espace de partage comprenant un ou plusieurs <br>catalogue(s) de\r\n      ressources en lien avec le développement personnel, ainsi qu’un espace d’échange <br>à propos de ces ressources.\r\n      Ces deux parties (catalogues et espaces commentaires) seront <br>soumises à différents niveaux de modération pour\r\n      assurer la cohérence et la bienséance.<br>\r\n      <br>\r\n      Le principal enjeu du portail (RE)Sources Relationnelles est de proposer des ressources et outils<br>pour créer,\r\n      renforcer et enrichir les relations des citoyens.\r\n    </p>\r\n  </div>\r\n\r\n  <!--------------------------------------------------------------------------------->\r\n  <h2 class=\"text-value\">DERNIERES RESSOURCES</h2>\r\n  <ion-item>\r\n    <ion-card class=\"card-resources\">\r\n      <img src=\"../../assets/img/image-header.jpg\">\r\n      <ion-title><a href=\"#\">Lorem ipsum dolor sit amet</a></ion-title>\r\n      <ion-item>Sed ut perspiciatis unde omnis iste natus\r\n        error sit voluptatem accusantium\r\n        doloremque laudantium, totam rem\r\n        aperiam, eaque ipsa quae ab illo inventore\r\n        veritatis et quasi architecto beatae\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-card class=\"card-resources\">\r\n      <img src=\"../../assets/img/image-header.jpg\">\r\n      <ion-title><a href=\"#\">Lorem ipsum dolor sit amet</a></ion-title>\r\n      <ion-item>Sed ut perspiciatis unde omnis iste natus\r\n        error sit voluptatem accusantium\r\n        doloremque laudantium, totam rem\r\n        aperiam, eaque ipsa quae ab illo inventore\r\n        veritatis et quasi architecto beatae\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-card class=\"image-card-resources\">\r\n      <img src=\"../../assets/img/image-header.jpg\">\r\n      <ion-title><a href=\"#\">Lorem ipsum dolor sit amet</a></ion-title>\r\n      <ion-item>Sed ut perspiciatis unde omnis iste natus\r\n        error sit voluptatem accusantium\r\n        doloremque laudantium, totam rem\r\n        aperiam, eaque ipsa quae ab illo inventore\r\n        veritatis et quasi architecto beatae\r\n      </ion-item>\r\n    </ion-card>\r\n  </ion-item>\r\n\r\n <div class=\"final-container\">\r\n  <div class=\"btn-autre-ressources\">\r\n    <a href=\"\">Voir d'autres ressources ▶</a>\r\n  </div>\r\n </div>\r\n\r\n  \r\n  <app-footer></app-footer>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 1890:
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "a {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\n.footer-principal {\n  width: 100%;\n  height: auto;\n  background: #FF5C5C;\n  padding: 13px 169px 6px 163px;\n}\n\n.footer-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.composant-1 {\n  padding: 1px 185px 6px 50px;\n}\n\n.infos-resume p {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-size: 13px;\n  text-align: center;\n  font-weight: 500;\n  color: #FFFFFF;\n  line-height: 17px;\n}\n\n.internal-links {\n  margin-top: 53px;\n}\n\n.external-links {\n  margin-top: 53px;\n}\n\n.internal-links a {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 26px;\n  color: #FFFFFF;\n}\n\n.external-links a {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 26px;\n  color: #FFFFFF;\n}\n\n.copyrights p {\n  font-family: \"Montserrat\";\n  font-weight: 500;\n  font-style: normal;\n  line-height: 21px;\n  text-align: center;\n  font-size: 17px;\n  color: #FFFFFF;\n}\n\n.signature p {\n  font-family: \"Montserrat\";\n  font-weight: 500;\n  font-style: normal;\n  line-height: 21px;\n  text-align: center;\n  font-size: 17px;\n  color: #210E0E;\n}\n\n.composant-2 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLFNBQUE7QUFFSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG51bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXItcHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY1QzVDO1xyXG4gICAgcGFkZGluZzogMTNweCAxNjlweCA2cHggMTYzcHg7XHJcbn1cclxuXHJcbi5mb290ZXItZ3JpZHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIDFmcik7XHJcbn1cclxuXHJcbi5jb21wb3NhbnQtMXtcclxuICAgIHBhZGRpbmc6IDFweCAxODVweCA2cHggNTBweDtcclxufVxyXG5cclxuLmluZm9zLXJlc3VtZSBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjsgXHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxufVxyXG5cclxuLmludGVybmFsLWxpbmtze1xyXG4gICAgbWFyZ2luLXRvcDogNTNweDtcclxufVxyXG5cclxuLmV4dGVybmFsLWxpbmtze1xyXG4gICAgbWFyZ2luLXRvcDogNTNweDtcclxufVxyXG5cclxuLmludGVybmFsLWxpbmtzIGF7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmV4dGVybmFsLWxpbmtzIGF7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHRzIHB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5zaWduYXR1cmUgcHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzIxMEUwRTtcclxufVxyXG5cclxuLmNvbXBvc2FudC0ye1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 530:
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0px;\n  background-color: aqua;\n}\n\nheader {\n  width: 100%;\n  height: 160px;\n  background-color: white;\n  padding: 30px 110px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\n.bloc-image {\n  display: flex;\n}\n\n.action-site {\n  display: flex;\n}\n\n.search-button {\n  width: 38px;\n  height: 38px;\n  left: 1248px;\n  top: 62px;\n  background: #FBBC58;\n  border-radius: 20px;\n  padding: 10px;\n  margin-right: 25px;\n}\n\n.loupe {\n  width: 38px;\n  height: 38px;\n  background: #FBBC58;\n  border-radius: 50%;\n  margin-right: 20px;\n  padding: 6px;\n}\n\n.loupe img {\n  color: white;\n}\n\n.menu-rond {\n  width: 38px;\n  height: 38px;\n  background: #FBBC58;\n  border-radius: 50%;\n}\n\n/* Nav menu */\n\n.nav {\n  margin-top: 90px;\n  margin-left: -1388px;\n  width: 100%;\n  height: 415px;\n  position: fixed;\n  background: #FBBC58;\n  overflow: hidden;\n}\n\n.menu a {\n  display: block;\n  padding: 25px;\n  color: white;\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 22px;\n}\n\n.btn-connexion {\n  width: 255px;\n  height: 58px;\n  background-color: white;\n  border-radius: 30px;\n}\n\n.btn-connexion a {\n  color: #FBBC58;\n  padding: 15px 45px;\n}\n\n.nav {\n  max-height: 0;\n  transition: max-height 0.5s ease-out;\n}\n\n/* Menu Icon */\n\n.hamb {\n  cursor: pointer;\n  float: right;\n  padding: 18px 8px;\n}\n\n/* Style label tag */\n\n.hamb-line {\n  background: white;\n  display: block;\n  height: 2px;\n  position: relative;\n  width: 24px;\n}\n\n/* Style span tag */\n\n.hamb-line::before,\n.hamb-line::after {\n  background: white;\n  content: \"\";\n  display: block;\n  height: 100%;\n  position: absolute;\n  transition: all 0.2s ease-out;\n  width: 100%;\n}\n\n.hamb-line::before {\n  top: 5px;\n}\n\n.hamb-line::after {\n  top: -5px;\n}\n\n.side-menu {\n  display: none;\n}\n\n/* Hide checkbox */\n\n/* Toggle menu icon */\n\n.side-menu:checked ~ nav {\n  max-height: 100%;\n}\n\n.side-menu:checked ~ .hamb .hamb-line {\n  background: transparent;\n}\n\n.side-menu:checked ~ .hamb .hamb-line::before {\n  transform: rotate(-45deg);\n  top: 0;\n}\n\n.side-menu:checked ~ .hamb .hamb-line::after {\n  transform: rotate(45deg);\n  top: 0;\n}\n\n.footer-principal {\n  margin-top: 232px;\n  width: 100%;\n  height: 319px;\n  background: #FF5C5C;\n}\n\nhr {\n  width: 35px;\n  border: 3px solid #FFFFFF;\n}\n\n.composant-1 {\n  display: block;\n}\n\n/*Responsive part*/\n\n@media (max-width: 850px) {\n  header {\n    padding: 10px 15px;\n  }\n\n  .nav {\n    margin-top: 99px;\n    margin-left: -758px;\n  }\n}\n\n@media (max-width: 500px) {\n  header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 100px;\n    padding: 10px 30px;\n  }\n\n  .logo-appli img {\n    width: 204px;\n    height: 82px;\n  }\n\n  .logo-ministere {\n    display: none;\n  }\n\n  .loupe {\n    display: none;\n  }\n\n  .nav {\n    margin-top: 67px;\n    margin-left: -432px;\n  }\n}\n\n@media (max-width: 450px) {\n  .nav {\n    margin-top: 68px;\n    margin-left: -360px;\n  }\n}\n\n@media (max-width: 420px) {\n  .nav {\n    margin-top: 68px;\n    margin-left: -344px;\n  }\n}\n\n@media (max-width: 400px) {\n  .nav {\n    margin-top: 68px;\n    margin-left: -316px;\n  }\n}\n\n@media (max-width: 380px) {\n  .nav {\n    margin-top: 68px;\n    margin-left: -307px;\n  }\n}\n\n.search-outline {\n  text-align: center;\n}\n\n.choice-language {\n  width: 102px;\n  height: 30px;\n  left: 1121px;\n  top: 66px;\n  background: #FBBC58;\n  color: white;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  border-radius: 20px;\n  border: none;\n  margin-right: 25px;\n}\n\n.bi {\n  margin-top: -8px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBLGFBQUE7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxvQ0FBQTtBQUVKOztBQUFBLGNBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBRkMsb0JBQUE7O0FBRUQ7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkUsbUJBQUE7O0FBRUY7O0VBRUksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksUUFBQTtBQUtKOztBQUhBO0VBQ0ksU0FBQTtBQU1KOztBQUhBO0VBQ0ksYUFBQTtBQU1KOztBQUxFLGtCQUFBOztBQUNGLHFCQUFBOztBQUNBO0VBQ0ksZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLHVCQUFBO0FBU0o7O0FBUEE7RUFDSSx5QkFBQTtFQUNBLE1BQUE7QUFVSjs7QUFSQTtFQUNJLHdCQUFBO0VBQ0EsTUFBQTtBQVdKOztBQVJBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFVSjs7QUFQQTtFQUNJLGNBQUE7QUFVSjs7QUFOQSxrQkFBQTs7QUFFQTtFQUVJO0lBQ0ksa0JBQUE7RUFPTjs7RUFKRTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUFPTjtBQUNGOztBQURBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQUdOOztFQUFFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUFHTjs7RUFBRTtJQUNJLGFBQUE7RUFHTjs7RUFBRTtJQUNJLGFBQUE7RUFHTjs7RUFBRTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUFHTjtBQUNGOztBQUNBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VBQ047QUFDRjs7QUFHQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQUROO0FBQ0Y7O0FBS0E7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUFITjtBQUNGOztBQU9BO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VBTE47QUFDRjs7QUFlQTtFQUNJLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFiSjs7QUFnQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFiSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxufVxyXG5cclxuaGVhZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDExMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxudWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uYmxvYy1pbWFnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hY3Rpb24tc2l0ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbGVmdDogMTI0OHB4O1xyXG4gICAgdG9wOiA2MnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZCQkM1ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ubG91cGV7XHJcbiAgICB3aWR0aDogMzhweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGQkJDNTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5sb3VwZSBpbWd7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZW51LXJvbmR7XHJcbiAgICB3aWR0aDogMzhweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGQkJDNTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qIE5hdiBtZW51ICovXHJcbi5uYXZ7XHJcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMzg4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDE1cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJCQzU4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuLm1lbnUgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uYnRuLWNvbm5leGlvbntcclxuICAgIHdpZHRoOiAyNTVweDtcclxuICAgIGhlaWdodDogNThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLmJ0bi1jb25uZXhpb24gYXtcclxuICAgIGNvbG9yOiAjRkJCQzU4O1xyXG4gICAgcGFkZGluZzogMTVweCA0NXB4O1xyXG59XHJcblxyXG4ubmF2e1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgLjVzIGVhc2Utb3V0O1xyXG59XHJcbi8qIE1lbnUgSWNvbiAqL1xyXG4uaGFtYntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDE4cHggOHB4O1xyXG59LyogU3R5bGUgbGFiZWwgdGFnICovXHJcblxyXG4uaGFtYi1saW5lIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG5cclxufSAvKiBTdHlsZSBzcGFuIHRhZyAqL1xyXG5cclxuLmhhbWItbGluZTo6YmVmb3JlLFxyXG4uaGFtYi1saW5lOjphZnRlcntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGFtYi1saW5lOjpiZWZvcmV7XHJcbiAgICB0b3A6IDVweDtcclxufVxyXG4uaGFtYi1saW5lOjphZnRlcntcclxuICAgIHRvcDogLTVweDtcclxufVxyXG5cclxuLnNpZGUtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59IC8qIEhpZGUgY2hlY2tib3ggKi9cclxuLyogVG9nZ2xlIG1lbnUgaWNvbiAqL1xyXG4uc2lkZS1tZW51OmNoZWNrZWQgfiBuYXZ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zaWRlLW1lbnU6Y2hlY2tlZCB+IC5oYW1iIC5oYW1iLWxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNpZGUtbWVudTpjaGVja2VkIH4gLmhhbWIgLmhhbWItbGluZTo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB0b3A6MDtcclxufVxyXG4uc2lkZS1tZW51OmNoZWNrZWQgfiAuaGFtYiAuaGFtYi1saW5lOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0b3A6MDtcclxufVxyXG5cclxuLmZvb3Rlci1wcmluY2lwYWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyMzJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMTlweDs7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY1QzVDO1xyXG59XHJcblxyXG5cclxuaHJ7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkZGRkY7XHJcbn1cclxuXHJcbi5jb21wb3NhbnQtMXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuLypSZXNwb25zaXZlIHBhcnQqL1xyXG5cclxuQG1lZGlhKG1heC13aWR0aDo4NTBweCl7XHJcbiAgICBcclxuICAgIGhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOTlweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTc1OHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1hcHBsaSBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDIwNHB4O1xyXG4gICAgICAgIGhlaWdodDogODJweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1taW5pc3RlcmV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubG91cGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDY3cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00MzJweDtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjQ1MHB4KXtcclxuICAgIC5uYXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTM2MHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NDIwcHgpe1xyXG4gICAgLm5hdntcclxuICAgICAgICBtYXJnaW4tdG9wOiA2OHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzQ0cHg7XHJcbiAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0MDBweCl7XHJcbiAgICAubmF2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDY4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMTZweDtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjM4MHB4KXtcclxuICAgIC5uYXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTMwN3B4O1xyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5zZWFyY2gtb3V0bGluZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaG9pY2UtbGFuZ3VhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGVmdDogMTEyMXB4O1xyXG4gICAgdG9wOiA2NnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZCQkM1ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmJpIHtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59Il19 */";

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.header-title {\n  width: 100%;\n  height: 374px;\n  text-align: center;\n  padding: 95px 205px 215px 205px;\n  background-image: url('image-header.jpg');\n}\n\n.header-title h1 {\n  width: 100%;\n  margin: 0px;\n  font-size: 64px;\n  font-weight: bold;\n  color: white;\n}\n\n.header-title h2 {\n  margin-top: 10px;\n  font-size: 24px;\n  font-weight: 500;\n  color: white;\n}\n\n.portail-card {\n  margin-top: -140px;\n  margin-left: 215px;\n  margin-right: 215px;\n  padding-bottom: 14px;\n  width: auto;\n  height: auto;\n  background: #fdfdfd;\n  text-align: center;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 13px;\n}\n\n.card-title {\n  padding-top: 18px;\n  font-size: 35px;\n  font-weight: 500;\n  color: #03989E;\n}\n\n.card-body p {\n  padding-top: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #000000;\n}\n\n.card-button {\n  margin: 0 auto;\n  width: 223px;\n  height: 60px;\n  padding: 15px 22px 15px 22px;\n  background: #FBBC58;\n  border-radius: 30px;\n}\n\n.card-button a {\n  font-size: 1em;\n  font-weight: bold;\n  color: white;\n  text-decoration: none;\n}\n\n.ministere-card {\n  margin-top: 53px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 256px;\n}\n\n.ministere-card-body {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.btn-autre-ressources {\n  margin: 0 auto;\n  width: 280px;\n  height: 45px;\n  background: #03989E;\n  border-radius: 30px;\n  padding: 10px 35px;\n}\n\n.final-container {\n  margin: 15px 0;\n}\n\n.btn-autre-ressources a {\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  text-decoration: none;\n}\n\n.text-value {\n  text-align: center;\n  color: #03989E;\n  font-family: \"Montserrat\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzc0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDk1cHggMjA1cHggMjE1cHggMjA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pbWFnZS1oZWFkZXIuanBnXCIpO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIGgxIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LXNpemU6IDY0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIGgyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBvcnRhaWwtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogLTE0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMDM5ODlFO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHAge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5jYXJkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDIyM3B4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxNXB4IDIycHggMTVweCAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNGQkJDNTg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLmNhcmQtYnV0dG9uIGEge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubWluaXN0ZXJlLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDUzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjU2cHg7XHJcbn1cclxuXHJcbi5taW5pc3RlcmUtY2FyZC1ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5idG4tYXV0cmUtcmVzc291cmNlc3tcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMzk4OUU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbn1cclxuXHJcbi5maW5hbC1jb250YWluZXJ7XHJcbiAgbWFyZ2luIDogMTVweCAwO1xyXG59XHJcblxyXG4uYnRuLWF1dHJlLXJlc3NvdXJjZXMgYXtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGV4dC12YWx1ZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMzk4OUU7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map