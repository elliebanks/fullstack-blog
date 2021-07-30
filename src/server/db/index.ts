import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {

        const sql = mysql.format(query, values);
        // console.log(sql); DEBUG

        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// export const tags = async(blogid: string | number) =>{
//     return new Promise((resolve, reject) => {
//         connection.query('call spGetTag(?)', [blogid], (err, results) => {
//             if (err) {
//                 return reject (err)
//             }
//             resolve (results)
//         })
//     })
// }

import blogs from './queries/blogs';
export default {
    blogs
}