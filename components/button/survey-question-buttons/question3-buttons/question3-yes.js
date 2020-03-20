import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {visitedForeignCountriesPressed} from "../../../../actions/symptom-survey/question3";
import {QUESTION_THREE_BUTTON_YES} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionThreeYesButton = ({visitedForeignCountriesPressed}) => {
    return (
        <TouchableOpacity onPress={visitedForeignCountriesPressed}>
            <Text style={styles.button}>{QUESTION_THREE_BUTTON_YES}</Text>
        </TouchableOpacity>
    )
};

QuestionThreeYesButton.propTypes = {
    visitedForeignCountriesPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    visitedForeignCountriesPressed: value => dispatch(visitedForeignCountriesPressed(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionThreeYesButton);