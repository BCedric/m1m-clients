import { Component, Input 	} from "@angular/core";
import {CommService, Directory, MediaServer, DataBrowse, Media} from "../Services/CommService";

type filterMedia = (m : Media) => boolean;
type filterDirectory = (m : Directory) => boolean;
@Component({
    selector		: "m1m-media-browser",
    templateUrl		: "ts/Components/m1m-media-browser.html",
    styleUrls       : [ "ts/Components/m1m-media-browser.css"
                      ]
})



export class M1mMediaBrowser {
    @Input() devices	: MediaServer[];
    private breadcrumb  : Directory  [] = [];
    private data        : DataBrowse;
    private ms          : MediaServer;
    private searchField      : string = "";

    filterMediaAll : filterMedia = (m) => true;
    filterMediaSearch : filterMedia = (m) =>  m.title.toLowerCase().indexOf(this.searchField.toLowerCase()) !== -1;
    filterMediaActive : filterMedia = this.filterMediaAll;

    filterDirectoryAll : filterDirectory = (d) => true;
    filterDirectorySearch : filterDirectory = (d) =>  d.name.toLowerCase().indexOf(this.searchField.toLowerCase()) !== -1;
    filterDirectoryActive : filterDirectory = this.filterDirectoryAll;

    constructor(private cs: CommService) {
        // console.log( "CommService:", cs);
    }
    browseMediaServer(ms: MediaServer) {
        this.searchField="";
        this.breadcrumb = [];
        this.ms         = ms;
        this.data       = null;
        if(ms) {
            this.browse();
        }
    }
    browse( directory?: Directory ) {
        this.searchField="";
        let directoryId: string;
        if(directory) {
            directoryId = directory.directoryId;
            let keep = true;
            this.breadcrumb = this.breadcrumb.filter( D => keep && (keep=D !== directory) );
            this.breadcrumb.push(directory);
        } else {
            directoryId = "0";
        }
        this.data = null;
        return this.cs.browse( this.ms.id, directoryId ).then( (data) => {
            console.log( "Browse", this.ms.id, directoryId, "=>", data );
            this.data = data;
        });
    }

    search(str : string) {
      this.searchField = str;
      if(str ==="") {
        this.filterMediaActive = this.filterMediaAll;
        this.filterDirectoryActive = this.filterDirectoryAll;
      } else {
        this.filterMediaActive = this.filterMediaSearch;
        this.filterDirectoryActive = this.filterDirectorySearch;
      }
    }
}
