import { Query } from '../';

// this query will only get the author's name from mysql
// instead of name, email, time created, etc.
const all = () => Query(
    `SELECT blogs.*, authors.name FROM blogs 
    JOIN authors ON authors.id = blogs.authorid;`
    );


export default {
    all
}