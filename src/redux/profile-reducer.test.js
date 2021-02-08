import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";

let state = {
  posts: [
    {id: 1, message: 'You have car?', likeCounts: 0},
    {id: 2, message: "It's impossible, i dont have car", likeCounts: 28},
    {id: 3, message: "I have very good computer", likeCounts: 17},
    {id: 4, message: "You are stupid", likeCounts: 15},
  ]
}

it('length of posts should be incremented', ()=> {
  let action = addPostCreator('I am cool',)

  let newState = profileReducer(state,action)
  expect(newState.posts.length).toBe(5)
});
it('message of new posts should be correct', ()=> {
  let action = addPostCreator('I am cool',)

  let newState = profileReducer(state,action)
  expect(newState.posts[4].message).toBe('I am cool')
});
it('after deleting length of messages should be decrement', ()=> {
  //Test data
  let action = deletePost(1)
  //action
  let newState = profileReducer(state,action)
  //expectation
  expect(newState.posts.length).toBe(3)
});
it(`after deleting length shouldn't be decrement if id is incorrect`, ()=> {
  //Test data
  let action = deletePost(1000)
  //action
  let newState = profileReducer(state,action)
  //expectation
  expect(newState.posts.length).toBe(4)
});



