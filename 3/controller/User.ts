
import express from 'express'
import User from "../model/User";

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  }
  catch (err: any) {
    res.status(500).json({ message: err.message })
  }
});

router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    address: req.body.address,
    phone: req.body.phone,
  });
  try {
    await user.save()
    res.status(201).json(user)
  }
  catch (err: any) {
    res.status(400).json({ message: err.message})
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (user != null){
      user.name = req.body.name ?? user.name
      user.email = req.body.email ?? user.email
      user.age = req.body.age ?? user.age
      user.address = req.body.address ?? user.address
      user.phone = req.body.phone ?? user.phone

      await user.save()
    }
    else {
      res.status(404).json({message: "Something is wrong with this request..."})
    }
    res.status(202).json(user)
  } 
  catch (err: any) {
    res.status(400).json({ message: err.message })
  }
});

router.delete('/', async (req, res) => {
  try {
    const user = await User.deleteMany();
    res.status(202).json(user)
  }
  catch (err: any) {
    res.status(204).json({ message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const todo = await User.findById(req.params.id)
    todo?.deleteOne()

    res.status(202).json(todo)
  }
  catch (err: any) {
    res.status(400).json({ message: err.message })
  }
});

export default router;