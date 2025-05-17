
let items = [
    {
        id: 1,
        name: 'Michael Lee',
        business: 'GreenField Farms',
        position: 'Operations Manager',
        description: 'An organic farming business focused on sustainable agriculture.'
      }
]


//get all items controller
export const getItems = (req, res)=>{
    res.send({items:items})
}



//create new item controller
export const createItem = (req, res)=>{

    const {name, business, position, description} = req.body;
    const item = {
        id: items.length + 1,
        name: name,
        business: business,
        position: position,
        description: description,
    };
    if (!name || !business || !position || !description) {
        res.status(400).send({message: 'Name and description are required'})
    } else {
        items.push(item);
        res.send({message: 'post addeded', data: item}); 
    }

res.send('user added to array')
}

//get item by id controller
export const getItemById = (req, res) => {
    const id = parseInt(req.params.id);
    const foundItem = items.find(item => item.id === id);
  
    if (!foundItem) {
      return res.status(404).json({ message: `Item with ID ${id} not found.` });
    }
  
    res.status(200).json(foundItem);
  };
  

// delete item by id controller
export const deleteItem = (req, res) => {
    const id = parseInt(req.params.id);
    const deletedItem = items.find(item => item.id === id);
  
    if (!deletedItem) {
      return res.status(404).json({ message: `Item with ID ${id} not found.` });
    }
  
    items = items.filter(item => item.id !== id);
  
    res.status(200).json({
      message: `Item with the name ${deletedItem.name} has been deleted.`,
      deletedItem: deletedItem
    });
  };
  
// update items by id controller
export const updateItem =  (req, res) => {
    const id = parseInt(req.params.id);
    const { name, position, business, description } = req.body;
  
    if (!name || !position || !business || !description) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    const item = items.find(item => item.id === id);
  
    if (!item) {
      return res.status(404).json({ message: `User with ID ${id} not found.` });
    }
  
    item.name = name;
    item.position = position;
    item.business = business;
    item.description = description;
  
    res.status(200).json({
      message: `User with ID ${id} has been updated.`,
      updatedItem: item
    });
  }

