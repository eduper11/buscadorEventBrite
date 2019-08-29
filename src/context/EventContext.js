import React, { Component } from 'react';

import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
    state = {
        events: []
    };

    sort = 'date';

    getEvents = async search => {
        const url =
            `https://www.eventbriteapi.com/v3/events/search/` +
            `?q=${search.name}` +
            `&categories=${search.categorie}` +
            `&sort_by=${this.sort}` +
            `&token=${process.env.REACT_APP_EVENTBRITE_PRIVATE_TOKEN}` +
            `&locale=es_ES`;

        //consulta API con URL

        const response = await axios.get(url);

        const { events } = response.data;

        this.setState({
            events: events
        });
    };

    render() {
        return (
            <EventsContext.Provider
                value={{ events: this.state.events, getEvents: this.getEvents }}
            >
                {this.props.children}
            </EventsContext.Provider>
        );
    }
}

export default EventsProvider;
