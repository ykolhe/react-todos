import React from 'react'
import TodoRowItem from './TodoRowItem'

function TodoTables(props){
    return (<table className='table table-hover'>
        <thead>
            <tr>
                <th scope='col'>
                    #
                </th>
                <th scope='col'>
                    Description
                </th>
                <th scope='col'>
                    Assigned
                </th>
            </tr>
        </thead>
        <tbody>
                <TodoRowItem rownumber={props.todos[0].rownumber} 
                  rowDiscription={props.todos[0].rowDiscription} 
                  rowAssigned={props.todos[0].rowAssigned}
                />
                <TodoRowItem rownumber={props.todos[1].rownumber} 
                  rowDiscription={props.todos[1].rowDiscription} 
                  rowAssigned={props.todos[1].rowAssigned}
                />
                <TodoRowItem rownumber={props.todos[2].rownumber} 
                  rowDiscription={props.todos[2].rowDiscription} 
                  rowAssigned={props.todos[2].rowAssigned}
                />
        </tbody>
    </table>)
}

export default TodoTables
