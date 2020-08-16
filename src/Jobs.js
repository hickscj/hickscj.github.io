import React, {Component} from "react";
// import { firestore } from './firebase';

class Jobs extends Component {

    // firestore.collection('jobs').get().then( data => {
    //     data.forEach(doc => {
    //         const id = doc.id;
    //         const data = doc.data();
    //         console.log({id, data});
    //     });
    // });

    render() {
        return (
          <div>
              <h2>JOBS!</h2>
          </div>
        );
    }
}

export default Jobs;