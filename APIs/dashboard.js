import { Field_Input, PE_Input } from "../Models/models.js";
import getAllPEInputs from "./getFieldInput.js";
import getAllFieldInputs from "./getPeInput.js";


const dashboard = async () => {
    try {
          const pe_inputs = await PE_Input.find();
          const field_inputs = await Field_Input.find();

          const mergedData = field_inputs.map(field => {
            const matchingPEInput = pe_inputs.find(pe => pe.device_opn === field.device_opn && pe.version === field.version);
            if (matchingPEInput) {
              return {
                customer: field.customer,
                device_opn: field.device_opn,
                version: field.version,
                quantity_demand: field.quantity_demand,
                shipment_date: field.shipment_date,
                paid_samples: field.paid_samples,
                shipping_status: field.shipping_status,
                priority: field.priority,
                quantity: matchingPEInput.quantity,
                quantity_available: matchingPEInput.quantity_available,
                pe_comment: matchingPEInput.pe_comment
              };
            } 
            else {
              return field; // If no matching PE input found, return the original field input
            }
          });
        //   const filteredMergedData = mergedData.filter(data => data);

          return {
            Success : true,
            dashboard : mergedData
          }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
export default dashboard;