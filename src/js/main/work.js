import React from 'react';
import WorkList from './work-list';

class Work extends React.Component {
    render() {
        return (
            <section>
                <h2>Work experience</h2>
                <ul className="work-exp">
                    {this.props.work.map((item, i) => (
                        <WorkList titleCompany={item.title} posCompany={item.position} respCompany={item.responsibilities} workTime={item.year} key={i} />
                    ))}
                </ul>
            </section>
        )
    }
}

export default Work;