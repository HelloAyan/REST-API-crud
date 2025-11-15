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