import produce from 'immer';

const posts = []

const INITIAL_STATE = {
  isLoading: false,
  posts,
};

export default function general(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@general/setPosts':
      return produce(state, draft => {
        draft.posts = action.payload.data;
      });   
    default:
      return state;
  }
}
