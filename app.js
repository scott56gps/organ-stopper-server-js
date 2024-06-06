const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the Organ Stopper server!");
});

app.get("/organs", (req, res) => {
    res.type("application/json");
    res.send(organs);
});

app.get("/organs/:index", (req, res) => {
    const index = req.params.index;
    if (index >= organs.length || index < 0) {
        const error = generateOutOfIndexError(index, organs.length - 1);

        res.type("application/json");
        res.status(error.code);
        res.send(error);
        return;
    }

    res.type("application/json");
    res.send(organs[index]);
});

app.get("/pieces", (req, res) => {
    res.type("application/json");
    res.send(pieces);
});

app.get("/pieces/:index", (req, res) => {
    const index = req.params.index;
    if (index >= pieces.length || index < 0) {
        const error = generateOutOfIndexError(index, pieces.length - 1);

        res.type("application/json");
        res.status(error.code);
        res.send(error);
        return;
    }

    res.type("application/json");
    res.send(pieces[index]);
});

app.listen(port, () => {
    console.log(`Organ Stopper Server listening on port ${port}`);
});

const generateOutOfIndexError = (index, maxIndex) => {
    const errorCode = 400;
    const message = `ERROR: Given index ${index} out of bounds.  Index must be a number between 0 and ${maxIndex}.`;
    return generateError(errorCode, message);
};

const generateError = (code, message) => {
    return {
        code: code,
        message: message,
    };
};

const pieces = [
    {
        name: "Processional",
        composer: "William Mathias",
        stopCombinations: [],
    },
    {
        name: "Paean",
        composer: "Stephen Paulus",
        stopCombinations: [],
    }
];

const organs = [
    {
        id: 0,
        name: "Walt Disney Concert Hall",
        departments: [
            {
                name: "Great",
                stops: [
                    {
                        name: "Principal",
                        length: "8",
                    },
                    {
                        name: "Bourdon",
                        length: "8",
                    }
                ],
            },
            {
                name: "Pedal",
                stops: [
                    {
                        name: "Contrebombarde",
                        length: "32",
                    },
                    {
                        name: "Principal",
                        length: "16",
                    },
                ],
            },
        ],
    },
    {
        id: 1,
        name: "Richland Stake Center",
        departments: [
            {
                name: "Great",
                stops: [
                    {
                        name: "Bourdon",
                        length: "8",
                    },
                    {
                        name: "Blockflote",
                        length: "4",
                    }
                ],
            },
            {
                name: "Pedal",
                stops: [
                    {
                        name: "Lieblich Gedackt",
                        length: "16",
                    },
                    {
                        name: "Principal",
                        length: "8",
                    },
                    {
                        name: "Choral Bass",
                        length: "4",
                    },
                ],
            },
        ],
    }
]
