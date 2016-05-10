import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import styles from 'css/components/side-bar';

const cx = classNames.bind(styles);

export default class SideBar extends Component {
    render(){
      return(
          <div id={cx('sidebar-wrapper')}>
            <ul className={cx('sidebar-nav')}>
                <li className={cx('sidebar-brand')}>
                   <Link to="/" activeClassName={cx('active')}>Home</Link>
                </li>
                <li>
                    <Link to="/about" activeClassName={cx('active')}>About</Link>
                </li>
                <li>
                    <Link to="/contact" activeClassName={cx('active')}>Contact Us</Link>
                </li>
                <li>
                    <Link to="/Link1" activeClassName={cx('active')}>Link1</Link>
                </li>
                <li>
                    <Link to="/Link2" activeClassName={cx('active')}>Link2</Link>
                </li>
            </ul>
        </div>
        );
    }
}
