export const getUser = async (req, res) => {
    try {
        const TeamPlayers = ['ayan', 'Rabbi', 'Sakib', 'Shakib', 'Tamim'];
        return res.send(TeamPlayers);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}