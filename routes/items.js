import express from "express";

const router =express.Router();

let items = [
    {
        id: 1,
        name: 'Michael Lee',
        business: 'GreenField Farms',
        position: 'Operations Manager',
        description: 'An organic farming business focused on sustainable agriculture.'
      },

]

router.get("/", (req, res)=>{
    res.send({items:items})
});


router.post('/',(req, res)=>{

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
})


router.get("/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const foundItem = items.find((item) => item.id ===id );

    res.send(foundItem)

})


router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const deletedItem = items.find(user => user.id === id);
  
     items = items.filter(item => item.id !== id); 
  
    res.send(`user with the name ${deletedItem.name} has been deleted`);
  });
  

router.put('/:id', (req, res) => {
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
});


export default router;
