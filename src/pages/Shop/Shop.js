import React, { Component } from 'react'
import { shopData } from './shop-data';
import Preview from '../../Components/preview-collection/Preview';

export default class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections : shopData
        }
    }
    render() {
        const { collections } = this.state
        return (
           <div className="shop-page">
               {
                   collections.map(({id, ...otherProps}) => (
                       <Preview key={id} {...otherProps}/>
                   ))
            }
           </div>
        )
    }
}

