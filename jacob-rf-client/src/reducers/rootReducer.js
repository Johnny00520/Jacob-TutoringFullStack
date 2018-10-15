import { combineReducers } from 'redux';
import resourcesListsReducer from './resources/reducer_resources'; // Resources in array of objects
import resourcesTypeReducer from './resources/reducer_resourcesType';
import servicesListsReducer from './resources/reducer_services';
import servicesListsReducerTwo from './resources/reducer_servicesTwo';

const rootReducer = combineReducers({
    Resources: resourcesListsReducer,
    ResourcesType: resourcesTypeReducer,
    Services: servicesListsReducer,
    ServicesTwo: servicesListsReducerTwo
});

export default rootReducer