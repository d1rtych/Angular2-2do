import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    /**
     * Method returns mock
     * array with data
     *
     * @method createDb
     * @returns {{items: ({id: number, title: string, completed: boolean}|{id: number, title: string, completed: boolean}|{id: number, title: string, completed: boolean})[]}}
     */
    createDb() {
        const items = [
            {
                id: 1,
                title: 'Learn JavaScript',
                completed: true
            },
            {
                id: 2,
                title: 'Learn Angular 2',
                completed: false
            },
            {
                id: 3,
                title: 'Write an Application',
                completed: false
            }
        ];

        return { items };
    }
}