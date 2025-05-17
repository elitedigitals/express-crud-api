import express from "express";

const router =express.Router();
import { createItem, deleteItem, getItemById, getItems, updateItem } from "../controllers/items.js";



//get all items
router.get("/", getItems);


//create new item and 
router.post('/',createItem);

//get item by id
router.get("/:id", getItemById);

// delete item by id
router.delete("/:id",deleteItem);
  
// update items by id
router.put('/:id',updateItem);
  

export default router;
