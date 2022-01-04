var arr=[{id: 1, name: 'edison'}, {id: 2, name: 'Annand'}, {id: 3, name: 'Vasnath'}]

let groupbyid = arr.reduce((r, index) => {
    r[index.id]=index[r.id]+1 || 1
     return r;
    }, {});
    console.log(groupbyid);