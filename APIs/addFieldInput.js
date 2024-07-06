import { Field_Input } from "../Models/models.js";

const addFieldInput = async (userData) => {
    
console.log('userData', userData);
    try {
        let field_Input = new Field_Input(userData);
        console.log('Field_Input instance created:', field_Input);

        await field_Input.save();
        console.log('Field_Input instance saved:', field_Input);


        return {
            Success: true,
            field_Input: field_Input,
        }
    } catch (error) {
        console.log('error', error)
        return {
            Success: false,
            Error: error,
        }
    };
}

export default addFieldInput;
