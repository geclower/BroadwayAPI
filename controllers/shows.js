import Show from "../models/Show.js";

export const getShows = async (req, res) => {
    try {
        const shows = await Show.find();
        res.json(shows)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

export const getShow = async (req, res) => {
    try {
        const { id } = req.params;
        const show = await Show.findById(id)

        if (show) {
            return res.json(show)
        }
        
        res.status(404).json({ message: "Show not found."})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

export const createShow = async (req, res) => {
    try {
        const show = await Show.create([...req.body])
        res.status(201).json(show)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

export const updateShow = async (req, res) => {
    try {
        const { id } = req.params
        const show = await Show.findByIdAndUpdate(id, req.body)

        if(show){
        return res.status(201).json(show)
        }
        
        res.status(404).json({message: "Show not found"})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

export const deleteShow = async (req, res) => {
    try {
        const { id } =  req.params
        const deleted = await Show.findByIdAndDelete(id)

        if(deleted){
            return res.status(201).send("Show deleted.")
        }

        throw new Error("Show not found")

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

