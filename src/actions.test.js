import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

import * as actions from './actions';
import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED 
} from './constants';

const mockStore = configureMockStore([ReduxThunk]);

it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const storeActions = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }
    expect(storeActions[0]).toEqual(expectedAction)
})