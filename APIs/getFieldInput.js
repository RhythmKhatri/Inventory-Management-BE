import { Field_Input } from "../Models/models.js";

// Function to retrieve all PE_Input records
const getAllFieldInputs = async () => {
    try {
        // Fetch all records from the database
        const field_inputs = await Field_Input.find();
        console.log('All PE_Input instances:', field_inputs);

        return {
            Success: true,
            field_inputs: field_inputs,
        };
    } catch (error) {
        console.log('error', error);
        return {
            Success: false,
            Error: error,
        };
    }
}

export default getAllFieldInputs;
