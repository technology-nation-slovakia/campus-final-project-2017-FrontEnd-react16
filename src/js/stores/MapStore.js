import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class MapStore extends EventEmitter {
    constructor() {
        super()
        this.map = {
                id: 1,
                text: 'initial',
                complete: false,
                colorCaffe: '#99cc33',
                colorGreen: '#99cc33',
                colorBrown: '#99cc33',
                colorTerrace: '#99cc33',
                nameCaffeNow: null,
                nameCaffeThen: null,
                nameTerraceNow: null,
                nameTerraceThen: null,
                nameBrownNow: null,
                nameBrownThen: null,
                nameGreenNow: null,
                nameGreenThen: null,
            };
    }

    getAll() {
        return this.map;
    }

    handleActions(action) {
        switch(action.type) {
            case "RELOAD_MAP_COFFE": {
                    if (action.data.data[0].colorCaffe) {this.map.colorCaffe = action.data.data[0].colorCaffe};
                    this.map.nameCaffeNow = action.data.data[0].name;
                    this.map.nameCaffeThen = action.data.data[1].name;
                this.emit("change");
                break;
            }
            case "RELOAD_MAP_TERRACE": {
                    if (action.data.data[0].colorTerrace) {this.map.colorTerrace = action.data.data[0].colorTerrace};
                    this.map.nameTerraceNow = action.data.data[0].name;
                    this.map.nameTerraceThen = action.data.data[1].name;
                this.emit("change");
                break;
            }
            case "RELOAD_MAP_GREEN": {
                    if (action.data.data[0].colorGreen) {this.map.colorGreen = action.data.data[0].colorGreen};
                    this.map.nameGreenNow = action.data.data[0].name;
                    this.map.nameGreenThen = action.data.data[1].name;
                this.emit("change");
                break;
            }
            case "RELOAD_MAP_BROWN": {
                    if (action.data.data[0].colorBrown) {this.map.colorBrown = action.data.data[0].colorBrown};
                    this.map.nameGreenNow = action.data.data[0].name;
                    this.map.nameGreenThen = action.data.data[1].name;
                this.emit("change");
                break;
            }
            
            default:
                // do nothing
        }
    }
}

const mapStore = new MapStore();
dispatcher.register(mapStore.handleActions.bind(mapStore));
export default mapStore;