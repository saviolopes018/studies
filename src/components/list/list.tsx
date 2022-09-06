import React from 'react';
import './style.scss';

function List(){
    const tasks = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'JavaScript',
    tempo: '01:00:00'
  }]
    return (
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className="item">
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;