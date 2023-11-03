import mongoose from "mongoose";
const ResultSchema = mongoose.Schema(
    {
        results:{type: Array},
        attempts: {type: Number},
        points:{type:Number}
        

    },
    
     {
            timestamps:true
    }
    
)
export default mongoose.model("Result",ResultSchema)