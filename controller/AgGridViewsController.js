import mongoose from "mongoose";
import views from "../schema/views-schema.js";

export const addViews = async (req, res) => {
    const viewData = req.body;    
    // res.send("data",viewData);
    const newView = new views(viewData);

    try {
        await newView.save();
        res.status(201).json(newView);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const getAllViews = async (req,res) => {
    try {
        const allViews = await views.find({});
        res.status(200).json(allViews);
    } catch (error) {       
        res.status(404).json({message:error.message});
    }
}

export const editView = async (req,res) => {
    const {id:_id} = req.params;
    const view = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No view with that id");

    try {
        const updatedView = await views.findByIdAndUpdate(_id,view,{new:true});
        res.json(updatedView);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }

}
export const deleteView = async (req,res) => {
    const {id:_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No view with that id");

    try {
        await views.findByIdAndRemove(_id);
        res.json({message:"View deleted successfully"});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}