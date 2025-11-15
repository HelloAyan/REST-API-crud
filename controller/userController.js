import User from '../model/userModel.js'

export const getUser = async (req, res) => {
    try {
        const TeamPlayers = ['ayan', 'Rabbi', 'Sakib', 'Shakib', 'Tamim'];
        return res.send(TeamPlayers);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const createUser = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;

        const userExit = await User.findOne({ email })
        if (userExit) {
            return res.status(400).json({ message: "User already exists." });
        }

        const savedUser = await userData.save();
        res.status(200).json(savedUser);

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const allUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const exitUser = await User.findById(id);
        if (!exitUser) {
            return res.status(404).json({ message: "User not found." })
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}