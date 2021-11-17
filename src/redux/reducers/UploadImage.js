
const initialState = {
  response: [],
};

const UploadImage = (state = initialState, action) => {
   switch (action.type) {
    case 'success':
      return {
        ...state ,response: action.id
      };
    default:
      return state;
  }
};

export default UploadImage
