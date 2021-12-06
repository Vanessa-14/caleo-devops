const {Pool} = require('pg');

const pool = new Pool({
    host:  'ec2-50-17-255-120.compute-1.amazonaws.com',
    ssl: {
        rejectUnauthorized: false,
        ca: '',
        key: '',
        cert: '',
      },
    user: 'qrrwwszrwpasyh',
    password: '50900b124841f64da00f9a00a0d8569ea26e7c8960a25beafb12315e646946d9', 
    database: 'dbj581kgdf2s63', 
    port:  '5432'
});
console.log('DB is connected');

module.exports = {Pool,pool}
