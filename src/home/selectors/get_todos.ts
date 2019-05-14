export const getVisibleTodos = (todos: any, filter: any) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter((t: any) => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter((t: any) => !t.completed)
  }
}
