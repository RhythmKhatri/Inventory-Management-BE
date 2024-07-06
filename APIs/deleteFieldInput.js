import { Field_Input } from "../Models/models.js";

const deleteFieldInput = async (userData) => {
    console.log('Deleting PE_Input with _id:', userData);
    try {
        const result = await Field_Input.deleteOne({ _id: userData.id });
        console.log('Delete result:', result);

        if (result.deletedCount === 1) {
            return {
                Success: true,
                Message: 'PE_Input instance deleted successfully.',
            };
        } else {
            return {
                Success: false,
                Message: 'No PE_Input instance found with the given _id.',
            };
        }
    } catch (error) {
        console.log('error', error);
        return {
            Success: false,
            Error: error,
        };
    }
};

export default deleteFieldInput;
