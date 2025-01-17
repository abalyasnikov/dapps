import React, { Component } from 'react'
import Header from '../components/Header/';
import Tabs from '../components/Tabs/';
import Autocomplete from '../components/Autocomplete/';
import FeaturedDappsCarousel from '../components/FeaturedDappsCarousel/';
import ExploreDapps from '../components/ExploreDapps/';
import Favorites from '../components/Favorites/';
import TakeATour from '../components/TakeATour/';

export default class Home extends Component {
    render(){
        return (
            <div>
                <Header />
                <Autocomplete />
                <FeaturedDappsCarousel />
                <Tabs>
                    <div label="Explore">
                        <ExploreDapps />
                    </div>
                    <div label="Favorites">
                        <Favorites />
                    </div>
                </Tabs>
                <TakeATour />
            </div>
        );
    }
}