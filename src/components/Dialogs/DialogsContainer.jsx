import { updateNewMessageTextCreator, sendMessageCreator } from '../../state/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (messageText) => {
            dispatch(updateNewMessageTextCreator(messageText));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)