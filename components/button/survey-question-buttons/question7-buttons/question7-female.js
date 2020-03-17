import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setSex} from "../../../../actions/symptom-survey/question7";

const QuestionSevenFemaleButton = ({setSex}) => {
    return (
        <Button
            title="Female"
            onPress={() => setSex(true)}
        />
    )
};

const styles = StyleSheet.create({});

QuestionSevenFemaleButton.propTypes = {
    setSex: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    setSex: value => dispatch(setSex(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSevenFemaleButton);