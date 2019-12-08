import React from 'react';
import Result from '../../src/result/Result';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from '../../src/store/reducers/raducer.js';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import "babel-polyfill"

describe('Result rendering', () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        global.fetch.mockRestore();
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('Fetch error', async () => {
        const fakerData = {
            statusText: 'error'
        };
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: false,
            statusText: 'error',
            json: () => Promise.resolve(fakerData)
        }));
        const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
        await act(async () => {
            render(<Provider store={store}>
                <Result/>
            </Provider>, container);
        });
        expect(container.textContent).not.toContain('release_date');
    });

    it('renders correctly', async () => {
        const fakerData = {
            data: [{
                id: 962,
                title: 'The Gold Rush',
                tagline: 'The World\'s Greatest Laughing Picture!',
                vote_average: 5.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95
            }]
        };

        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(fakerData)
        }));

        const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
        await act(async () => {
            render(<Provider store={store}>
                <Result/>
            </Provider>, container);
        });
        expect(container.textContent).toContain(fakerData.data[0].title);
    });
});