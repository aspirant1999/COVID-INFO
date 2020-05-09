import React from 'react';

import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }


    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData});
       console.log(fetchedData);
     }

    
     handle = async (country) => {
        const fetchedData = await fetchData(country); 
        this.setState({ data: fetchedData, country: country});   
     }
    render() {
        const { data, country }= this.state;

        return (
            
            <div className={styles.container}>
                <h1 className={styles.title}><img src="logo.png" alt="" width="60px"/>COVID-INFO</h1>
               <Cards data= {data} />
               <CountryPicker handle={this.handle}/>
               <Charts data={data} country={country}/>

                <div className={styles.copy}>	&copy;2020 : &nbsp; <a href="https://adarshspakkala.me/">Adarsh S Pakkala</a></div>

            </div>
        );
    }
}

export default App;