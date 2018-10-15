// An action creator is just a function

const RESOURCE_SELECTED = 'RESOURCE_SELECTED'

export const selectResource = (resource) => {
    // console.log('A resource has been selected: ', resource.title + resource.description)

    // selectResource is an ActionCreator, it needs to return an action(an object with a type property)
    return {
        type: RESOURCE_SELECTED,
        payload: resource
    };
}