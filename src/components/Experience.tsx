import {useContext} from 'react';
import {ChallengesContext} from '../contesxts/ChallengesContext'
import styles from '../styles/components/experience.module.css';

export function Experience(){

    const {currentExperience,experienceToNextLevel} = useContext(ChallengesContext);
    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return(
        <header className={ styles.experienceBar }>
            <span>0xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}} />
                <span className={ styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}> {currentExperience}xp </span>
        
            </div>
            <span> {experienceToNextLevel}xp</span>
        </header>
    );
}