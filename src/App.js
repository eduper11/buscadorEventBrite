import React, { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';

import CategoriesProvider from './context/ContextCategories';
import EventsProvider from './context/EventContext';
import EventList from './components/EventList';

function App() {
    return (
        <EventsProvider>
            <CategoriesProvider>
                <Header />
                <div className='uk-container'>
                    <Form />
                    <EventList />
                </div>
            </CategoriesProvider>
        </EventsProvider>
    );
}

export default App;
