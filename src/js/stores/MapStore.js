import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class MapStore extends EventEmitter {
    constructor() {
        super();
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
                nameCaffeNowTime: null,
                nameCaffeThenTime: null,
                
                nameTerraceNow: null,
                nameTerraceThen: null,
                nameTerraceNowTime: null,
                nameTerraceThenTime: null,
                
                nameBrownNow: null,
                nameBrownThen: null,
                nameBrownNowTime: null,
                nameBrownThenTime: null,
                
                nameGreenNow: null,
                nameGreenThen: null,
                nameGreenNowTime: null,
                nameGreenThenTime: null,
            };
    }

    getAll() {
        return this.map;
    }

    handleActions(action) {
        switch(action.type) {
            case "RELOAD_MAP_COFFE": {
                    if (action.data.data[0].colorCaffe) 
                        {this.map.colorCaffe = action.data.data[0].colorCaffe}
                    this.map.nameCaffeNow = action.data.data[0].name;
                    const timeUTCnow = action.data.data[0].start_date;
                    this.map.nameCaffeNowTime = new Date(timeUTCnow).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    
                    this.map.nameCaffeThen = action.data.data[1].name;
                    const timeUTCthen = action.data.data[1].start_date;
                    this.map.nameCaffeThenTime = new Date(timeUTCthen).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                this.emit("change");
                break;
            }
            case "RELOAD_MAP_TERRACE": {
                    if (action.data.data[0].colorTerrace)
                        {this.map.colorTerrace = action.data.data[0].colorTerrace}
                    this.map.nameTerraceNow = action.data.data[0].name;
                    const timeUTCnow = action.data.data[0].start_date;
                    this.map.nameTerraceNowTime = new Date(timeUTCnow).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    
                    this.map.nameTerraceThen = action.data.data[1].name;
                    const timeUTCthen = action.data.data[1].start_date;
                    this.map.nameTerraceThenTime = new Date(timeUTCthen).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                this.emit("change");
                break;
            }
            case "RELOAD_MAP_GREEN": {
                    if (action.data.data[0].colorGreen) 
                        {this.map.colorGreen = action.data.data[0].colorGreen};
                    this.map.nameGreenNow = action.data.data[0].name;
                    const timeUTCnow = action.data.data[0].start_date;
                    this.map.nameGreenNowTime = new Date(timeUTCnow).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    
                    this.map.nameGreenThen = action.data.data[1].name;
                    const timeUTCthen = action.data.data[1].start_date;
                    this.map.nameGreenThenTime = new Date(timeUTCthen).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                this.emit("change");
                break;
            }
            case "RELOAD_MAP_BROWN": {
                    if (action.data.data[0].colorBrown)
                        {this.map.colorBrown = action.data.data[0].colorBrown};
                    this.map.nameBrownNow = action.data.data[0].name;
                    const timeUTCnow = action.data.data[0].start_date;
                    this.map.nameBrownNowTime = new Date(timeUTCnow).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    
                    this.map.nameBrownThen = action.data.data[1].name;
                    const timeUTCthen = action.data.data[1].start_date;
                    this.map.nameBrownThenTime = new Date(timeUTCthen).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
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