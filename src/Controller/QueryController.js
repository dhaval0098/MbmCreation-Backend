const querymodel = require("./model/QueryModel")


const addquery = async(req , res) =>{
    const query =  querymodel.create(req.body)
    console.log(res);
    console.log(res.data);
    res.json({
        message:"query added sucessfully",
        data: query
    })
    
    
}
const getqueries = async(req , res)=>{
    const queries = await querymodel.find()
    console.log(res);
    console.log(res.data);
    res.json({
        data:queries,
        message:"queries found sucessfully"
    })
    
    
}
const deletequery = async (req, res) => {
    try {
      const id = req.params.id;
  
      const deletedItem = await querymodel.findByIdAndDelete(id);
  
      if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.json({ message: 'Item deleted successfully', item: deletedItem });
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
module.exports = {
    addquery,getqueries,deletequery
}