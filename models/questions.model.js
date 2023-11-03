import mongoose from "mongoose";
const QuestionSchema = mongoose.Schema(
    {
        questions:{type: Array},
        answers: {type: Array},
        

    },
    
     {
            timestamps:true
    }
    
)
export default mongoose.model("Questions",QuestionSchema)