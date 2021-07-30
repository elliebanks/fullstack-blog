import * as React from 'react';

const Home: React.FC<HomeProps> = (props) => {
    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <h1 className="display-1 text-center">Home</h1>
                    
                </div>
            </section>
        </main>
    )
}

interface HomeProps {}

export default Home;