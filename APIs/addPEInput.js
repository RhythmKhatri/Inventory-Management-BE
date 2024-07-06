import { PE_Input } from "../Models/models.js";

const addPEInput = async (userData) => {
    
console.log('userData', userData);
    try {
        let pe_input = new PE_Input(userData);
        console.log('PE_Input instance created:', pe_input);

        await pe_input.save();
        console.log('PE_Input instance saved:', pe_input);


        return {
            Success: true,
            pe_input: pe_input,
        }
    } catch (error) {
        console.log('error', error)
        return {
            Success: false,
            Error: error,
        }
    };
}

export default addPEInput;
