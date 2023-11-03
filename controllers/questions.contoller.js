import Questions from "../models/questions.model.js";
import Result from "../models/result.model.js"


export const getAllQuestions = async(req,res)=>{
    try{
        const allQuestions= await Questions.find();
        res.status(200).json({success:true,data:{allQuestions}})
    }catch{
        res.status(400).json({success:false})
    }
};

export const insertQuestions = async(req,res)=>{
    try {
        const newQuestion = new Questions({
            questions:[0],
            answers:[1]
        });
        await newQuestion.save();
        res.json({msg:"data saved"})
        
        
    } catch (error) {
      res.json({error})
        
    }
   
};

export const deleteQuestions = async(req,res)=>{
    try {
        await Questions.deleteMany();
        res.json({msg:"data deleted"})

        
    } catch (error) {
        res.json({error})
        
    }
}

export const getResults = async(req,res)=>{
    try {
        const results = await Result.find();
        res.status(200).json({success: true, results});
        
        
    } catch (error) {
        res.status(500).json({success: false});
        
    }
}

export const storeResult = async(req,res)=>{
    try {
        const {results,attempts,points} = req.body;
        if(!results) throw new Error("no data found");

        const newResult = new Result({results,attempts,points});
        await newResult.save();
        res.json({msg:'Data has been inserted successfully'});
        
    } catch (error) {
        res.json({error: error.message})
        
    }
}

export const deleteResult = async(req,res)=>{
    try {
        await Result.deleteMany();
        res.json({msg:"data deleted"})
        
    } catch (error) {
        res.json({error})
        
    }
}
