import mongoose from "mongoose";

const viewSchema = mongoose.Schema({
    "userGridViewID": String,
    "viewName": String,
    "columnData": String,
    "createdBy": String,
    "createdDate": String,
    "filterData": String,
    "isDefault": Boolean,
    "isSystem": Boolean,
    "modifiedBy": String,
    "modifiedDate": String,
    "screenName": String
})

const views = mongoose.model("views", viewSchema);
export default views;