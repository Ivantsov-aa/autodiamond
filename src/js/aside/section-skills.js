import React from 'react';

import Skills from './skills';

class SectionSkills extends React.Component {
    render() {
        return (
            <section>
                <h2>Hard skills</h2>
                <ul className="skills">
                    {this.props.hardSkills.map((skill, i) => (
                        <Skills skill={skill.text} scale={skill.value} key={i} />
                    ))}
                </ul>
            </section>
        )
    }
}

export default SectionSkills;