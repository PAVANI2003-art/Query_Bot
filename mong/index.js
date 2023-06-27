const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tt').then(()=>console.log("Connected")).catch(err=>console.log("error"))
const courseName=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})
const his=mongoose.model('his',courseName)
async function cc(){

const course2=new his({
    name:'prasad'

})
const result=await course2.save();

}
cc()
async function getNames(){
    const names= await his.find({name:'prasad'})
    console.log(names)
}
getNames()
