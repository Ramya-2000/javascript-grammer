
var arr = [
    {id: 1, name: 'Stephen covey'},
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'}
];
const ids=arr.map(o => o.id)
const filtered=arr.filter(({id},index) => !ids.includes(id,index+1))
console.log(filtered)