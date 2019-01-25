const list = {
    Todos: []
};

module.exports = {
    fetch: (req, res) => {
        const {listName} = req.query;
        if (list[listName]) {
            res.status(200).send(list[listName]);
        } else {
            res.status(404).send('List Not found bro');
        }
    },

    post: (req, res) => {
        // req.body used with post 
        // console.log(req.body);//req a huge response 
        const {todo, listName } = req.body;
        if (!list[listName]){
            list[listName] = [];
        }
        list[listName].push(todo);
        res.status(201).send('post sucess');
        // res.send('POST request to the homepage')
    },
    delete: (req, res) => {
        const { index, listName} = req.query;
        list[listName].splice(index, 1);
        res.status(202).send("Sucessful delete");
    // res.send('POST request to the homepage')
    },
//seting up route and controllers 
}