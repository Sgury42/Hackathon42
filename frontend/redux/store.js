import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import snackbars from './snackbars/reducer'
import lists from './lists/reducer'
import objects from './objects/reducer'


const defaultState = {
  objects: {
    group: {
      name: 'Make health solution available to everyone',
      description: 'We are three startups proposing tree amazing solutions to make health solution easier to reach.',
      users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }, { firstname: 'Alexendre', lastname: 'Caroff'}],
      tags: [{ label: 'Health', color: '#3dc1d3' }, { label: 'ReactJs', color: '#e66767' }, { label: 'Javascript', color: '#f5cd79' }],
      prolems: [
        {
          owner: { firstname: 'Sarah', lastname: 'Gury' },
          name: 'Sanitary authorization permit',
          description: 'We need a sanitary Permit for our reusable masks.',
          comments: [
            {
              author: { firstname: 'John', lastname: 'Doe' },
              text: "Please reach out to me, I have a contact who could help you getting it faster!",
            }
          ]
        },
        {
          owner: { firstname: 'John', lastname: 'Doe' },
          name: 'Social distancing',
          description: 'We need help to find solutions to make our product still available during COVID-19 crisis',
          comments: [
            {
              author: { firstname: 'Alexendre', lastname: 'Caroff'},
              text: "Have you think of giving away some reusable masks with each orders? I think it's a small invesment that is really worth it !"
            }
          ]
        }
      ],
      goals: [
        {
          owner: { firstname: 'Sarah', lastname: 'Gury' },
          name: 'launching our third product',
          description: 'We had the chance to work with amazing team that helpt us building this new pack of basics for COVID-19, goal now: making it available for public ASAP',
          deadline: '06/15/20',
          comments: [
            {
              author: { firstname: 'John', lastname: 'Doe' },
              text: "Congrats !!!",
            },
            {
              author: { firstname: 'Alexendre', lastname: 'Caroff'},
              text: "You guys are awesome !",
            }
          ]
        },
        {
          owner: { firstname: 'John', lastname: 'Doe' },
          name: 'make our first million dollars',
          description: "The First Million is the Hardest. It's true that it's easier for the rich to get richer. That first million is by far the toughest to make",
          deadline: "12/31/21",
          comments: [
            {
              author: { firstname: 'Alexendre', lastname: 'Caroff'},
              text: "Already done for us, sure you'll be in the team really soon man !"
            }
          ]
        },
        {
          owner: { firstname: 'Sarah', lastname: 'Gury' },
          name: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          deadline: '06/15/20',
        },
        {
          owner: { firstname: 'Alexendre', lastname: 'Caroff'},
          name: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          deadline: '06/15/20',
        },
        {
          owner: { firstname: 'Alexendre', lastname: 'Caroff'},
          name: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          deadline: '06/15/20',
        }
      ]
    }
  },
  lists: {
    tags: {
      data: [
        { label: 'Summer Body', color: '#ff9800' },
        { label: 'ReactJs', color: '#e66767' },
        { label: 'Javascript', color: '#f5cd79' },
        { label: 'C', color: '#424242' },
        { label: 'C++', color: '#222' },
        { label: 'Health', color: '#3dc1d3'},
        { label: 'Pharmacy', color: '#63cdda'},
        { label: 'Sport', color: '#574b90'},
        { label: 'Workout', color: '#786fa6'},
        { label: 'Building management', color: '#303952'},
        { label: 'Green/ecologie', color: '#3dc1d3'},
      ]
    },
    groups: {
      data: [
        {
          name: 'Make health solution available to everyone',
          description: 'We are three startups proposing tree amazing solutions to make health solution easier to reach.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }, { firstname: 'Alexendre', lastname: 'Caroff'}],
          tags: [{ label: 'Health', color: '#3dc1d3' }, { label: 'ReactJs', color: '#e66767' }, { label: 'Javascript', color: '#f5cd79' }]
        },
        {
          name: 'Sport toward better health',
          description: 'Startups in sport field',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Yama', lastname: 'Saraj' }, { firstname: 'Jessica', lastname: 'Jones' }, { firstname: 'Alexendre', lastname: 'Caroff' }],
          tags: [{ label: 'Health', color: '#3dc1d3'}, { label: 'Workout', color: '#786fa6'}]
        },
        {
          name: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis varius mi iaculis venenatis. Nulla sed orci felis. Fusce euismod nisl turpis, nec aliquet turpis lobortis in.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }],
          tags: [{ label: 'Health', color: '#3dc1d3'}, { label: 'Javascript', color: '#f5cd79' }]
        },
        {
          name: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis varius mi iaculis venenatis. Nulla sed orci felis. Fusce euismod nisl turpis, nec aliquet turpis lobortis in.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }],
          tags: [{ label: 'Health', color: '#3dc1d3'}, { label: 'Pharmacy', color: '#63cdda'}, { label: 'ReactJs', color: '#e66767' }, { label: 'Javascript', color: '#f5cd79' }]
        },
        {
          name: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis varius mi iaculis venenatis. Nulla sed orci felis. Fusce euismod nisl turpis, nec aliquet turpis lobortis in.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }],
          tags: [{ label: 'Health', color: '#3dc1d3'}, { label: 'ReactJs', color: '#e66767' }, { label: 'Javascript', color: '#f5cd79' }]
        },
        {
          name: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis varius mi iaculis venenatis. Nulla sed orci felis. Fusce euismod nisl turpis, nec aliquet turpis lobortis in.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }, { firstname: 'John', lastname: 'Doe' }],
          tags: [{ label: 'Health', color: '#3dc1d3'}, { label: 'Sport', color: '#574b90'}, { label: 'Javascript', color: '#f5cd79' }]
        },
        {
          name: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis varius mi iaculis venenatis. Nulla sed orci felis. Fusce euismod nisl turpis, nec aliquet turpis lobortis in.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }],
          tags: [{ label: 'Health', color: '#3dc1d3'}, { label: 'Pharmacy', color: '#63cdda'}, { label: 'Javascript', color: '#f5cd79' }]
        }
      ]
    },
    Chat: [
      {
        owner: { firstname: 'Alexendre', lastname: 'Caroff'},
        message: "Hey, just saw your new website, I think it's amazing ! Can we have a visio call sometimes I would like to know what framework did your team used for having such a great css !"
      },
      {
        owner: { firstname: 'Sarah', lastname: 'Gury' },
        message: "Yes I know they call me the godess of CSS"
      },
      {
        owner: { firstname: 'Alexendre', lastname: 'Caroff'},
        message: "Ahah it was used to be me !"
      },
    ]
  }
}

// combine all reducers
const rootReducer = combineReducers({
  snackbars,
  lists, 
  objects,
})

let store = undefined

// create store
const makeStore = (initialState = defaultState) => {
  store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  return store
}


export {
  store, 
  makeStore
}