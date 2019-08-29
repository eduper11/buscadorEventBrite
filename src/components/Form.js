import React, { Component } from 'react';

import { CategoriesConsumer } from '../context/ContextCategories';
import { EventsConsumer } from '../context/EventContext';

class Form extends Component {
    state = {
        name: '',
        categorie: ''
    };

    //cuando user agrega data de búsqueda

    getEventData = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <EventsConsumer>
                {value => {
                    return (
                        <form
                            onSubmit={event => {
                                event.preventDefault();

                                value.getEvents(this.state);
                            }}
                        >
                            <fieldset className='uk-fieldset uk-margin'>
                                <legend className='uk-legend uk-text-center'>
                                    Busca tu evento por nombre o categoría
                                </legend>
                            </fieldset>
                            <div className='uk-column-1-3@m uk-margin'>
                                <div className='uk-margin' uk-margin='true'>
                                    <input
                                        name='name'
                                        className='uk-input'
                                        type='text'
                                        placeholder='Indica el nombre o la ciudad del evento'
                                        onChange={this.getEventData}
                                    />
                                </div>
                                <div className='uk-margin' uk-margin='true'>
                                    <select
                                        className='uk-select'
                                        name='category'
                                        onChange={this.getEventData}
                                    >
                                        <option value=''>
                                            Selecciona la categoría
                                        </option>
                                        <CategoriesConsumer>
                                            {value => {
                                                return value.categories.map(
                                                    category => (
                                                        <option
                                                            key={category.id}
                                                            value={category.id}
                                                            data-uk-form-select
                                                        >
                                                            {
                                                                category.name_localized
                                                            }
                                                        </option>
                                                    )
                                                );
                                            }}
                                        </CategoriesConsumer>
                                    </select>
                                </div>

                                <div>
                                    <input
                                        type='submit'
                                        className='uk-button uk-button-danger'
                                        value='Buscar'
                                    />
                                </div>
                            </div>
                        </form>
                    );
                }}
            </EventsConsumer>
        );
    }
}

export default Form;
