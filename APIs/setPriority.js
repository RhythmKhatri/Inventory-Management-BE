import { Field_Input } from "../Models/models.js";

const setPriority = async (userData) => {

  console.log('userData', userData);
  try {
    const updatedPriority = await Field_Input.findByIdAndUpdate(
      userData.id,
      userData,
      { new: true } // Return the updated document
    );
    console.log('updatedPriority', updatedPriority)
    return {
      Success: updatedPriority == null ? false :true,
      updatedPriority: updatedPriority,
    }
  } catch (error) {
    console.log('error', error);
    return {
      Success: false,
      Error: error,
    };
  }
};

export default setPriority;
