import { saveComment } from '../../actions';
import { SAVE_COMMENT } from '../../actions/types';

describe('saveComment action creator', () => {
    it('has the correct type', () => {
        //calling the action creator
        const action = saveComment();
        //expectation of the correct action type
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('has the correct payload', () => {
        //giving the action creator a payload
        const action = saveComment('new comment');
        //expectation for payload to be there
        expect(action.payload).toEqual('new comment');
    });
});
