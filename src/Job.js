import React from "react";
import { firestore } from './firebase';

export default function Job({ name }) {

    firestore.collection('jobs').get().then( data => {
        data.forEach(doc => {
            const id = doc.id;
            const data = doc.data();
            console.log({id, data});
        });
    });

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
}
