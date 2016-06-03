import React from 'react';
import {render} from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';
import KanbanBoard from './KanbanBoard';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import EditCard from './EditCard';
import NewCard from './NewCard';

// let cardsList = [
//     {
//         id: 1,
//         title: "Read the Book",
//         description: "I should read the **whole** book",
//         color: '#BD8D31',
//         status: "in-progress",
//         tasks: []
//     },
//     {
//         id: 2,
//         title: "Write some code",
//         description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
//         color: '#3A7E28',
//         status: "todo",
//         tasks: [
//             {
//                 id: 1,
//                 name: "ContactList Example",
//                 done: true
//             },
//             {
//                 id: 2,
//                 name: "Kanban Example",
//                 done: false
//             },
//             {
//                 id: 3,
//                 name: "My own experiments",
//                 done: false
//             }
//         ]
//     },
//     {
//         id: 3,
//         title: "This is a very long title, and its length is over 80 characters. Trust me. This is totally wrong",
//         description: "This is a pretty long description",
//         color: 'blue',
//         status: 'done',
//         tasks: []
//     }
// ];

render((
    <Router history={createBrowserHistory()}>
        <Route component={KanbanBoardContainer}>
            <Route path="/" component={KanbanBoard}>
                <Route path="new" component={NewCard} />
                <Route path="edit/:card_id" component={EditCard} />
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));
