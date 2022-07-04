import {useState, useEffect} from 'react'
import translate from 'google-translate-api'

const Translate = () => {

    translate('I will spreek English', {from: 'en', to: 'ja'}).then(res => {
        console.log(res.text);
    }).catch(err => {
        console.error(err);
    });
}

export { Translate };