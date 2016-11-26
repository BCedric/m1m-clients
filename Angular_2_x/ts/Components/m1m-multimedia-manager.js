System.register(["@angular/core", "../Services/CommService"], function (exports_1, context_1) {
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
    var core_1, CommService_1, CompMultimediaManager;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            }
        ],
        execute: function () {
            CompMultimediaManager = class CompMultimediaManager {
                constructor(comm) {
                    this.comm = comm;
                    this.mediaRenderers = [];
                    this.mediaServers = [];
                    //console.log( "CommService:", comm);
                    comm.init(localStorage.getItem("TActHab_adresse")).subscribe((data) => {
                        //console.log( "init =>", data );
                        this.mediaRenderers = data.mediaRenderers;
                        this.mediaServers = data.mediaServers;
                    });
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], CompMultimediaManager.prototype, "title", void 0);
            CompMultimediaManager = __decorate([
                core_1.Component({
                    selector: "comp-multimedia-manager",
                    templateUrl: "ts/Components/m1m-multimedia-manager.html",
                    styleUrls: ["ts/Components/m1m-multimedia-manager.css"]
                }),
                __metadata("design:paramtypes", [CommService_1.CommService])
            ], CompMultimediaManager);
            exports_1("CompMultimediaManager", CompMultimediaManager);
        }
    };
});
//# sourceMappingURL=m1m-multimedia-manager.js.map