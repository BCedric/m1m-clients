import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } 				from "@angular/core";
import {CommonModule}               from "@angular/common";
import { FormsModule }   			from "@angular/forms";
import { HttpModule } 				from "@angular/http";

import { DragDropModule }           from "alx-dragdrop/DragDropModule";

import { CompMultimediaManager }    from "./Components/m1m-multimedia-manager";
import { M1mMediaRenderer }         from "./Components/m1m-media-renderer";
import { M1mMediaBrowser }          from "./Components/m1m-media-browser";
import { CommService }              from "./Services/CommService";

import {PolymerElement}             from "@vaadin/angular2-polymer";
//import "@polymer/paper-slider";


@NgModule({
    imports     : [ CommonModule, FormsModule, HttpModule, DragDropModule],
    exports     : [ CompMultimediaManager ],
    declarations: [
      CompMultimediaManager,
      M1mMediaBrowser,
      M1mMediaRenderer,
      PolymerElement("paper-slider"),
      PolymerElement("paper-header-panel"),
      PolymerElement("paper-toolbar"),
      PolymerElement("paper-button"),
      PolymerElement("paper-listbox"),
      PolymerElement("paper-item"),
      PolymerElement("paper-tabs"),
      PolymerElement("paper-tab"),
      PolymerElement("paper-card"),
      PolymerElement("paper-spinner"),
      PolymerElement("paper-drawer-panel"),
      PolymerElement("paper-input"),
    //  PolymerElement("iron-icons"),
    ],
    providers   : [ CommService ],
    schemas     : [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class M1mMultimediaModule {}
