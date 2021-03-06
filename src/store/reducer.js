import { combineReducers } from 'redux';

import input from 'src/store/reducers/input';
import tasks from 'src/store/reducers/tasks';
import user from 'src/store/reducers/user';
import modal from 'src/store/reducers/modal';

const reducer = combineReducers({
  input,
  tasks,
  user,
  modal
});

export default reducer;

// import tasks from 'src/components/datas/tasks'

// import { INPUT_CHANGE, ADD_TASK, DELETE_TASK, TASK_DONE  } from 'src/store/actions';

// // On instancie le state par défaut
// const initialState = {
//   greetingMessage: 'Bonjour depuis le store !',
//   tasks: tasks,
//   inputValue: ""
// };

// // On instancie l'action par défaut
// const defaultAction = {};


// //Gestion des traitements des différentes action 
// const reducer = (state = initialState, action = defaultAction) => {
//   switch (action.type) {
//     // Gestion du refresh de l'input après soumission, l'input prend la valeur de l'action transmise par la methode onChange
//     case INPUT_CHANGE: {
//       return {
//         ...state,
//         inputValue: action.value
//       }
//     }
//     // Gestion de l'ajout d'une tâche
//     case ADD_TASK: {
//       console.log('ajout tache');
//       const tasksIds = state.tasks.map(task => task.id);
//       const newTask= {
//         title: action.value,
//         // TODO : optimiser l'attribution de l'id, risque que des tâches aient le même id en cas de suppression puis d'ajout
//         id: Math.max(...tasksIds) + 1,
//         done: false
//       }
//       console.log(newTask)
//       //Tentative de tri des tâches en fonctions de la propriétés done
//       const newTaskList = state.tasks;
//       newTaskList.push(newTask);
//       //Fonctionne mais revoir la compréhension de la synthaxe de cette ternaire.
//       newTaskList.sort(function(a, b){
//         return(a.done === false)? 0: a? 1 : -1;
//       })
//       return {
//       ...state,
//       tasks: [...newTaskList],
//       inputValue: "",
//       }
//     }
//     //Gestion de la suppresion d'une tâche
//     case DELETE_TASK: {
//       console.log('suppression tâche id:', action.value);
//       console.log(tasks);
//       let updatedTasks = state.tasks;
//       // TODO optimiser la méthode de suppresion, splice doit pouvoir s'utiliser de manière plus simple
//       for(let i= 0; i <= updatedTasks.length - 1; i ++){
//         if(updatedTasks[i].id === action.value) {
//           updatedTasks.splice(i, 1);
//         }
//       }
//       console.log('tableau après suppression :',updatedTasks);
      
//       return {
//         ...state,
//         tasks: [...updatedTasks]
        
//       }
//     }
//     // Gestion de la validation d'une tâche
//     case TASK_DONE: {
//       console.log('tâche faite', action.value);
//       const taskDone = state.tasks.map(task => {
//         if (task.id === action.value){
//           task.done = !task.done;
//           return task;
//         } else {
//           return task;
//         }
//       });

//       //Tentative de tri des tâches en fonctions de la propriétés done
//       //Fonctionne mais revoir la compréhension de la synthaxe de cette ternaire.
//       taskDone.sort(function(a, b){
//         return(a.done === false)? 0: a? 1 : -1;
//       })
            
//       return {
//         ...state,
//         tasks: taskDone
        
//       }
//       /**
//        *  TODO : 
//        * => trier les tâches en indiquant en premier les tâches restant à effecuter
//        * => Donner la possibilité de prioriser des tâches
//       */

//     }
//     default: {
//       // return state;
//       // Dans le cas où on ne comprend pas quelle est l'action à
//       // effecture (action.type n'est pas reconnu), on retourne
//       // une copie non-altérée du state courant, reçu en paramètre.
//       return { ...state };
//     }
//   }
// };

// export default reducer;
