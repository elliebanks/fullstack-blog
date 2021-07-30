import { Query } from '../';

// this query will only get the author's name from mysql
// instead of name, email, time created, etc.
const all = () =>
    Query(
        'SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid'
    );

const one = (id: number) =>
    Query(
        'SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?',
        [id]
        // ? marks are called 'escape parameters':
        // you do NOT want to directly interpolate values in the statement
        // that gives hackers/users direct access to queries 
        // which opens us up to sql injection attacks
        // instead, put your value (id) inside the 'escape array values' : [id]
    );

const insert = (newBlog: { title: string, content: string, authorid: number }) =>
    Query(
        'INSERT INTO blogs SET ?', newBlog
    );
/* ^ (pass in an object instead) ^
   ^ this statment allows for scaling code. Better for more complex forms that contain several fields. ^
 
VS

const insert = ( title: string, content: string, authorid: number ) => 
Query('INSERT INTO blogs (title, content, authorid) VALUE (?, ?, ?)', [title, content, authorid]);
*/

const update = (editedBlog: { title?: string, content?: string }, id: number) =>
    Query(
        'UPDATE blogs SET ? WHERE id = ?', [editedBlog, id]);

const destroy = (id: number) =>
    Query(
        'DELETE FROM blogs WHERE id = ?', [id]);


export default {
    all,
    one,
    insert,
    update,
    destroy
}