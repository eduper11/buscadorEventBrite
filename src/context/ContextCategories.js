import React, { Component } from 'react';
import axios from 'axios';

//crear el context

const ContextCategories = React.createContext();
export const CategoriesConsumer = ContextCategories.Consumer;

class CategoriesProvider extends Component {
    state = { categories: [] };

    componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        const url =
            `https://www.eventbriteapi.com/v3/categories/?` +
            `token=${process.env.REACT_APP_EVENTBRITE_PRIVATE_TOKEN}&` +
            `locale=es_ES`;

        const response = await axios.get(url);

        const categories = response.data.categories;

        this.setState({
            categories
        });
    };

    render() {
        return (
            <ContextCategories.Provider
                value={{ categories: this.state.categories }}
            >
                {this.props.children}
            </ContextCategories.Provider>
        );
    }
}

export default CategoriesProvider;
