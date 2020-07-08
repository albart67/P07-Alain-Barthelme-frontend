export default {
    getMessages:
        fetch('http://localhost:3000/api/allMessageUser')
            .then(res => res.json())

};