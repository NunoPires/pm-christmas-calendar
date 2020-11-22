import {apiConfig} from './config.js';

export class CalendarAPI {

    fetchCalendarData() {
            
        return fetch(apiConfig.baseURL + "/calendar")
                 .then(response => response.json());
    }
}

    