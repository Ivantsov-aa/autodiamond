import React from 'react';

import Work from './main/work';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

class MainBlock extends React.Component {
    render() {
        return (
            <main>
                <h1>Alexander <span>Ivantsov</span></h1>
                <p>Junior Front-end developer</p>
                <Work {...this.props} />
                <section className="add-info">
                    <h2>Languages</h2>
                    <div className="lang">
                        <p>Russian<span>Native</span></p>
                        <p>English<span>Intermediate</span></p>
                    </div>
                </section>
                <section className='soft-skills'>
                    <h2>Soft skills</h2>
                    <ul>
                        {this.props.softSkills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </section>
                <section className="interests">
                    <h2>Interests</h2>
                    <div>
                        <FitnessCenterIcon />
                        <MovieFilterIcon />
                        <CardTravelIcon />
                        <EmojiFoodBeverageIcon />
                    </div>
                </section>
            </main>
        )
    }
}

export default MainBlock;