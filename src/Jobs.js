import React, {Component} from "react";
import { firestore } from './firebase';

class Jobs extends Component {

    constructor() {
        super();
        this.jobs = [];
    }

    getJobs() {
        firestore.collection('jobs').get().then( (data) => {
            data.forEach(doc => {
                const id = doc.id;
                const data = doc.data();
                this.jobs.push({id, data});
                console.log(this.jobs);
            });
        });
    }

    // firestore.collection('jobs').get().then( data => {
    //     data.forEach(doc => {
    //         const id = doc.id;
    //         const data = doc.data();
    //         console.log({id, data});
    //     });
    // });

    render() {
        this.getJobs();
        return (
          <div>
              <h2>JOBS!</h2>
              <h3>{this.jobs[0].data.title}</h3>
          </div>
        );
    }
}

export default Jobs;