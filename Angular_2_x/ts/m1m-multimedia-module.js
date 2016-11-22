System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/http", "alx-dragdrop/DragDropModule", "./Components/m1m-multimedia-manager", "./Components/m1m-media-renderer", "./Components/m1m-media-browser", "./Services/CommService", "@vaadin/angular2-polymer"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, http_1, DragDropModule_1, m1m_multimedia_manager_1, m1m_media_renderer_1, m1m_media_browser_1, CommService_1, angular2_polymer_1, M1mMultimediaModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (DragDropModule_1_1) {
                DragDropModule_1 = DragDropModule_1_1;
            },
            function (m1m_multimedia_manager_1_1) {
                m1m_multimedia_manager_1 = m1m_multimedia_manager_1_1;
            },
            function (m1m_media_renderer_1_1) {
                m1m_media_renderer_1 = m1m_media_renderer_1_1;
            },
            function (m1m_media_browser_1_1) {
                m1m_media_browser_1 = m1m_media_browser_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            },
            function (angular2_polymer_1_1) {
                angular2_polymer_1 = angular2_polymer_1_1;
            }
        ],
        execute: function () {
            M1mMultimediaModule = class M1mMultimediaModule {
            };
            M1mMultimediaModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, DragDropModule_1.DragDropModule],
                    exports: [m1m_multimedia_manager_1.CompMultimediaManager],
                    declarations: [
                        m1m_multimedia_manager_1.CompMultimediaManager,
                        m1m_media_browser_1.M1mMediaBrowser,
                        m1m_media_renderer_1.M1mMediaRenderer,
                        angular2_polymer_1.PolymerElement("paper-slider"),
                        angular2_polymer_1.PolymerElement("paper-header-panel"),
                        angular2_polymer_1.PolymerElement("paper-toolbar"),
                        angular2_polymer_1.PolymerElement("paper-button"),
                        angular2_polymer_1.PolymerElement("paper-listbox"),
                        angular2_polymer_1.PolymerElement("paper-item"),
                        angular2_polymer_1.PolymerElement("paper-tabs"),
                        angular2_polymer_1.PolymerElement("paper-tab"),
                        angular2_polymer_1.PolymerElement("paper-card"),
                        angular2_polymer_1.PolymerElement("paper-spinner"),
                    ],
                    providers: [CommService_1.CommService],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                }),
                __metadata("design:paramtypes", [])
            ], M1mMultimediaModule);
            exports_1("M1mMultimediaModule", M1mMultimediaModule);
        }
    };
});
//# sourceMappingURL=m1m-multimedia-module.js.map