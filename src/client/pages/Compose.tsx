import * as React from 'react';

const Compose: React.FC<ComposeProps> = (props) => {
    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <h1 className="display-1 text-center">Compose</h1>
                    
                </div>
            </section>
        </main>
    )
}

interface ComposeProps {}

export default Compose;