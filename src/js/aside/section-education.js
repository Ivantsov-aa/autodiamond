import React from 'react';
import EducatuionList from './education-list';

class SectionEducation extends React.Component {
    render() {
        return (
            <section>
                <h2>Education</h2>
                <ul className="education">
                    {this.props.education.map((item, i) => (
                        <EducatuionList studyYear={item.year} studyPlace={item.text} studySpec={item.spec} key={i} />
                    ))}
                </ul>
            </section>
        )
    }
}

export default SectionEducation;