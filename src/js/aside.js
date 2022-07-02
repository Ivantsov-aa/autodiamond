import React from 'react';

import SectionSkills from './aside/section-skills';
import SectionEducation from './aside/section-education';

import photo from '../images/myphoto.jpg';

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.tooltipRef = React.createRef();
        this.state = {
            tooltipText: ''
        }
    }

    onMouseOverChange = e => {
        let eventContact = e.target;
        let contacts = document.querySelectorAll('.copy');
        let tooltip = this.tooltipRef;

        this.setState({ tooltipText: 'Copy' });

        contacts.forEach(contact => {
            if (contact.dataset.value === eventContact.dataset.value) {
                tooltip.current.style.display = 'block';
            }
        })
    }

    onMouseOutChange = e => {
        let eventContact = e.target;
        let contacts = document.querySelectorAll('.copy');
        let tooltip = this.tooltipRef;

        contacts.forEach(contact => {
            if (contact.dataset.value === eventContact.dataset.value) {
                tooltip.current.style.display = 'none';
            }
        })
    }

    handleClick = e => {
        let eventText = e.target.dataset.value;

        this.setState({ tooltipText: 'Copied' });
        navigator.clipboard.writeText(eventText);
    }

    render() {
        return (
            <aside>
                <header>
                    <div className='tooltip' ref={this.tooltipRef}>{this.state.tooltipText}</div>
                    <img src={photo} alt={photo} />
                    <ul>
                        {this.props.contacts.map((contact, i) => (
                            <li className="copy" data-value={contact.data}
                                ref={this.contactRef}
                                onMouseOver={this.onMouseOverChange}
                                onMouseOut={this.onMouseOutChange}
                                onClick={this.handleClick}
                                key={i}>
                                {contact.icon}
                                {contact.text}
                            </li>
                        ))}
                    </ul>
                </header>
                <SectionSkills {...this.props} />
                <SectionEducation {...this.props} />
            </aside>
        )
    }
}

export default Aside;