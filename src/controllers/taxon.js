const taxons = [];

exports.getAll = async (req, res) => {
    // Put your code here
    res.json(taxons);
};

exports.get = async (req, res) => {
    const { id } = req.params;

    // Put your code here
    if (!id) {
        return res.sendStatus(400);
    }

    const taxon = taxons.find((t) => t.taxonomy_id === id);

    if (!taxon) {
        return res.sendStatus(204);
    }

    res.json(taxon);
};

exports.create = async (req, res) => {
    const { scientific_name, common_name, taxonomy_id } = req.body;

    // Put your code here
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { scientific_name, common_name } = req.body;

    // Put your code here
};

exports.delete = async (req, res) => {
    const { id } = req.params;

    // Put your code here
};