import * as React from 'react';
import { useParams } from 'react-router-dom';

const Details: React.FC<DetailsProps> = props => {

    const { blogid } = useParams();
    //parameter must match what is inside of the route

    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <h1 className="display-1 text-center">Details {blogid}</h1>
                    
                </div>
            </section>
        </main>
    )
}

interface DetailsProps {}

export default Details;