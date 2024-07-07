import { PE_Input } from "../Models/models.js";

const updatePEInput = async (userData) => {

  console.log('userData', userData);
  try {
    const updatedPEInput = await PE_Input.findByIdAndUpdate(
      userData.id,
      userData,
      { new: true } // Return the updated document
    );
    console.log('updatedPEInput', updatedPEInput)
    return {
      Success: true,
      pe_input: updatedPEInput,
    }
  } catch (error) {
    console.log('error', error);
    return {
      Success: false,
      Error: error,
    };
  }
};

export default updatePEInput;
