import Goal from "@models/goalModel";
// @desc Get
// @route GET /api/read
// @access Private
export const readData = async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json({ message: goals })
}

// @desc Create
// @route POST /api/create
// @access Private
export const createData = async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json({ message: goal })
}

// @desc update
// @route PUT /api/update/:id
// @access Private
export const updateData = async (req, res) => {
    const updateGoals = await Goal.findByIdAndUpdate(
        req.params.id, 
        req.body.text, 
        {new: true}
    )
    res.status(200).json({ message: updateGoals + `Update ${req.params.id}`});
}

// @desc Delete
// @route Delete /api/delete/:id
// @access Private
export const deleteData = async (req, res) => {
    res.status(200).json({ message: `Delete ${req.params.id}`});
}