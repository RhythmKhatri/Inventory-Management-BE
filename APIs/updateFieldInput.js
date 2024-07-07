import { Field_Input } from "../Models/models.js";

const updateFieldInput = async (userData) => {

  console.log('userData', userData);
  try {
    const updatedFieldInput = await Field_Input.findByIdAndUpdate(
      userData.id,
      userData,
      { new: true } // Return the updated document
    );
    console.log('updatedFieldInput', updatedFieldInput)
    return {
      Success: true,
      field_Input: updatedFieldInput,
    }
  } catch (error) {
    console.log('error', error);
    return {
      Success: false,
      Error: error,
    };
  }
};

export default updateFieldInput;
