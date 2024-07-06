import { PE_Input } from "../Models/models.js";

// Function to retrieve all PE_Input records
const getAllPEInputs = async () => {
    try {
        // Fetch all records from the database
        const pe_inputs = await PE_Input.find();
        console.log('All PE_Input instances:', pe_inputs);

        return {
            Success: true,
            pe_inputs: pe_inputs,
        };
    } catch (error) {
        console.log('error', error);
        return {
            Success: false,
            Error: error,
        };
    }
}

export default getAllPEInputs;
