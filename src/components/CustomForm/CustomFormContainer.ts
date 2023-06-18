import { connect } from 'react-redux';
import { sendForm } from '../../redux/FormReducer';
import CustomForm from './CustomForm';
import { AppStateType } from '../../redux/store';

const mapStateToProps = (state: AppStateType) => {
    return {
        isError: state.formPage.isError,
    };
};

const CustomFormContainer = connect(mapStateToProps, { sendForm })(CustomForm);

export default CustomFormContainer;