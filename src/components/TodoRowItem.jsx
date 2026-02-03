function TodoRowItem(props){

    return (
        <tr>
            <th scope="row">{props.rownumber}</th>
            <td>{props.rowDiscription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem