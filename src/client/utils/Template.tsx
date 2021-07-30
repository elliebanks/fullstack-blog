import * as React from 'react';

const Template: React.FC<TemplateProps> = (props) => {
    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <h1 className="display-1 text-center">Template</h1>
                    
                </div>
            </section>
        </main>
    )
}

interface TemplateProps {}

export default Template;