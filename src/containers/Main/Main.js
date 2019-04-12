import React from 'react';
import Header from './../../components/Header/Header';
import Search from './../../pages/Search/Search';
import styles from './main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Search />
      </div>
    )
  }
}

export default Main;